import React from 'react';
import thumb1 from '../../images/fiat-500.png';
import thumb2 from '../../images/fiat-panda.png';
import thumb3 from '../../images/Hyundai i10.png';
import ServicesSVG from '../../images/street.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesBuy, ServicesCardRect, ServicesOverlay, ServicesCardSpecs, ServicesCardItem, PriceWrapper, PriceTag, ServicesOverlaySVG} from './ServicesElements';
const Services = ({typeOf}) => {
    return (
        <ServicesContainer id="services" typeOf={typeOf}>
            <ServicesH1>Els nostres preus (Recomenacions)</ServicesH1>
            <ServicesWrapper>
                <ServicesCard className='car-card mustChange'>
                    <ServicesH2>Fiat 500</ServicesH2>
                    <ServicesIcon src={thumb1}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>70</strong> CV
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>3500</strong> Revolucions
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>eco</strong> Etiqueta
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>10.771€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesCard className='car-card mustChange'>
                    <ServicesH2>Hyundai i10</ServicesH2>
                    <ServicesIcon src={thumb3}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>100</strong> CV
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>5</strong> Portes
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>1050l</strong> Maleter
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>10.659€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesCard className='car-card mustChange'>
                    <ServicesH2>Fiat panda</ServicesH2>
                    <ServicesIcon src={thumb2}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>85</strong> CV
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>5</strong> Portes
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>870l</strong> Malater
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>24.250€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesOverlay  typeOf={typeOf}/>
                <ServicesOverlaySVG src={ServicesSVG} />
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
