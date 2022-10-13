import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.nav`
    display: flex;
    gap:8px;
`
export const NavItem = styled(NavLink)`
    padding: 4px;
    background-color: #1F4E49;
    color: #F2F2F2;
    border:none;
    font-size: medium;
    outline: none;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #FF931E;
        color: #1F4E49;
    }

    &.active {
        background-color: #FF931E;
        color: #1f4e49;
    }
`