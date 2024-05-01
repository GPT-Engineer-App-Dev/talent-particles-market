import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0D1B2A", // Dark Blue
    800: "#1B263B", // Medium Dark Blue
    700: "#415A77", // Light Blue
    600: "#778DA9", // Lighter Blue
    500: "#E0E1DD"  // Off White
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
