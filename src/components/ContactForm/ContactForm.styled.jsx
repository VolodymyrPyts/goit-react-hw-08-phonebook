import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    padding: 8px;
    border: 1px solid #CCEBE8;
    color: #1F4E49;
`


export const Form = styled.form`
    display: inline-block;
    padding: 8px;
    background-color: #F2F2F2;
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

export const Button = styled.button`
    margin-top: 8px;
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