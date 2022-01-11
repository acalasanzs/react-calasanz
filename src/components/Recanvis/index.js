import React from 'react';
import {Button} from '../ButtonElements'
import bolt from '../../images/bolt.svg'
import { Event,RecanvisSection, RecanvisContainer, RecanvisRow, RecanvisWrapper, RecanvisHeader, RecanvisH1, BlackFlash, RecanvisBolt, BlackYear, Light, RecanvisSubtitle, RecanvisSubitleSpan, RecanvisSubRow, RSRWrapper, RSRWP, RecanvisWrapperContainer, EventContainer, EventHeader, EventWrapper, EventRow, EventH2, EventText } from './Elements';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
const Recanvis = () => {
    return (
        <Event>
            <RecanvisSection>
                <RecanvisContainer>
                    <RecanvisRow>
                        <RecanvisWrapper>
                            <RecanvisWrapperContainer>
                                <RecanvisHeader>
                                    <RecanvisH1>
                                        <BlackFlash>CALASANZ</BlackFlash>
                                        <RecanvisBolt width="59px" src={bolt}/>
                                        <Light>Miami</Light>
                                        <BlackYear>2022</BlackYear>
                                    </RecanvisH1>
                                    <RecanvisSubtitle>
                                        <RecanvisSubitleSpan>
                                            Ortega Forum
                                            <br/>
                                            18 de Maig, 2022
                                        </RecanvisSubitleSpan>
                                    </RecanvisSubtitle>
                                </RecanvisHeader>
                                <RecanvisSubRow>
                                    <RSRWrapper>
                                        <RSRWP>
                                            Acceleri els ingresos, una conversació a la vegada.
                                        </RSRWP>
                                        <Button to="/register" style={{fontFamily: "'proxima-nova', sans-serif", fontWeight: 900, borderRadius: "10px",color:"#222", fontSize: "22px",marginTop: "15px"}}>Registrar-se</Button>
                                    </RSRWrapper>
                                </RecanvisSubRow>
                            </RecanvisWrapperContainer>
                        </RecanvisWrapper>
                    </RecanvisRow>
                </RecanvisContainer>
            </RecanvisSection>
            <EventContainer>
                <EventWrapper>
                    <EventRow>
                        <EventHeader>
                            <EventH2>
                                Tot comença amb una <Light>Conversació</Light>
                            </EventH2>
                        </EventHeader>
                        <EventText>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio.</p>
                        </EventText>
                    </EventRow>
                </EventWrapper>
            </EventContainer>
        </Event>
    )
}

export default Recanvis
