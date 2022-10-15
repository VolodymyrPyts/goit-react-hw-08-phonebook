import styled from "styled-components";

export const List = styled.ul`
    color:#444444;
    font-size: large;
`
export const ListItem = styled.li`
    display: flex;
    margin-top: 4px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom:1px solid #78787850;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus{
        background-color: #f2f2f2;
    }
`