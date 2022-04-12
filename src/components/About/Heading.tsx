import React, { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import Circle from "../common/Circle";
import Triangle from "../icons/Triangle";

const HeadingText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0;
`;
export interface LineProps {
  width?: number;
  style?: CSSProperties;
}

const Line = styled.div<LineProps>`
  width: ${({ width }) => `${width || 400}px`};
  height: 1px;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.body};
  position: relative;
  z-index: -1;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

const Arrow = () => {
  return (
    <ArrowContainer>
      <Triangle width="9" height="11" />
      <Line />
      <Circle size={6} />
    </ArrowContainer>
  );
};

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeadingText>{children}</HeadingText>
      <Arrow />
    </div>
  );
};

export default Heading;
