import React from 'react';
import thumb1 from '../../images/hoonicorn.png';
import thumb2 from '../../images/audi.png';
import thumb3 from '../../images/lms.png';
import ServicesSVG from '../../images/street.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesBuy, ServicesCardRect, ServicesOverlay, ServicesCardSpecs, ServicesCardItem, PriceWrapper, PriceTag, ServicesOverlaySVG} from './ServicesElements';
import './mouseScroll.css';
const Services = ({typeOf}) => {
    return (
        <>
        <ServicesContainer id="services" typeOf={typeOf} className="mustChange">
            <ServicesH1>Els nostres preus (Recomenacions)</ServicesH1>
            <ServicesWrapper>
                <ServicesCard className='car-card'>
                    <ServicesH2>Hoonicorn</ServicesH2>
                    <ServicesIcon src={thumb1}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>1400</strong> CV
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>9800</strong> Revolucions
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>Metanol</strong> Combustible
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>450.326€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesCard className='car-card'>
                    <ServicesH2>Audi rs8 LMS</ServicesH2>
                    <ServicesIcon src={thumb3}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>700-900</strong> CV
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>5.4l</strong> V8
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>1100</strong> Kg
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>1.700.000€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesCard className='car-card'>
                    <ServicesH2>Audi RS 6 Avant</ServicesH2>
                    <ServicesIcon src={thumb2}/>
                    <ServicesCardRect />
                    <ServicesCardSpecs>
                        <ServicesCardItem>
                            <strong>250km/h</strong> max
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>3.6s</strong> 0-100km/h
                        </ServicesCardItem>
                        <ServicesCardItem>
                            <strong>600</strong> CV
                        </ServicesCardItem>
                    </ServicesCardSpecs>
                    <PriceWrapper>
                        <PriceTag>160.250€</PriceTag>
                        <ServicesBuy>Ves-hi!</ServicesBuy>
                    </PriceWrapper> 
                </ServicesCard>
                <ServicesOverlay  typeOf={typeOf}/>
                <ServicesOverlaySVG src={ServicesSVG} typeOf={typeOf}/>
            </ServicesWrapper>
        </ServicesContainer>
        <div class="mouse_scroll">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
        </>
    )
}

export default Services
