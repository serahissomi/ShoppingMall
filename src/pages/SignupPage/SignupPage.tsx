import React, { useRef } from "react"

import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "models/firebase"
import { FirebaseError } from "firebase/app"
import { useNavigate } from "react-router"

const SignupPage = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const data = new FormData(event.target as HTMLFormElement)

        const email = data.get("email")!.toString()
        const password = data.get("password")!.toString()
        const passwordConfirm = data.get("password-confirm")
        const name = data.get("nickname")

        if (password !== passwordConfirm) {
            alert("Password Confirmation Failed")
            passwordConfirmRef.current?.focus()
            return
        }

        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password)

            alert(`Welcome! ${name}!`)
            navigate("/login")
        } catch (err) {
            if (err instanceof FirebaseError) {
                switch (err.code) {
                    case "auth/weak-password":
                        alert("비밀번호는 6자리 이상이어야 합니다")
                        passwordRef.current?.focus()
                        break
                    case "auth/invalid-email":
                        alert("잘못된 이메일 주소입니다")
                        emailRef.current?.focus()
                        break
                    case "auth/email-already-in-use":
                        alert("이미 가입되어 있는 계정입니다")
                        window.location.href = "/"
                        break
                }
            } else {
                console.error(err)
            }
        }
    }

    return (
        <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "5%", marginBottom: "10%" }}
        >
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            회원 가입
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="username"
                            id="nickname"
                            label="닉네임"
                            autoFocus
                            name="nickname"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="email"
                            name="email"
                            variant="outlined"
                            inputRef={emailRef}
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="current-password"
                            name="password"
                            variant="outlined"
                            required
                            fullWidth
                            inputRef={passwordRef}
                            type="password"
                            id="password"
                            label="패스워드"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="current-password"
                            inputRef={passwordConfirmRef}
                            name="password-confirm"
                            variant="outlined"
                            required
                            fullWidth
                            id="password-confirm"
                            type="password"
                            label="패스워드 확인"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            계정생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    {/* <Grid item>
                    <Link href="/login" variant="body2">
                        이미 계정이 있습니까? 로그인 하세요.
                    </Link>
                </Grid> */}
                </Grid>
            </form>
        </Container>
    )
}

export default SignupPage