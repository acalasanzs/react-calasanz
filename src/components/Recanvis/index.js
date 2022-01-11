import React from 'react';
import thumb1 from '../../images/hoonicorn.png';
import thumb2 from '../../images/audi.png';
import thumb3 from '../../images/lms.png';
import bolt from '../../images/bolt.svg'
import { RecanvisSection, RecanvisContainer, RecanvisRow, RecanvisWrapper, RecanvisHeader, RecanvisH1, BlackFlash, RecanvisBolt, BlackYear, RecanvisSubtitle, RecanvisSubitleSpan, RecanvisSubRow, RSRWrapper, RSRWP, RSRWButton } from './Elements';
const Recanvis = ({typeOf}) => {
    return (
        <RecanvisSection>
            <RecanvisContainer>
                <RecanvisRow>
                    <RecanvisWrapper>
                        <RecanvisHeader>
                            <RecanvisH1>
                                <BlackFlash>CALASANZ</BlackFlash>
                                <RecanvisBolt src={bolt}/>
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
                                <RSRWButton>Registrar-se</RSRWButton>
                            </RSRWrapper>
                        </RecanvisSubRow>
                    </RecanvisWrapper>
                </RecanvisRow>
            </RecanvisContainer>
        </RecanvisSection>
    )
}

export default Recanvis
