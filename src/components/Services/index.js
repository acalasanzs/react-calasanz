import React from 'react';
import thumb1 from '../../images/fiat-500.png';
import thumb2 from '../../images/fiat-panda.png';
import thumb3 from '../../images/Hyundai i10.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesBuy, ServicesCardRect, ServicesOverlay } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Els nostres preus</ServicesH1>
            <ServicesWrapper>
                <ServicesCard className='car-card'>
                    <ServicesH2>Fiat 500</ServicesH2>
                    <ServicesIcon src={thumb1}/>
                    <ServicesCardRect />
                    <ServicesBuy>Ves-hi!</ServicesBuy>
                </ServicesCard>
                <ServicesCard className='car-card'>
                    <ServicesH2>Hyundai i10</ServicesH2>
                    <ServicesIcon src={thumb3}/>
                    <ServicesCardRect />
                    <ServicesBuy>Ves-hi!</ServicesBuy>
                </ServicesCard>
                <ServicesCard className='car-card'>
                    <ServicesH2>Fiat panda</ServicesH2>
                    <ServicesIcon src={thumb2}/>
                    <ServicesCardRect />
                    <ServicesBuy>Ves-hi!</ServicesBuy>
                </ServicesCard>
                <ServicesOverlay />
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
