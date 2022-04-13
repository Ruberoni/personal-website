import "styled-components";

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      body: string;
      heading: string;
      8: string;
      7: string;
      5: string;
      3: string;
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
