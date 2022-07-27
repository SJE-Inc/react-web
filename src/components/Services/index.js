import React from 'react'
import { Button } from '../BtnElement';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-7.svg';
import { TopLine } from '../InfoSection/InfoElements';
import { ServiceUl, ServiceLi, Red, ServiceContainer, ServicePrice, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesWrapper } from './ServiceElements'

const Services = ({ primary, secondary, dark, dark2, Header2, Header3, PWD1, PWD2, PWD3, PCD1, PCD2, PCD3, Price2, Price3, Header1, LCD1, LCD2, LCD3, Price1, darkText, id, lightBg, lightText }) => {
    return (
        <>
            <ServiceContainer lightBg={lightBg} id={id}>
                <TopLine>Services &amp; Pricing</TopLine>
                <ServicesH1 lightText={lightText} >Our Pricing and <Red>Services</Red></ServicesH1>
                <ServicesWrapper>
                    {/* lawn care */}
                    <ServicesCard lightBg={lightBg}>
                        <ServicesH2 darkText={darkText}>{Header1}</ServicesH2>
                        <ServicesIcon src={Icon1} />
                        <ServicePrice>{Price1}</ServicePrice>
                        <ServiceUl>
                            <ServiceLi darkText={darkText}>{LCD1}</ServiceLi>
                            <ServiceLi darkText={darkText}>{LCD2}</ServiceLi>
                            <ServiceLi darkText={darkText}>{LCD3}</ServiceLi>
                        </ServiceUl>
                        <Button to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            primary={primary ? 1 : 0}
                            secondary={secondary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>More Info</Button>
                    </ServicesCard>
                    {/* pressure washing */}
                    <ServicesCard lightBg={lightBg}>
                        <ServicesH2 darkText={darkText}>{Header2}</ServicesH2>
                        <ServicesIcon src={Icon3} />
                        <ServicePrice>{Price2}</ServicePrice>
                        <ServiceUl>
                            <ServiceLi darkText={darkText}>{PCD1}</ServiceLi>
                            <ServiceLi darkText={darkText}>{PCD2}</ServiceLi>
                            <ServiceLi darkText={darkText}>{PCD3}</ServiceLi>
                        </ServiceUl>

                        <Button to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            primary={primary ? 1 : 0}
                            secondary={secondary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>More Info</Button>
                    </ServicesCard>
                    {/* property cleanup */}
                    <ServicesCard lightBg={lightBg}>
                        <ServicesH2 darkText={darkText}>{Header3}</ServicesH2>
                        <ServicesIcon src={Icon2} />
                        <ServicePrice>{Price3}</ServicePrice>
                        <ServiceUl>
                            <ServiceLi darkText={darkText}>{PWD1}</ServiceLi>
                            <ServiceLi darkText={darkText}>{PWD2}</ServiceLi>
                            <ServiceLi darkText={darkText}>{PWD3}</ServiceLi>
                        </ServiceUl>
                        <Button to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            primary={primary ? 1 : 0}
                            secondary={secondary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>More Info</Button>
                    </ServicesCard>
                </ServicesWrapper>
            </ServiceContainer >
        </>
    )
}

export default Services