import React from 'react'
import {
    SideBarContainer, Icon, CloseIcon, SideBarBtnWrap,
    SideBarWrapper, SideBarLink, SideBarMenu, SideBarRoute
} from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="home"
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        Home
                    </SideBarLink>
                    <SideBarLink to="discover"
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        Discover
                    </SideBarLink>

                    <SideBarLink to="services"
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        Services &amp; Prices
                    </SideBarLink>
                    <SideBarLink to="about"
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        About Us
                    </SideBarLink>
                    <SideBarLink to="contact"
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        Contact Us
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to='contact'
                        smooth={true} duration={500} offset={-80}
                        onClick={toggle}>
                        Free Estimate
                    </SideBarRoute>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar