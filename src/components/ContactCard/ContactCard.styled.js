import styled from "styled-components";

export const Text = styled.span`
display: block;
    padding:  8px;
    width: 200px;
 `
export const Button = styled.button`
    margin: 0;
    padding: 4px;
    background-color: #1F4E49;
    color: #F2F2F2;
    border:none;
    font-size: small;
    outline: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    :hover,
    :focus {
        background-color: #FF931E;
        color: #1F4E49;
    }
`