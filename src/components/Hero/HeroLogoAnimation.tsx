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

const Dot = styled.div<{ dy: number; dx: number }>`
  background-color: black;
  width: 10px;
  height: 10px;

  transition: all 2s linear;
`;

const HeroLogoAnimation = () => {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [trans, setTrans] = useState([0, 0]);
  const [mouseMoveTimeout, setMouseMoveTimeout] = useState<NodeJS.Timeout>();

  const handleMouseMoveContainer: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    // console.log(`[Mouse] pageX: ${e.pageX}`)
    // console.log(`[Mouse] pageY: ${e.pageY}`)
    // console.log(`[Dot] dotRef.current?.offsetLeft:`, dotRef.current?.offsetLeft)
    // console.log(`[Dot] dotRef.current?.offsetTop:`, dotRef.current?.offsetTop)

    mouseMoveTimeout && clearTimeout(mouseMoveTimeout);
    const _mouseMoveTimeout = setTimeout(() => {
      setTrans([0, 0]);
      setMousePos([0, 0]);
    }, 20);
    setMouseMoveTimeout(_mouseMoveTimeout);

    if (mousePos[0] && mousePos[1]) {
      const dMouseX = e.pageX - mousePos[0];
      const dMouseY = e.pageY - mousePos[1];
      setTrans((prev) => [prev[0] + dMouseX * 4, prev[1] + dMouseY * 4]);
      // console.log(`dMouseX: ${dMouseX}, dMouseY: ${dMouseY}`)
    }

    setMousePos([e.pageX, e.pageY]);
  };

  return (
    <Container onMouseMove={handleMouseMoveContainer}>
      <Dot
        ref={dotRef}
        style={{ transform: `translate(${trans[0]}px, ${trans[1]}px)` }}
        dy={trans[1]}
        dx={trans[0]}
      />
    </Container>
  );
};

export default HeroLogoAnimation;
