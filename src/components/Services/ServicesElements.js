import styled from 'styled-components';
import darkBg from '../../images/carsbg.jpg'

export const ServicesContainer = styled.div`
    height: ${({typeOf}) => (typeOf? "100vh" : "600px")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    overflow-y: hidden;
    padding: ${({typeOf}) => (typeOf? "256px 0 128px 0" : "0")};

    @media screen and (max-width: 1219px) {
        height: 1100px;
    }
    @media screen and (max-width: 868px) {
        height: 1550px;
    }
`
export const ServicesOverlay = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: ${({typeOf}) => (typeOf?`url(`+darkBg+`)`:`radial-gradient(ellipse at bottom left, rgba(0,163,203,1) 40%, rgba(0,163,203,0) 40%),
    radial-gradient(ellipse at top right, rgba(0,163,203,1) 30%, rgba(0,163,203,0) 30%),
    linear-gradient(to right, rgba(98,87,147,1) 0%, rgba(98,87,147,1) 33%, rgba(213,93,100,1) 33%, rgba(213,93,100,1) 66%, rgba(228,145,41,1) 66%)`)};
    filter: brightness(var(--brightness));
    background-size: cover;
    opacity: 1;
    background-attachment: fixed;
    left: 0;
    top: 0;
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
    @media screen and (max-width: 1219px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    z-index: 2;
    align-self: center;
    border-radius: 20px;
    justify-self: center;
    position: relative;
    width: 300px;
    margin-bottom: 40px;
    height: 400px;
    background: linear-gradient(0deg, var(--card-bg) , var(--card-1)  100%);
    transform-style: preserve-3d;
    box-shadow: 0 0 10px rgba(0,0,0,.4);

    &::after{
        content: 'calasanz';
        position: relative;
        bottom: -240px;
        left: 50px;
        font-size: 2.5em;
        font-weight: 900;
        color: var(--background-inverted);
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
        background: linear-gradient(0deg, var(--card-bg) , var(--card-2)  100%);
    }
    &:nth-child(3){
        background: linear-gradient(0deg, var(--card-bg) , var(--card-3)  100%);
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
    &:nth-child(1) div:first-of-type{
        background: linear-gradient(0deg, #379bf7 0%, var(--card-1b) 100%);
    }
    &:nth-child(2) div:first-of-type{
        background: linear-gradient(0deg, #f73737 0%, var(--card-2b) 100%);
    }
    &:nth-child(3) div:first-of-type{
        background: linear-gradient(0deg, #37f7bd 0%, var(--card-3b) 100%);
    }
    &:hover ul{
        transform: translate3d(-50%,-50%,50px);
    }
    &:nth-child(1) strong, &:nth-child(1) span{
        color: var(--card-1b);
    }
    &:nth-child(2) strong, &:nth-child(2) span{
        color: var(--card-2b)
    }
    &:nth-child(3) strong, &:nth-child(3) span{
        color: var(--card-3b)
    }
    &:hover div:nth-of-type(2){
        transform: translate3d(-50%,0,75px);
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
    text-align: center;

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

    @media screen and (max-width: 768px) {
        transform: translate3d(0,-20px,50px);
        opacity: 1;
    }
`

export const ServicesBuy = styled.a`
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

    @media screen and (max-width: 768px) {
        opacity: 1;
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
export const ServicesCardSpecs = styled.ul`
    list-style: none;
    position: absolute;
    left: 50%;
    width: 75%;
    transition: 0.5s;
    transform: translate3d(-50%,-50%,0);
    top: 65%;
    z-index: 11;
    line-height: 2em;
    font-size: 1.5em;
    
`
export const ServicesCardItem = styled.li`
    color: var(--card-text);
`
export const PriceWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 300px;
    height: 40px;
    transform-style: preserve-3d;
    transform: translate3d(-50%,0,0px);
    transition: 0.5s;
    display: flex;
    justify-content: space-around;
`
export const PriceTag = styled.span`
    font-size: 2em;
    font-weight: bold;
`
export const ServicesOverlaySVG = styled.img`
    position: absolute;
    bottom: 0;
    left: 10px;
    width: 30%;
    height: auto;
    z-index: 0;

    @media screen and (max-width: 860px) {
        bottom: ${({typeOf}) => (typeOf? "64px" : "0")};
    }
`