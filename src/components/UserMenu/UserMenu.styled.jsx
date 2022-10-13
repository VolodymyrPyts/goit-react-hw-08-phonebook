import styled from "@emotion/styled";


export const UserNav = styled.div`
    display: flex;
    gap:8px;
    align-items: center;
    color: #1F4E49;
    `
export const Button = styled.button`
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
`

export const UserLabel = styled.span`
    display: block;
    padding-right:  8px;
    font-size: medium;
    font-weight: 700;
    
 `