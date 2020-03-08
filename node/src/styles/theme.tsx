import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    green: "#0c5742",
    mainBackground: "#f4f0db",
    white: "#ffffff",
    grey: "#757575",
    lightGrey: "#979797",
    red: "#ef6461"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  },
  shadow: {
    normal: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
    deep: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  }
};

type ThemeProps = {
  children: any;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
