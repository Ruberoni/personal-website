import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      body: string;
      heading: string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      body: string;
      heading: string;
    };
  }
}
