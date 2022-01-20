import React from 'react';
import logo from '../../images/logo.svg'
import video from '../../videos/video3.mp4'
import video2 from '../../videos/video2.webm'
import video4 from '../../videos/video4.webm'
import social from '../../images/social.png'
import {AHeroContainer, AHeroBg, VideoBg, AHeroContent, ALogoWrapper, AHeroText, RowA} from './AboutHeroElements'
const AboutHero = () => {
  return (
      <div className='mustChange'>
    <AHeroContainer>
        <AHeroBg>
            <VideoBg autoPlay loop muted src={video} />
        </AHeroBg>
        <AHeroContent>
            <ALogoWrapper>
                <img src={logo} style={{filter: "brightness(1.2)"}} width="120px" alt=''></img>
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
        <RowA>
            <h2>Quina és la nostre funció?</h2>
            <p>Nosaltres et recomanem cotxes del tipus que els clients necessitin. Tambe els nostres clients poden alquilar cotxes quan ells necessitin, per exemple si estas de vacances i no tens el teu cotxe propi, amb nosaltres pots alquilar el cotxe que volguis amb les necessitats de cada client.</p>
        </RowA>
        <RowA>
            <video autoPlay loop muted src={video2} />
        </RowA>
    </AHeroText>
    <AHeroText>
        <RowA style={{marginTop: "-200px"}}>
                <video autoPlay loop muted src={video4} />
        </RowA>
        <RowA style={{marginTop: "-200px"}}>
            <h2>Contacte amb nosaltres</h2>
            <p style={{color: "var(--background-inverted)"}}>Si tens qualsevol dubte aquest es el nostre número de telèfon: <strong>657876987</strong>. <br/> El nostre correu: info@calasanz.com</p>
            <img style={{margin: "0 auto 0 auto"}} src= {social}
height= "150" width= "400" />
        </RowA>
    </AHeroText>
    </div>
    );
};

export default AboutHero;
