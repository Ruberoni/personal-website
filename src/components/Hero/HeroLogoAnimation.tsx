import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

const Container = styled.div`
  width: 370px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.heading};
  margin-left: 2em;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Dot = styled(animated.div)`
  background-color: black;
  width: 10px;
  height: 10px;
`;

const getDotTransform = (x: number, y: number) => `translate(${x}px, ${y}px)`;

const HeroLogoAnimation = () => {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [mouseMoveTimeout, setMouseMoveTimeout] = useState<NodeJS.Timeout>();

  const [animProps, setAnimProps] = useSpring(() => ({
    xy: [0, 0],
  }));

  const handleMouseMoveContainer: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    console.log(`[Mouse] pageX: ${e.pageX}`);
    console.log(`[Mouse] pageY: ${e.pageY}`);
    console.log(
      `[Dot] dotRef.current?.clientLeft:`,
      dotRef.current?.clientLeft
    );
    console.log(`[Dot] dotRef.current?.clientTop:`, dotRef.current?.clientTop);

    mouseMoveTimeout && clearTimeout(mouseMoveTimeout);
    const _mouseMoveTimeout = setTimeout(() => {
      setAnimProps({
        xy: [0, 0],
      });
      setMousePos([0, 0]);
    }, 20);
    setMouseMoveTimeout(_mouseMoveTimeout);

    if (mousePos[0] && mousePos[1]) {
      const dMouseX = e.pageX - mousePos[0];
      const dMouseY = e.pageY - mousePos[1];
      console.log(`[Mouse] dMouseX: ${dMouseX}`);
      console.log(`[Mouse] dMouseY: ${dMouseY}`);
      setAnimProps({
        xy: [
          animProps.xy.get()[0] + dMouseX * 4,
          animProps.xy.get()[1] + dMouseY * 4,
        ],
      });
    }

    setMousePos([e.pageX, e.pageY]);
  };

  return (
    <Container onMouseMove={handleMouseMoveContainer}>
      <Dot
        ref={dotRef}
        style={{ transform: animProps.xy.to(getDotTransform) }}
      />
    </Container>
  );
};

export default HeroLogoAnimation;
