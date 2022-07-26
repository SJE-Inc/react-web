import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import Poster from '../../images/poster.png'
import { HeroBg, HeroPRed, HeroContainer, Scroll, VideoBg, HeroContent, HeroH1, Green, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ScrollWrapper } from './HeroElements'
import { Button } from '../BtnElement'
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" >
            <HeroBg>
                {/* <Overlay></Overlay> */}
                <VideoBg poster={Poster} autoPlay loop muted defaultMuted playsInline src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroPRed>TEXT! 857-330-4089</HeroPRed>
                <HeroH1>Convenient <Green>Lawn Services</Green> for Everyone</HeroH1>
                <HeroP>Overgrown grass or a dirty pathway is no problem for us!</HeroP>
                <HeroBtnWrapper>
                    <Button to='services'
                        smooth={true}
                        duration={500}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >Get Started
                        {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
            <ScrollWrapper><Scroll /></ScrollWrapper>

        </HeroContainer>
    )
}

export default HeroSection