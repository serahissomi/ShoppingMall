import React from "react"

import "containers/Header/styles/navstyle.css"

import NavButtonGroup from "components/NavButtonGroup/NavButtonGroup"
import { Link } from "react-router-dom"

const NavBar = (): React.JSX.Element => {
    return (
        <div className="navi">
            <Link style={{ textDecoration: "none" }} to="/">
                <h1 className="logo-title">SHOP</h1>
            </Link>

            <NavButtonGroup />
        </div>
    )
}

export default NavBar