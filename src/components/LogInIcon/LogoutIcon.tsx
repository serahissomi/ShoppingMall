import React from "react"
import { getAuth, signOut } from "firebase/auth"
import { IconButton } from "@mui/material"

import { ReactComponent as Logout } from "assets/icons/logout.svg"
import useCartStore from "apps/cartStore"

const LogoutIcon = () => {
    const auth = getAuth()
    const { clearCarts } = useCartStore()

    const handleLogout = async () => {
        try {
            await signOut(auth)
            clearCarts()
            alert("SEE YOU SOON")
            console.log("로그아웃 성공")
        } catch (error) {
            console.error("로그아웃 오류", error)
        }
    }
    return (
        <div className="mixed-button">
            <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={handleLogout}
            >
                <Logout width="35px" height="35px" />
            </IconButton>
        </div>
    )
}

export default LogoutIcon