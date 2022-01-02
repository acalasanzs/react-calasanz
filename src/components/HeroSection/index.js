import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ens agrada acompañar-te</HeroH1>
                <HeroP>Vagis on vagis, troba el teu viatge ideal a un preu molt baix.</HeroP>
                <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                /* Add signup section */
                primary="true"
                dark="true"
                smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass='active'>
                    Començar {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
