import React, { CSSProperties, ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import Circle from "../common/Circle";
import Triangle from "../icons/Triangle";
import { Heading as HeadingText } from "../common/text";

export interface LineProps {
  width?: number;
  style?: CSSProperties;
}

const Line = styled.div<LineProps>`
  width: ${({ width }) => (width ? `${width}px` : "inherit")};
  height: 1px;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: -1;
`;

interface ArrowProps {
  width?: number;
  style?: CSSProperties;
}

const ArrowContainer = styled.div<ArrowProps>`
  display: flex;
  align-items: center;
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  width: 100%;
`;

const Arrow = (props: ArrowProps) => {
  const theme = useTheme();

  return (
    <ArrowContainer {...props}>
      <Triangle width="9" height="11" fill={theme.colors["8"]} />
      <Line />
      <Circle size={6} style={{ backgroundColor: theme.colors["8"] }} />
    </ArrowContainer>
  );
};

export interface HeadingProps {
  children?: ReactNode;
  arrowWidth?: number;
}

const Heading = ({ children, arrowWidth }: HeadingProps) => {
  return (
    <div>
      <HeadingText>{children}</HeadingText>
      <Arrow width={arrowWidth || 540} />
    </div>
  );
};

export default Heading;
