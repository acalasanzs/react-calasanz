import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">Sobre nosaltres</SidebarLink>
                    <SidebarLink to="shop">Botiga</SidebarLink>
                    <SidebarLink to="about-us">Qui som</SidebarLink>
                    <SidebarLink to="recomendations">Recomenacions</SidebarLink>
                    <SidebarLink to="search">Cercar</SidebarLink>
                    <SidebarLink to="signup">Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
