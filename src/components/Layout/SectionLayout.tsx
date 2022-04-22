import React, { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const Header = styled.h3`
  margin-top: 3em;

  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: bold;
`;

const Section = styled.section`
  padding-bottom: 4em;
`;

export interface SectionLayoutProps {
  headerStyle?: CSSProperties;
  style?: CSSProperties;
  headerTextColor?: string;
  title?: string;
  children?: ReactNode;
}

const SectionLayout = ({
  headerStyle,
  headerTextColor,
  title = "Section title",
  style,
  children,
}: SectionLayoutProps) => {
  return (
    <Section id={title.replaceAll(" ", "-")} style={style}>
      <Header style={{ ...headerStyle, color: headerTextColor }}>
        {title.toUpperCase()}
      </Header>
      {children}
    </Section>
  );
};

export default SectionLayout;
