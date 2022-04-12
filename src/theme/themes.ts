import { DefaultTheme } from "styled-components";

export const commonThemeStyles: DefaultTheme = {
  colors: {
    primary: "",
    secondary: "",
    body: "",
    heading: "",
    7: "",
    5: "",
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
    7: "grey",
    5: "brown",
  },
};

export const darkTheme: DefaultTheme = {
  ...commonThemeStyles,
  colors: {
    primary: "",
    secondary: "#112031",
    body: "white",
    heading: "#D4ECDD",
    7: "#455D77",
    5: "#36495E",
  },
};
