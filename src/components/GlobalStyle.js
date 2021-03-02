import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #202124;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 10vh;
        padding-top: 2rem;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem;
        border: 1px solid #FBBC04;
        background: transparent;
        color: #FBBC04;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #FBBC04;
            color:white;
        }      
    }

    h2{
        font-weight: lighter;
        font-size: 4rem; 
        color: #DDDEE1;
    }

    h3{
        color: #DDDDDD;
    }

    h4{
        font-weight: bold;
        font-size: 0.8rem;
        color: #af9239;
    }

    a{
        font-size: 1.1rem;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }    

`;

export default GlobalStyle;
