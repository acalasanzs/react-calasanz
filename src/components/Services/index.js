import React from 'react';
import thumb1 from '../../images/card_1.webp';
import thumb2 from '../../images/card_2.webp';
import thumb3 from '../../images/card_3.webp';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Els nostres preus</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={thumb1}/>
                    <ServicesH2>Hey there</ServicesH2>
                    <ServicesP>Hey there</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={thumb2}/>
                    <ServicesH2>Hey there</ServicesH2>
                    <ServicesP>Hey there</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={thumb3}/>
                    <ServicesH2>Hey there</ServicesH2>
                    <ServicesP>Hey there</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
