import { CSSProperties } from "react";
import styled from "styled-components";

export interface CircleProps {
  size: number;
  style?: CSSProperties;
}

const Circle = styled.div<CircleProps>`
  background-color: purple;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin: 0;
  display: inline-block;
`;

export default Circle;
