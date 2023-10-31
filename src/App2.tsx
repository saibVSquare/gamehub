import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Login from "./components/Authentication/Login.tsx";
// @ts-ignore
import Signup from "./components/Authentication/Signup.tsx";
// @ts-ignore
import Header from "./components/Authentication/Layout/Header.tsx";
// @ts-ignore
import App from "./App.tsx";
// @ts-ignore
import theme from "./theme.ts";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const App2 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/games"
          element={
            <ChakraProvider theme={theme}>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <App />
            </ChakraProvider>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App2;
