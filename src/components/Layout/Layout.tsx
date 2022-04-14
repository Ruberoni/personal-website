import React, { ReactNode } from "react";
import styled from "styled-components";
import { Theme, GlobalStyles } from "../../theme";
import Topbar from "../Topbar/Topbar";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-gap: 80px;
  padding: 55px 5% 0 5%;

  > * {
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Theme>
      <Topbar />
      <GlobalStyles />
      <PageContainer>{children}</PageContainer>
    </Theme>
  );
};

export default Layout;
