import { DefaultTheme } from "styled-components";

export const commonThemeStyles: DefaultTheme = {
  colors: {
    primary: "",
    secondary: "",
    body: "",
    heading: "",
  },
  fontSizes: {
    sm: "",
    md: "",
    lg: "",
    body: "1em",
    heading: "2.6em",
  },
};

export const lightTheme: DefaultTheme = {
  ...commonThemeStyles,
  colors: {
    primary: "",
    secondary: "white",
    body: "black",
    heading: "#219F94",
  },
};

export const darkTheme: DefaultTheme = {
  ...commonThemeStyles,
  colors: {
    primary: "",
    secondary: "#112031",
    body: "white",
    heading: "#D4ECDD",
  },
};
