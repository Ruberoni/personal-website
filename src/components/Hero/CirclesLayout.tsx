import React, { CSSProperties, HTMLProps } from "react";
import styled, { useTheme } from "styled-components";

const CirclesColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: -1;
  height: inherit;
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: purple;
`;

interface ICirclesColumn {
  circlesStyles?: CSSProperties;
  n?: number;
  style?: CSSProperties;
}

const CirclesColumn = ({ n = 4, circlesStyles, ...props }: ICirclesColumn) => {
  return (
    <CirclesColumnContainer {...props}>
      {Array(4)
        .fill(1)
        .map((_, i) => {
          const size = `${(i + 1) * 30}px`;
          return (
            <Circle style={{ width: size, height: size, ...circlesStyles }} />
          );
        })}
    </CirclesColumnContainer>
  );
};

const CirclesLayout = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  const theme = useTheme();

  return (
    <div {...props} style={{ ...props.style }}>
      <CirclesColumn
        style={{ left: "-62px", transform: "rotate(0.5turn)" }}
        circlesStyles={{ backgroundColor: theme.colors["8"] }}
      />
      <CirclesColumn
        style={{ right: "-62px" }}
        circlesStyles={{ backgroundColor: theme.colors["7"] }}
      />
      {children}
    </div>
  );
};

export default CirclesLayout;
