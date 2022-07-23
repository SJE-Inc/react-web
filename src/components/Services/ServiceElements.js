import styled from "styled-components";

export const ServiceContainer = styled.div`
    padding: 100px 0;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    
`

export const ServicesWrapper = styled.div`
    min-width: 800px;
    max-width: 1001px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 26px;

    @media screen and (max-width: 1000px){
        min-width: 600px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        min-width: 80%;
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: ${({ lightBg }) => (lightBg ? '#01bf71' : '#fff')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    min-height: 200px;
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    margin-bottom: 64px;
    text-align: center;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#f7f8fa')};

`

export const ServicePrice = styled.p`
    color: #01bf71;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5px;

`

export const ServiceUl = styled.ul`
    list-style-type: none; 
    
`

export const ServiceLi = styled.li`
    color: ${({ darkText }) => (darkText ? '#010606' : '#f7f8fa')};
    font-size: 1rem;
    text-align: left;
    line-height: 1.1;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    &:before{
        content: "\\279c";
        color: #01bf71;
        font-size: 25px;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1.3rem;
    }
`

export const Red = styled.span`
    color: red;
`