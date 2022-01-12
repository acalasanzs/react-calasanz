import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import driftbg from '../../images/driftbg.jpg'
export const Event = styled.div`
    background: url(${driftbg});
    background-size: cover;
    background-attachment: fixed;
`
export const RecanvisSection = styled.section`
    color: #d7d7d7;
    padding-top: 1rem;
    overflow: hidden;
`
export const RecanvisContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`
export const RecanvisRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px 0 -15px;
`
export const RecanvisWrapper = styled.div`
    padding-bottom: 7.5rem;
    padding-top: 5.625rem;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
export const RecanvisWrapperContainer = styled.div`
    padding-bottom: 5.625rem;
`
export const RecanvisHeader = styled.div`
    position: relative;
`
export const RecanvisH1 = styled.h1`
    position: relative;
    margin-bottom: 35px;
    font-size: 7.75rem;
    z-index: 1;
    letter-spacing: -.15rem;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 1;
    margin: 0;

    @media screen and (max-width: 860px) {
        font-size: 5.8125rem;
    }
`
export const BlackFlash = styled.span`
    font-weight: 900;

    &::before{
        content: 'calasanz';
        text-transform: uppercase;
        position: absolute;
        opacity: .1;
        top: 70%;
        left: -480px;
        transform: rotate(-90deg) translate(0,-50%);
        z-index: -1;
    }
    &::after{
        content: 'calasanz';
        text-transform: uppercase;
        position: absolute;
        opacity: .1;
        top: 70%;
        right: -480px;
        transform: rotate(90deg) translate(0,-50%);
        z-index: -1;
    }
    @media screen and (max-width: 860px) {
        &::before{
            left: -160px;
        }
        &::after{
            right: -160px;
        }
    }
`
export const RecanvisBolt = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    aspect-ratio: auto 59/82;
    @media screen and (max-width: 860px) {
        width: 44.25px;
    }
`
export const Light = styled.span`
    font-weight: 400;
    letter-spacing: -.15rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 1;
`
export const BlackYear = styled.span`
    position: relative;
    right: 0;
    bottom: 0;
    font-weight: 900;
    font-size: 7.75rem;
    letter-spacing: -.15rem;
    font-family: 'Montserrat', sans-serif;
    @media screen and (max-width: 860px) {
        font-size: 5.8125rem;
    }
`
export const RecanvisSubtitle = styled.div`
    position: relative;
    right: 0;
    bottom: 0;
    margin-bottom: 3rem;
    color: #c8ff00;
    font-size: 1.5rem;
    letter-spacing: normal;
    font-weight: 700;
`
export const RecanvisSubitleSpan = styled.span`
    font-family: 'Montserrat', sans-serif;
`
export const RecanvisSubRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
`
export const RSRWrapper = styled.div`
    position: relative;
    z-index: 10;
    -webkit-box-flex: 0;
    position: absolute;
    left: 50%;
    max-width: 600px;
    transform: translateX(-50%);
    flex: 0 0 50%;
    max-width: 50%;
`
export const RSRWP = styled.p`
    font-size: 1.25rem;
    letter-spacing: normal;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1.25rem;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
`
export const EventContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
`
export const EventWrapper = styled.div`
    padding-top: 1rem;
    max-width: 1000px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`
export const EventRow = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    background-color: #fff;
    color: #111;
    &:first-of-type {
        border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 -16px 10px rgba(0,0,0,.4);
    }
    & iframe{
        width: 70%;
        margin: 0 auto 0 auto;
        border-radius: 25px;
    }
`
export const EventHeader = styled.div`
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 900;

    & img{
        object-fit: cover;
        margin-top: 100px;
        clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    }
    &:first-of-type img{
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

    @media screen and (max-width: 860px) {
        & img{
            margin-top: 0;
            margin-bottom: 30px;
            clip-path: unset;
        }
    }
`
export const EventH2 = styled.h2`
    margin-bottom: 0;
    color: #111;
    font-size: 2.91rem;
    
`
export const EventText = styled.div`
    font-size: 1.75rem;
`
export const EventFooter = styled.div`
    position: relative;
    &::after{
        height: 50%;
        max-height: 720px;
        position: absolute;
        z-index: 1;
        content: "";
        width: 100%;
        background-color: #fff;
        top: 0;
        bottom: 0;
    }
`
export const EventFooterWrapper = styled.div`
    max-width: 960px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`
export const Row = styled.div`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
export const FormContainer = styled.div`
    padding: 0;
    max-width: 993px;
    margin: 0 auto;

    background: none;
    border: 0 none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    float: none;
    font-size: 100%;
    height: auto;
    letter-spacing: normal;
    list-style: none;
    outline: none;
    position: static;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    width: auto;
    visibility: visible;
    overflow: visible;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
`
export const Form = styled.form`
    text-align: center;
    background-color: #222;
    padding: 1.875rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    color: white;
`
export const FormTitle = styled.div``
export const FormBody = styled.div``
export const FormBodyWrappper = styled.div``
export const FormBodyContainer = styled.div``
export const Column = styled.div``
export const Ticket = styled.div``