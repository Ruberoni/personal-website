import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { useSpring, animated } from "@react-spring/web";

const Container = styled.div`
  width: 370px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;

  align-items: center;
  justify-content: center;
`;

const AnimatedText = styled(animated.p)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 6em;
  font-weight: 500;
  position: absolute;
  cursor: default;
`;

const getTextTransform = (x: number, y: number) => `translate(${x}px, ${y}px)`;

const HeroLogoAnimation = () => {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [textXY, setTextXY] = useState([0, 0]);
  const [mouseMoveTimeout, setMouseMoveTimeout] = useState<NodeJS.Timeout>();

  const theme = useTheme();

  const animProps3 = useSpring({
    xy: textXY,
    delay: 100,
  });
  const animProps2 = useSpring({
    xy: textXY,
    delay: 50,
  });
  const animProps = useSpring({
    xy: textXY,
  });

  const handleMouseMoveContainer: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    mouseMoveTimeout && clearTimeout(mouseMoveTimeout);
    const _mouseMoveTimeout = setTimeout(() => {
      setTextXY([0, 0]);
      setMousePos([0, 0]);
    }, 10);
    setMouseMoveTimeout(_mouseMoveTimeout);

    if (mousePos[0] && mousePos[1]) {
      const dMouseX = e.pageX - mousePos[0];
      const dMouseY = e.pageY - mousePos[1];
      setTextXY([
        animProps.xy.get()[0] + dMouseX * 4,
        animProps.xy.get()[1] + dMouseY * 4,
      ]);
    }

    setMousePos([e.pageX, e.pageY]);
  };

  return (
    <Container onMouseMove={handleMouseMoveContainer}>
      <AnimatedText
        style={{
          transform: animProps3.xy.to(getTextTransform),
          color: theme.colors["7"],
        }}
      >
        Paredes
      </AnimatedText>
      <AnimatedText
        style={{
          transform: animProps2.xy.to(getTextTransform),
          color: theme.colors["5"],
        }}
      >
        Paredes
      </AnimatedText>
      <AnimatedText style={{ transform: animProps.xy.to(getTextTransform) }}>
        Paredes
      </AnimatedText>
    </Container>
  );
};

export default HeroLogoAnimation;
