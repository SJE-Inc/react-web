import React from 'react'
import { Copy, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkHeading, FooterLink, FooterLinkA } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkHeading>Quick Links</FooterLinkHeading>
                            <FooterLink to='/' onClick={toggleHome}>Home</FooterLink>
                            <FooterLink to='services'
                                smooth={true} duration={500}
                            >Our Services</FooterLink>
                            <FooterLink to='about'
                                smooth={true} duration={500}
                            >About Us</FooterLink>
                            <FooterLink to='contact'
                                smooth={true} duration={500}
                            >Get Estimate</FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkHeading>Contacts</FooterLinkHeading>
                            <FooterLink to='/'>contacts.sje@gmail.com</FooterLink>
                            <FooterLink to='/'>857-330-4089</FooterLink>


                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkHeading>Social Media</FooterLinkHeading>
                            <FooterLinkA href='/' target="_blank">Facebook</FooterLinkA>
                            <FooterLinkA href='/' target="_blank">Instagram</FooterLinkA>
                            <FooterLinkA href='/' target="_blank">Tiktok</FooterLinkA>

                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <Copy>EVC Webdesign &copy; 2022</Copy>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer