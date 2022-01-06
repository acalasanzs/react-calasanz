import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        z-index: 1000;
    }
    &.menu{
        background: transparent;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-left: 24px;
 font-weight: bold;
 text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1050px){
        display: block;
        position: absolute;
        right: 24px;
        /* font-size: 1.8rem; */
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        height: 80px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 1050px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #3498db;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1050px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #2980b9;
    white-space: nowrap;
    padding: 10px 22px;
    color: #ecf0f1;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const SwitchContainer = styled.div`
    position: fixed;
    z-index: 9;
    right: 30px;
    transform-origin: 50% 0%;
    animation: 5s swing infinite;
    transition: 0.4s;
    margin-top: -110px;
    &.active{
        margin-top: -25px;
        animation: none;
    }
`

export const BottomNav = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background:  var(--nav-bg);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 76px;
    display: flex;
    z-index: 1000;
    font-size: 36px;
    filter: drop-shadow(0px -1px 6px  rgba(0, 0, 0, 0.08)) drop-shadow(0px -2px 12px  rgba(0, 0, 0, 0.12));
    transition: cubic-bezier(0.57, 0.23, 0.08, 0.96) .45s;
    animation: up 0.45s cubic-bezier(0.57, 0.23, 0.08, 0.96);
    justify-content: space-around;
    align-items: center;
    filter: drop-shadow( 0 0 5px var(--background-inverted-a));
`
export const BottomNavItem = styled.div`
    cursor: pointer;
    color: var(--nav);
    transition:ease-in-out .5s;
    background: var(--nav-bg);
    width: 100%;
    height: 56px;
    border-radius: 50px;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    backdrop-filter: brightness(var(--brightness));
    &.active{
        width: 150%;
        background: linear-gradient(90deg, rgba(84,160,255,1) 0%, rgba(153,128,250,1) 100%);
        color: #fff;
    }
    &.active img{
        filter: brightness(10);
    }
`
export const LogoItem = styled.img`
    width: 36px;
    filter: brightness(1);
`