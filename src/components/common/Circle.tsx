import React, { CSSProperties } from "react";

export interface CircleProps {
  size: number;
  style?: CSSProperties;
}

const Circle = ({ size = 30, style }: CircleProps) => {
  const _size = `${size}px`;
  return (
    <div
      style={{
        backgroundColor: "purple",
        borderRadius: "50%",
        width: _size,
        height: _size,
        ...style,
      }}
    />
  );
};

export default Circle;
