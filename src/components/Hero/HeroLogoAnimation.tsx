import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.heading};
  margin-left: 2em;
  display: flex;
  
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  background-color: black;
  width: 10px;
  height: 10px;

  transition: all 1s linear;
`

const HeroLogoAnimation = () => {
  const dotRef = React.useRef<HTMLDivElement>(null)
  const [trans, setTrans] = useState([0, 0])

  const handleMouseEnterContainer: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(`[Container] pageX: ${e.pageX}`)
    console.log(`[Container] pageY: ${e.pageY}`)
    console.log(`[Container] dotRef.current?.offsetLeft:`, dotRef.current?.offsetLeft)
    console.log(`[Container] dotRef.current?.offsetTop:`, dotRef.current?.offsetTop)
  }

  const handleMouseLeaveContainer: React.MouseEventHandler<HTMLDivElement> = (e) => {
    return 0
  }

  return <Container onMouseEnter={handleMouseEnterContainer} onMouseLeave={handleMouseLeaveContainer}><Dot ref={dotRef} style={{translate: }}/></Container>;
};

export default HeroLogoAnimation;
