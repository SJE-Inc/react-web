import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


export const Form = styled.form`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    z-index: 1;
    min-height: 760px;   
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
`
export const FormContainer = styled.div`
    background-color: ${({ primaryBg }) => (primaryBg ? '#fff' : '#e9f7f7')};
    max-width: 1100px;
    max-height: 600px; 
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #aaaaaa;

    @media screen and (max-width: 840px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        max-height: 100%;
    }
`

export const Column1 = styled.div`
    grid-area: col1;
    height: 100%;
`

export const Column2 = styled.div`
    grid-area: col2;
    height: 100%;
`

export const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 550px;
    height: 600px;
    background-color: ${({ primaryBg }) => (primaryBg ? '#010606' : '#010606')};

    @media screen and (max-width: 840px){
        height: 100%;
        max-width: 700px;
        
    }

`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const FormWrapper = styled.div`
    min-height: 500px;
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: #f7f8ff;

`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    
`

export const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;

`

export const Center = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Purp = styled.div`
    background-color: purple;
    display: flex;
`
export const RArrow = styled(AiOutlineArrowRight)`
    font-size: 20px;
    margin-left: 10px;
`

export const LArrow = styled(AiOutlineArrowLeft)`
    font-size: 20px;
    margin-right: 10px;
`
export const Header = styled.h1`
    font-size: 48px;
    text-align: center;
    color: #01bf71;
    margin-bottom: 20px;

    @media screen and (max-width: 480px){
        font-size: 40px;
    }
`

export const Label = styled.label`
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: ${({ text }) => (text ? '#000' : '#fff')};

`
export const FirstName = styled.input.attrs({
    type: 'text',
    name: 'fname',
    placeholder: 'First Name'

})`
    width: 100%;
    height: 45px;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000;
    -moz-box-shadow: 5px 5px 15px 2px #000000; 
    box-shadow: 5px 5px 15px 2px #aaaaaa95;

`
export const LastName = styled.input.attrs({
    type: 'text',
    name: 'lname',
    placeholder: 'Last Name'

})`
    width:100%;
    height: 45px;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000; 
    -moz-box-shadow: 5px 5px 15px 2px #000000; 
    box-shadow: 5px 5px 15px 2px #aaaaaa95;
`
export const Email = styled.input.attrs({
    type: 'email',
    name: 'email',
    placeholder: 'Email'

})`
    height: 45px;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000;
    -moz-box-shadow: 5px 5px 15px 2px #000000;  
    box-shadow: 5px 5px 15px 2px #aaaaaa95;

`

export const Number = styled.input.attrs({
    type: 'tel',
    name: 'phone',
    placeholder: 'Number'

})`
    height: 45px;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000; 
    -moz-box-shadow: 5px 5px 15px 2px #000000; 
    box-shadow: 5px 5px 15px 2px #aaaaaa95;

`
export const Address = styled.input.attrs({
    type: 'text',
    name: 'address',
    placeholder: 'Your Address'

})`
    width: 100%;
    height: 45px;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000; 
    -moz-box-shadow: 5px 5px 15px 2px #000000; 
    box-shadow: 5px 5px 15px 2px #aaaaaa95;

`
export const City = styled.input.attrs({
    type: 'text',
    name: 'city',
    placeholder: 'Your City Name'

})`
    height: 45px;
    width: 100%;
    font-size: 16px;
    padding: 5px 17px;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 2px #000000; 
    -moz-box-shadow: 5px 5px 15px 2px #000000; 
    box-shadow: 5px 5px 15px 2px #aaaaaa95;

`

export const RLabel = styled.label`
    width: 100%;
    font-size: 14px;
    letter-spacing: 1.2px;
    color: ${({ text }) => (text ? '#000' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: ${({ smallText }) => (smallText ? '10px' : '14px')}
    }
`

export const RBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 7px;
    border: 5px solid white;
    -webkit-box-shadow: 1px 1px 7px 2px #00000040; 
    box-shadow: 1px 1px 7px 2px #aaaaaa40;
    border-radius: 10px;
    margin:0 8px 5px 8px;

    @media screen and (max-width: 480px){
        padding: 5px 3px;
    }

`

export const RadioBtn = styled.input`
    cursor: pointer;
    margin: 0 5px;

    &:checked + ${RLabel}{
        color:#01bf71;
    }

`

export const List = styled.ul`
    list-style: none;
    

`
export const ListItem = styled.li`
    font-size: 18px;
    margin: 25px 0;
    color: ${({ text }) => (text ? '#000' : '#fff')};
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 15px;
    }

`

export const Green = styled.p`
    font-size: 22px;
    color: #01bf71;

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const Green2 = styled.span`
    color: #01bf71;
`

export const Head = styled.h2`
    font-size: 32px;
    text-align: center;
    color: #000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`

export const Text = styled.p`
    font-size: 18px;
    color: #000;

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`

export const Default = styled.input`
    font-size: 20px;
`

export const Invisible = styled.form`
    display: none; 
    visibility: hidden;
`