import styled from 'styled-components';
import darkBg from '../../images/image1.webp'

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;

    @media screen and (max-width: 1050px) {
        height: 1100px;
    }
    @media screen and (max-width: 768px) {
        height: 1550px;
    }
`
export const ServicesOverlay = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(${darkBg});
    background-size: cover;
    background-attachment: fixed;
    left: 0;
    top: 0;
    filter: hue-rotate(190deg);
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 50px;
    column-gap: 150px;
    justify-content: center;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    align-self: center;
    border-radius: 20px;
    justify-self: center;
    position: relative;
    width: 300px;
    margin-bottom: 40px;
    height: 400px;
    background: linear-gradient(0deg, rgb(27,27,27) , #0a3d62  100%);
    transform-style: preserve-3d;

    &::after{
        content: 'calasanz';
        position: relative;
        bottom: -240px;
        left: 50px;
        font-size: 2.5em;
        font-weight: 900;
        color: rgb(255, 255, 255);
        opacity: 0;
        transition: 0.5s;
    }
    &:hover::after{
        opacity: 0.4;
    }
    &:hover h2{
        top: 20px;
        opacity: 1;
        transform: translate3d(0,0,75px);
    }
    &:hover a{
        bottom: 30px;
        opacity: 1;
    }
    &:nth-child(2){
        background: linear-gradient(0deg, rgb(27,27,27) , #620a0a  100%);
    }
    &:nth-child(3){
        background: linear-gradient(0deg, rgb(27,27,27) , #0a622a  100%);
    }
    &:nth-child(1) a{
        background: linear-gradient(90deg, var(--theme) 0%, var(--theme-2) 50%, #74b9ff 75%,#0984e3 100%);
    }
    &:nth-child(2) a{
        background: linear-gradient(90deg, var(--theme) 0%, var(--theme-2) 50%, #e17055 75%,#d63031 100%);
    }
    &:nth-child(3) a{
        background: linear-gradient(90deg, var(--theme) 0%, var(--theme-2) 50%, #55efc4 75%,#00b894 100%);
    }
    &:nth-child(3) img, &:nth-child(1) img{
        width: 250px;
    }
    &:nth-child(1) div{
        background: linear-gradient(0deg, #379bf7 0%, #276fb3 100%);
    }
    &:nth-child(2) div{
        background: linear-gradient(0deg, #f73737 0%, #942323 100%);
    }
    &:nth-child(3) div{
        background: linear-gradient(0deg, #37f7bd 0%, #23a37d 100%);
    }

`

export const ServicesIcon = styled.img`
    width: 300px;
    height: auto;
    position: absolute;
    top: 35%;
    left: 50%;
    transition: 0.5s;
    z-index: 11;
    transform-style: preserve-3d;
    transform: translate3d(-50%,-70%,50px);
`

export const ServicesH1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const ServicesH2 = styled.h2`
    position: absolute;
    top: 40px;
    left: 0;
    text-align: center;
    font-size: 2em;
    color: rgb(227, 227, 227);
    width: 100%;
    transform: translate3d(0,0,0);
    transition: 0.5s;
    opacity: .6;
    z-index: 10;
`

export const ServicesBuy = styled.a`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate3d(-50%,0,75px);
    color: white;
    background-size: 300% 100%!important;
    background-position: left;
    padding: 10px 25px;
    border-radius: 15px;
    text-decoration: none;
    transition: background-position 0.5s!important;
    opacity: 0;

    &:hover{
        background-position: right!important;
    }
`
export const ServicesCardRect = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    width: 100%;
    height: 50%;
    left: 50%;
    transition: 0.5s;
    clip-path: polygon(0% 100%, 100% 50%, 100% 0%, 0% 0%);
    transform-style: preserve-3d;
    z-index: 10;
    opacity: 1;
    transform: translate3d(-50%,0%,0);
    transition: 0.5s;
`