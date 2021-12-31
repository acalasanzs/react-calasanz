import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ens agrada acompañar-te</HeroH1>
                <HeroP>Vagis on vagis, troba el teu viatge ideal a un preu molt baix.</HeroP>
            </HeroContent>
            <HeroBtnWrapper>
                <Button to="signup">
                    Començar {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection
