import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const Welcome=styled.div`
    padding: 72px;
    border: 1px solid #CCEBE8;
    color: #1F4E49;

    div {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-size: x-large;
        
    
    }

    p {
        text-align: center;
        font-size: small;
    }
`

export const PLink = styled(Link)`
    
    color: #1F4E49;
    outline: none;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
         color: #FF931E;
    }
`