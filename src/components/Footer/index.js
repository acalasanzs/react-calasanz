import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import oLogo from '../../images/oLogo.png';
import {FaCarAlt} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre l'empresa</FooterLinkTitle>
                                <FooterLink to="/cars">Cotxes</FooterLink>
                                <FooterLink to="/works">Com funciona?</FooterLink>
                                <FooterLink to="/testimonials">Opinions</FooterLink>
                                <FooterLink to="/about">Sobre nosaltres</FooterLink>
                                <FooterLink to="/politics">Termes de servei</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Els nostres Clients</FooterLinkTitle>
                                <FooterLink to="/">Cotxes</FooterLink>
                                <FooterLink to="/">Com funciona?</FooterLink>
                                <FooterLink to="/">Opinions</FooterLink>
                                <FooterLink to="/">Sobre nosaltres</FooterLink>
                                <FooterLink to="/">Termes de servei</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre l'empresa</FooterLinkTitle>
                                <FooterLink to="/">Cotxes</FooterLink>
                                <FooterLink to="/">Com funciona?</FooterLink>
                                <FooterLink to="/">Opinions</FooterLink>
                                <FooterLink to="/">Sobre nosaltres</FooterLink>
                                <FooterLink to="/">Termes de servei</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre l'empresa</FooterLinkTitle>
                                <FooterLink to="/">Cotxes</FooterLink>
                                <FooterLink to="/">Com funciona?</FooterLink>
                                <FooterLink to="/">Opinions</FooterLink>
                                <FooterLink to="/">Sobre nosaltres</FooterLink>
                                <FooterLink to="/">Termes de servei</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            calasanz
                        </SocialLogo>
                        <WebsiteRights>Albert Calasanz © {new Date().getFullYear()}; Àdria Ortega () © 2022</WebsiteRights>
                        <WebsiteRights>Tots els drets reservats. All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:albert.calasanz@cirvianum.cat" aria-label="Correu">
                                <SiGmail />
                            </SocialIconLink>
                            <SocialIconLink to="/cars" aria-label="Cars">
                                <FaCarAlt />
                            </SocialIconLink>
                            <SocialIconLink href="https://acalasanzs.000webhostapp.com/primary/" aria-label="Ortega Cars">
                                <img src={oLogo} width={"32px"} alt="Ortega Cars"/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
