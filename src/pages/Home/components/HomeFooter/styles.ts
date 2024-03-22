import { styled } from "styled-components";
import WaveOne from "./assets/WaveOne.png"
import WaveTwo from "./assets/WaveTwo.png"

export const FooterContainer = styled.footer`
    height: 16rem;
`

export const Footer = styled.div`
    background-color: ${(props) => props.theme['light-blue']};
    height: 100%;
    padding: 2rem 8rem;
    color: ${(props) => props.theme['white']};
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    span {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 1rem;
    }
`

export const Waves = styled.div`
    width: 100%;
    position: relative;
    height: 6.125rem;
    overflow: hidden;

    .one {
        position: absolute;
        z-index: 3;
        display: flex;
        width: 2076px;
        height: 99px;
        background: url(${WaveOne});
        animation: slideFooterOne 45s linear infinite;
        background-repeat: repeat;
        animation-delay: 0;
    }

    @keyframes slideFooterOne{
        0% {
            background-position-x: 0px;
        }
        100% {
            background-position-x: 2076px;
        }
    }

    .two {
        position: absolute;
        z-index: 2;
        display: flex;
        width: 2174px;
        height: 99px;
        background: url(${WaveTwo});
        animation: slideFooterTwo 30s linear infinite;
        opacity: 0.7;
        animation-delay: -7s;
    }

    @keyframes slideFooterTwo{
        0% {
            background-position-x: 0px;
        }
        100% {
            background-position-x: -2174px;
        }
    }
`