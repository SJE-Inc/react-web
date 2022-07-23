import styled, { keyframes } from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward, MdKeyboardArrowDown } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: auto !important;
    min-height: 100vh;
    width: 100%;
    position: sticky; 
    z-index: 1;

    &:after{
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0,0,0, 0.2), rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 0;

    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

// export const Overlay = styled.div`
//     position: absolute;
//     top: 0; 
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100%;
//     width: 100%;
//     background: linear-gradient(180deg, rgba(0,0,0, 0.2), rgba(0,0,0,0.6) 100%),
//     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
// `

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex; 
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 68px;
    text-align: center;
    letter-spacing: 1.4px;
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 64px;
    }

    @media screen and (max-height: 480px){
        font-size: 48px;
    }

    @media screen and (max-width: 480px){
        font-size: 58px;
        text-align: left;
        line-height: 1.1;
    }

    @media screen and (max-width: 376px){
        font-size: 50px;
    }
`
export const HeroP = styled.p`
    margin-top: 14px;
    color: #fff;
    font-size: 28px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-height: 480px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        /* font-size: 24px; */
        text-align: left;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top:  25px;
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 480px){
        justify-content: flex-start;
    }

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Green = styled.span`
    text-decoration: underline solid #01bf71 15%;

    @media screen and (max-width: 480px){
        text-decoration-thickness: 25%;
    }
    
`
const moveAnimation = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-25px);
    }
    100%{
        transform: translateY(0px);
    }
`

export const ScrollWrapper = styled.div`
    position: absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    bottom: 5vh;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255, 0);
    animation: ${moveAnimation} 2s infinite ease-in-out;

    @media screen and (max-height: 480px){
        bottom: 1vh;
    }
`

export const Scroll = styled(MdKeyboardArrowDown)`
    color: #010606;
    font-size: 65px;

    @media screen and (max-width: 480px){
        font-size: 45px;
    }

    @media screen and (max-height: 480px){
        font-size: 45px;
    }

`
