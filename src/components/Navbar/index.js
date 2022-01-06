import React, {useState, useEffect} from 'react';
import { FaCarAlt, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
import { 
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    SwitchContainer,
    BottomNav,
    BottomNavItem,
    LogoItem
} from './NavbarElements.js';
import './LightBulb.css';
import logo from '../../images/logo.svg';
import useLocalStorage from 'use-local-storage';

const Navbar = ({toggle}) => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    document.querySelector(".switch-light").className = "switch-light "+newTheme;
  }
  document.getElementById("root").setAttribute("data-theme",theme);
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = _=>{
        if(window.scrollY >= 80) {
            setScrollNav(true)
            document.querySelector(".switch-light").parentNode.classList.add("active");

        }else{
            setScrollNav(false)
            document.querySelector(".switch-light").parentNode.classList.remove("active");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    });

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <SwitchContainer>
            <div class={"switch-light "+theme}>
            <div class="line"></div>
            <a class="bulb-light" onClick={switchTheme}>
                
                <div id="light"></div>
                
                <div id="bulb">
                <div class="bulb-top">
                    <div class="reflection"></div>
                </div>
                <div class="bulb-middle-1"></div>
                <div class="bulb-middle-2"></div>
                <div class="bulb-middle-3"></div>
                <div class="bulb-bottom"></div>
                </div>
                
                <div id="base">
                <div class="screw-top"></div>
                <div class="screw-a"></div>
                <div class="screw-b"></div>
                <div class="screw-a"></div>
                <div class="screw-b"></div>
                <div class="screw-a"></div>
                <div class="screw-b"></div>
                <div class="screw-c"></div>
                <div class="screw-d"></div>
                </div>
            </a>
            </div>
        </SwitchContainer>
        <IconContext.Provider value={{color:"#d4a2e8"}}>
            <Nav scrollNav={scrollNav} id="nav-bar">
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>calasanz</NavLogo>
                    {/* <MobileLogo to="/" src=""></MobileLogo> */}
                    <MobileIcon onClick={toggle}>
                        <svg id="hamburger-toggle" class="hamburger-toggle" viewBox="0 0 100 100" width="40">
                            <path class="hamburger-toggle__line hamburger-toggle__line--top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path>
                            <path class="hamburger-toggle__line" d="m 30,50 h 40"></path>
                            <path class="hamburger-toggle__line hamburger-toggle__line--bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
                        </svg>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Sobre nosaltres</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="shop" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Botiga</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Recomenacions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about-us" smooth="true" duration={500} spy={true} exact="true" offset={-80}>Qui som</NavLinks>
                        </NavItem>
                        <NavItem>
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
            <BottomNav>
                <BottomNavItem>
                    <FaBars />
                </BottomNavItem>
                <BottomNavItem className='active'>
                    <LogoItem src={logo}/>
                </BottomNavItem>
                <BottomNavItem>
                    <FaCarAlt />
                </BottomNavItem>
            </BottomNav>
        </>
    )
}

export default Navbar;
