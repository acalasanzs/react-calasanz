import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Sobre nosaltres</SidebarLink>
                    <SidebarLink to="shop" onClick={toggle}>Botiga</SidebarLink>
                    <SidebarLink to="about-us" onClick={toggle}>Qui som</SidebarLink>
                    <SidebarLink to="recomendations" onClick={toggle}>Recomenacions</SidebarLink>
                    <SidebarLink to="search" onClick={toggle}>Cercar</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/cars">Cotxes</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
