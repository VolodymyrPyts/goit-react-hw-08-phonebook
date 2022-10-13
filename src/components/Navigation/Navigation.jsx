
import { NavMenu, NavItem } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <NavMenu>
            <NavItem to="/login">Login</NavItem>
            <NavItem to="/register">Register</NavItem>
        </NavMenu>
    )
}