import React, { ReactNode } from "react";
import { Theme, GlobalStyles } from "../../theme";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
};

export default Layout;
