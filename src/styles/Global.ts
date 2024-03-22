/* eslint-disable dot-notation */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        outline: 0;
    }

    body > * {
        overflow: hidden;
    }

    html {
        background: ${(props) => props.theme['lilac']};
        overflow-x: hidden;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

`
