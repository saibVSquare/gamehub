// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
// import App from './App.tsx';
import App2 from './App2.tsx';
// import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import reportWebVitals from './reportWebVitals';
// @ts-ignore
import theme from './theme.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/* <ChakraProvider theme={theme}>
           <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
           <App/>
        </ChakraProvider> */}
        <App2/>
    </React.StrictMode>
);

reportWebVitals();
