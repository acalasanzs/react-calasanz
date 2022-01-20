import styled from "styled-components";

export const MyAwwwElement = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#141019;
  background: radial-gradient(at 50% -20%, #908392, #0d060e) fixed;
    overflow: hidden;
&::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10vh;
        background: linear-gradient(180deg, var(--theme-2) 80%, transparent);
        filter: brightness(0.5);
    }
`