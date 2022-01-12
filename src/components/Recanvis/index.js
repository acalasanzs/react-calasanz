import React from 'react';
import {Button} from '../ButtonElements'
import bolt from '../../images/bolt.svg'
import { Event,RecanvisSection, RecanvisContainer, RecanvisRow, RecanvisWrapper, RecanvisHeader, RecanvisH1, BlackFlash, RecanvisBolt, BlackYear, Light, RecanvisSubtitle, RecanvisSubitleSpan, RecanvisSubRow, RSRWrapper, RSRWP, RecanvisWrapperContainer, EventContainer, EventHeader, EventWrapper, EventRow, EventH2, EventText, EventFooter, EventFooterWrapper, Row, FormContainer, Form, FormTitle, FormBody, FormBodyWrappper, FormBodyContainer, Ticket, Column } from './Elements';
import drift1 from '../../images/drift1.jpg'
import react from '../../images/react.png'
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
                        <EventHeader className='flex-col'>
                            <EventH2>
                                Tot comença amb una <Light>Conversació</Light>
                            </EventH2>
                            <img src={drift1} width={"100%"}></img>
                        </EventHeader>
                        <EventText className='flex-col'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio.</p>
                        </EventText>
                    </EventRow>
                    <EventRow>
                        <EventText className='flex-col'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque ullam nulla cumque delectus voluptatem alias possimus laboriosam, optio dolore, distinctio illo ipsum sequi officia repudiandae vero quidem ab fugiat.</p>
                        </EventText>
                        <EventHeader className='flex-col'>
                            <EventH2>
                                Aquesta pàgina s'ha fet amb <Light>React.js</Light>
                            </EventH2>
                            <img src={react} width={"100%"}></img>
                        </EventHeader>
                    </EventRow>
                    <EventRow>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y-Tv6ZWnkyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </EventRow>
                    <EventFooter>
                        <EventFooterWrapper>
                                <Row>
                                    <FormContainer>
                                        <Form>
                                            <FormTitle><h3>TIPUS DE TICKET</h3></FormTitle>
                                            <FormBody>
                                                <FormBodyWrappper>
                                                    <FormBodyContainer>
                                                        <Row>
                                                            <Column>
                                                            <Ticket>NORMAL</Ticket>
                                                            <h2>249€</h2>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos aut, magnam reiciendis praesentium voluptas veritatis iusto amet at error nulla ducimus aspernatur sint tempore culpa nemo a modi deserunt!</p>
                                                            </Column>
                                                            <Column>
                                                            <Ticket>VIP</Ticket>
                                                            <h2>599€</h2>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos aut, magnam reiciendis praesentium voluptas veritatis iusto amet at error nulla ducimus aspernatur sint tempore culpa nemo a modi deserunt!</p>
                                                            </Column>
                                                        </Row>
                                                    </FormBodyContainer>
                                                </FormBodyWrappper>
                                            </FormBody>
                                        </Form>
                                    </FormContainer>
                                </Row>
                        </EventFooterWrapper>
                    </EventFooter>
                </EventWrapper>
            </EventContainer>
        </Event>
    )
}

export default Recanvis
