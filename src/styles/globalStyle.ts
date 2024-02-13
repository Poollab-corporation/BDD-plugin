import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    body{
      padding-bottom:80px;
      overflow-y:auto;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, ul, li, p, button {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* width */

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        background: #F2F4F6;
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        background: #D1D6DB;
        border-radius: 4px;
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: #B0B8C1;
    }

    input[type=password]::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    input[type=password]::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    /* Loading */
    #loading {
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.55);
        z-index: 99999;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    #loading.is-loading {
        visibility: visible;
        opacity: 1;
    }


    #loading.is-loading:before {
        content: '요청중입니다. 잠시만 기다려주세요.';
        padding: 10px 10px 10px 40px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        border-radius: 8px;
        font-size: 14px;
        transform: translate(-50%, -50%);

    }
`
