import React from 'react'
import Services from '../components/Services'
import { recanvis } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection';
import Recanvis from '../components/Recanvis';

const Cars = () => {
    return (
        <>
        <Services typeOf={true}/>
        <InfoSection {...recanvis}/>
        <Recanvis />
        </>
    )
}

export default Cars
