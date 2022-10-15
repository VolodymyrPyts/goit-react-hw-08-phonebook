import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
    color: #444444;
`

export const Form = styled.form`
    display: inline-block;
    background-color: #ffffff;
    text-align: center;
`

export const Label=styled.label`
    display: flex;
    gap: 8px;
    padding: 8px;
    height: 20px;
    justify-content: space-between;
    align-items:center;
    font-size: small;
`

export const Input=styled.input`
    border:1px solid #44444450;
    border-radius: 0;
    color: #444444;
    font-size: medium;
    outline: none;

    :hover,
    :focus{
        border-color: #444444;
    }
`

export const Button = styled.button`
    // margin-top: 5px;
    padding: 4px;
    justify-self: center;
    background-color: transparent;
    color: #444444;
    border:none;
    border-radius: 5px;
    font-size: medium;
    outline: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    :hover,
    :focus {
        background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
    }
`