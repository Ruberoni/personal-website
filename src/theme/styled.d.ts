import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      body: string;
      heading: string;
      7: string;
      5: string;
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
