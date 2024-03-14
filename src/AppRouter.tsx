import React from "react"

import "./App.css"
import LoginPage from "pages/LoginPage/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "pages/MainPage/MainPage"
import SignupPage from "pages/SignupPage/SignupPage"
import { NavBar } from "containers"
import DetailPage from "pages/DetailPage/DetailPage"
import CartPage from "pages/CartPage/CartPage"

const AppRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <NavBar />
            <hr />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
            {/* <div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div> */}
        </BrowserRouter>
    )
}

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright ⓒ "}
//             reverselevel, {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     )
// }

export default AppRouter