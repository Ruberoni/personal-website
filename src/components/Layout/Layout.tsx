import React, { ReactNode } from "react";
import styled from "styled-components";
import { Theme, GlobalStyles } from "../../theme";
import Topbar from "../Topbar/Topbar";

const PageContainer = styled.div`
  padding-top: 55px;
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
