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
    font-family: 'Exo', sans-serif;
    line-height: 1;
    @media screen and (max-width: 860px) {
        font-size: 5.8125rem;
    }
`
export const BlackYear = styled.span`
    position: relative;
    right: 0;
    bottom: 0;
    font-weight: 900;
    font-size: 7.75rem;
    letter-spacing: -.15rem;
    font-family: 'Exo', sans-serif;
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
    font-family: 'Exo', sans-serif;
`
export const RecanvisSubRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Exo', sans-serif;
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
    font-family: 'Exo', sans-serif;
`
export const EventContainer = styled.div`
    font-family: 'Exo', sans-serif;
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
`
export const EventHeader = styled.div`
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
export const EventH2 = styled.h2`
    margin-bottom: 0;
    color: #111;
    font-size: 4rem;
`
export const EventText = styled.div`
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    font-size: 1.75rem;
`