import React from 'react';
import {FaBars,FaCarAlt} from 'react-icons/fa'
import { 
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements.js'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">calasanz</NavLogo>
                    {/* <MobileLogo to="/" src=""></MobileLogo> */}
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Sobre nosaltres</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="shop">Tenda</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about-us">Qui som</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="recomendations">Recomenacions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="search">Cercar</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
