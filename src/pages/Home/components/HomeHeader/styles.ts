import { styled } from "styled-components";
import Wave from "./images/Wave.png"

export const HomeHeaderContainer = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(170deg, #7400E9 5%, #FF006B 55%);

    display: flex;
    padding: 8rem 8rem;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 12.5rem;
        color: ${(props) => props.theme['white']};
        text-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25);
        font-size: 12.5rem;
        font-style: normal;
        font-weight: 900;
        line-height: 10.25rem;
    }

    h2 {
        color: ${(props) => props.theme['white']};
        text-align: center;
        text-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25);
        font-size: 4rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 0.32rem;
    }

    p {
        color: ${(props) => props.theme['white']};
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 2.25rem;
        max-width: 50rem;
    }
`

export const Waves = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    * {
        
    }

    .one {
        position: absolute;
        z-index: 3;
        display: flex;
        width: 4371px;
        height: 208px;
        background: url(${Wave});
        animation: slideOne 50s linear infinite;
        animation-delay: 0;
    }

    @keyframes slideOne{
        0% {
            background-position-x: 0px;
        }
        100% {
            background-position-x: 4371px;
        }
    }

    .two {
        position: absolute;
        z-index: 2;
        display: flex;
        width: 4371px;
        height: 208px;
        background: url(${Wave});
        animation: slideTwo 30s linear infinite;
        opacity: 0.7;
        animation-delay: -7s;
    }

    @keyframes slideTwo{
        0% {
            background-position-x: 0px;
        }
        100% {
            background-position-x: -4371px;
        }
    }

    .three {
        position: absolute;
        z-index: 2;
        display: flex;
        width: 4371px;
        height: 208px;
        background: url(${Wave});
        animation: slideOne 40s linear infinite;
        opacity: 0.4;
        animation-delay: -22s;
    }
`