import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'linear-gradient(90deg, rgba(84,160,255,1) 0%, rgba(153,128,250,1) 100%)' : 'linear-gradient(90deg, rgba(238,250,39,1) 0%, rgba(108,156,15,1) 100%)')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;

    &:hover {
        transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        background: #fff;
        color: #111;
    }
`;