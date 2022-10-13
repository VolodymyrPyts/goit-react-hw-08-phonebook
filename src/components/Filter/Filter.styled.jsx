import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    padding: 8px;
    gap:8px;
    height: 20px;
    background-color: #CCEBE8;
    align-items:center;
`

export const Input = styled.input`
    border:1px solid #1F4E4950;
    border-radius: 0;
    color: #1F4E49;
    font-size: medium;
    outline: none;

    :hover,
    :focus{
        border-color: #1F4E49;
    }
`
