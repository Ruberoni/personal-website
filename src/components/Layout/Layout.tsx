import React, { ReactNode } from "react";
import styled from "styled-components";
import { Theme, GlobalStyles } from "../../theme";
import Footer from "../Footer";
import Topbar from "../Topbar/Topbar";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1;

  > * {
    padding: 0 23%;

    @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
      padding: 0 1%;
    }
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Theme>
      <Topbar />
      <GlobalStyles />
      <PageContainer id="Home">
        {children}
        <Footer />
      </PageContainer>
    </Theme>
  );
};

export default Layout;
