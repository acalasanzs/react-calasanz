import React from 'react';
import logo from '../../images/logo.svg'
import video from '../../videos/video3.mp4'
import { Row } from '../Recanvis/Elements';
import {AHeroContainer, AHeroBg, VideoBg, AHeroContent, ALogoWrapper, AHeroText} from './AboutHeroElements'
const AboutHero = () => {
  return (
      <>
    <AHeroContainer>
        <AHeroBg>
            <VideoBg autoPlay loop muted src={video} />
        </AHeroBg>
        <AHeroContent>
            <ALogoWrapper>
                <img src={logo} style={{filter: "brightness(2)"}} width="120px" alt=''></img>
            </ALogoWrapper>
            <h2>D'on som?</h2>
            <p>Som una empresa que estem ubicats a Barcelona.</p>
        </AHeroContent>
        <div class="mouse_scroll" style={{bottom: "60px",left: "50%", top: "auto", transform: "translate(-50%,0)"}}>
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
    </AHeroContainer>
    <AHeroText>
        <Row>
            <h2>Hola</h2>
        </Row>
    </AHeroText>
    </>
    );
};

export default AboutHero;
