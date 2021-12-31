import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,TopLine,lightText,headline,darkText,description,buttonLabel,img,alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                  <TopLine>{TopLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button to="home">{buttonLabel}</Button>
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
