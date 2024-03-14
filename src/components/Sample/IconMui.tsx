import React from "react"

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import { ReactComponent as EmptyCart } from "assets/icons/empty_cart.svg"
import { IconButton } from "@mui/material"

const IconMui = (): React.JSX.Element => {
    return (
        <div>
            <div>
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="primary"
                    onClick={() => {}}
                >
                    <LoginOutlinedIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div>
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="inherit"
                    onClick={() => {}}
                >
                    <LogoutOutlinedIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div>
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="success"
                    onClick={() => {}}
                >
                    <DeleteOutlinedIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div>
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="default"
                    onClick={() => {}}
                >
                    <ShoppingCartOutlinedIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div>
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="secondary"
                    onClick={() => {}}
                >
                    <PersonOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div className="mixed-button">
                <IconButton
                    aria-label="delete"
                    size="large"
                    color="error"
                    onClick={() => {}}
                >
                    <EmptyCart width="400px" height="400px" />
                </IconButton>
            </div>
        </div>
    )
}

export default IconMui