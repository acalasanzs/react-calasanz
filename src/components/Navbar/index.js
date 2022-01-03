import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll'
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

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = _=>{
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color:"#d4a2e8"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>calasanz</NavLogo>
                    {/* <MobileLogo to="/" src=""></MobileLogo> */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Sobre nosaltres</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="shop" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Botiga</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about-us" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Qui som</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="recomendations" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Recomenacions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="search" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Cercar</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/cars" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Cotxes</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
