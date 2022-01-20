import styled from "styled-components"
export const AHeroContainer = styled.div`
    background: var(--background-2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`
export const AHeroBg = styled.div`
    position: absolute;
    top: 0;
    left:
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: var(--background-2);
    position: fixed;
    top: 0;
    left: 0;
`
export const AHeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0 0 15px rgba(0,0,0,.2));
    
    & h2{
        color: #fff;
        font-size: 5rem;
        text-align: center;
        
        @media screen and (max-width: 1050px){
            font-size: 4rem;
        }
        @media screen and (max-width: 480px){
            font-size: 3.2rem;
        }
    }

    & p {
        color: var(--theme);
        filter: brightness(5);
        font-size: 2rem;
        text-align: center;
        
        @media screen and (max-width: 1050px){
            font-size: 1.5rem;
        }
        @media screen and (max-width: 480px){
            font-size: 1.2rem;
        }
    }

`
export const ALogoWrapper = styled.div`
    display: flex;
    justify-self: center;
    margin: 0 0 50px 0;
    filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
    padding: 20px;
    border-radius: 50%;
    background-color: #111;
    border-radius: 50%;
    width: 150px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    cursor: pointer;
`
export const AHeroText = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 4;
    max-width: 1220px;
    color: var(--background-inverted);
    border-top-left-radius: 20px;
    border-top-right-radius: 30px;
    height: 500px;
    background: var(--background-2);
    box-shadow: 0 -15px 30 rgba(0,0,0,.4);
`