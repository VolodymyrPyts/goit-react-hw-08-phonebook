import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.nav`
    display: flex;
    gap:8px;
    padding: 0 12px;
`
export const NavItem = styled(NavLink)`
    padding: 4px;
    background-color: #ffffff;
    color: #444444;
    border:none;
    font-size: medium;
    outline: none;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
    }

    &.active {
        background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
    }
`