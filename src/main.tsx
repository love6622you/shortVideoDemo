import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Mulish, sans-serif",
  body: "Mulish, sans-serif"
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1536px"
};

const theme = extendTheme({ breakpoints, fonts });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
