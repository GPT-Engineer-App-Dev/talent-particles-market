import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#121212", // Dark Grey for backgrounds
    800: "#1E1E1E", // Slightly lighter grey for card backgrounds
    700: "#2C2C2C", // Grey for hover states
    600: "#3A3A3A", // Light grey for borders
    500: "#F0F1EE"  // Brighter Off White for text
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
