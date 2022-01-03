import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(19, 15, 64, 0.2)0%, rgba(19, 15, 64, 0.6) 100%), linear-gradient(180deg, rgba(19, 15, 64, 0.2)0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 80px;
    text-align: center;
    
    @media screen and (max-width: 1050px){
        font-size: 56px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 1050px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 28px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 28px;
`
export const LogoWrapper = styled.div`
    display: flex;
    justify-self: center;
    margin: 0 0 50px 0;
    filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
    padding: 20px;
    border-radius: 50%;
    transition: 0.5s ease-in;
    cursor: pointer;
    &:hover{
        transition: 0.5s ease-in;
        transform: scale(1.1);
        background-color: #ddd;
        border-radius: 50%;
        width: 170px;
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
    }
`
export const Logo = styled.img`

`