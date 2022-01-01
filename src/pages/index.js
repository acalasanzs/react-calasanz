import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';

const Home = () => {
    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            {/* Add Services for Recomendations */}
            <Footer />
        </>
    )
}

export default Home
