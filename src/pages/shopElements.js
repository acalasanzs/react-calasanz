import styled from "styled-components";

export const ShopContainer = styled.div`
    display: flex;
    width: 100%;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10vh;
        background: linear-gradient(180deg, var(--theme-2) 65%, transparent);
        filter: brightness(0.5);
    }
`