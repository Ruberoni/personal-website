import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

const Header = styled.h3`
  margin-top: 3em;

  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: bold;
`

export interface SectionLayoutProps {
  headerStyle?: CSSProperties;
  headerTextColor?: string;
  title?: string;
  children?: ReactNode;
}

const SectionLayout = ({ headerStyle, headerTextColor, title = "Section title", children }: SectionLayoutProps) => {
  return (
    <section id={title}><Header style={{...headerStyle, color: headerTextColor}}>{title.toUpperCase()}</Header>{children}</section>
  )
}

export default SectionLayout