import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    green: "#0c5742",
    white: "#ffffff",
    grey: "#757575",
    lightGrey: "#979797",
    red: "#EF6461"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  }
};

type ThemeProps = {
  children: any;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
