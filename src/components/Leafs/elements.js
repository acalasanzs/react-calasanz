import styled from "styled-components";
import { Link } from "react-router-dom";
import leafbg2 from '../../images/leafs/leafbg3.jpg'

export const Background = styled.div`
    object-fit: cover;
    position: relative;
    height: 500vh;
    width: 100%;
    background: url(${leafbg2});
`