import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';

const InfoSection = ({ id, imgStart, topLine, headline, description, buttonLabel, img, alt, primary }) => {
    return (
        <>
          <InfoContainer id={id} className='mustChange'>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading>{headline}</Heading>
                  <Subtitle>{description}</Subtitle>
                  <BtnWrap>
                    <Button to="home"
                    smooth="true"
                    duration={500}
                    spy={1}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    >{buttonLabel}</Button>
                  </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
    )
}
export default InfoSection
