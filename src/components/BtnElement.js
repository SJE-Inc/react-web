import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    -webkit-box-shadow: 3px 3px 15px 2px #000000; 
    box-shadow: 1px 1px 15px 2px #aaaaaa95;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        background: ${({ primary, secondary }) => (primary ? '#fff' : (secondary ? '#01bf71' : '#fff'))};
        color: ${({ secondary }) => (secondary ? '#fff' : '#010606')}
    }
`