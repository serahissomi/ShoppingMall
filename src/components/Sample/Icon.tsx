import React from "react"
import { ReactComponent as TrashBin } from "assets/icons/bin.svg"
import { ReactComponent as Bin } from "assets/icons/bin.svg"
import { ReactComponent as EmptyCart } from "assets/icons/empty_cart.svg"
import { ReactComponent as Login } from "assets/icons/login.svg"
import { ReactComponent as Logout } from "assets/icons/logout.svg"
import { ReactComponent as User } from "assets/icons/user.svg"
import { ReactComponent as Cart } from "assets/icons/cart.svg"

const Icon = (): React.JSX.Element => {
    return (
        <div>
            <div>
                <TrashBin width="40px" height="40px" />
            </div>
            <div>
                <Bin width="40px" height="40px" />
            </div>
            <div>
                <EmptyCart width="450px" height="450px" />
            </div>
            <div>
                <Login width="40px" height="40px" />
            </div>
            <div>
                <Logout width="40px" height="40px" />
            </div>
            <div>
                <User width="40px" height="40px" />
            </div>
            <div>
                <Cart width="40px" height="40px" />
            </div>
        </div>
    )
}

export default Icon