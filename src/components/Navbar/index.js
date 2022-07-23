import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
    LogoImg, Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn, NavBtnLink
} from './NavElements'
import Logo from '../../images/whiteLogo.png'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <LogoImg src={Logo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'
                                smooth={true} duration={500} spy={true} exact="true"
                                offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                smooth={true} duration={500} spy={true} exact="true"
                                offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true} duration={500} spy={true} exact="true"
                                offset={-80}
                            >Services &amp; Prices</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true} duration={500} spy={true} exact="true"
                                offset={-80}
                            >About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                                smooth={true} duration={500} spy={true} exact="true"
                                offset={-80}
                            >Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contact'
                            smooth={true} duration={500} offset={-80}
                        >Free Estimate</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>

        </>
    )
}

export default Navbar