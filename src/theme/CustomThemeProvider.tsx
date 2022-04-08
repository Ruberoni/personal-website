import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";

const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default Theme;
