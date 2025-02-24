import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { ThemeProvider } from "styled-components";

import AppProvider from "./hooks/index.jsx";
import { Router } from "./routes/";

import GlobalStyles from "./styles/globalStyles.js";
import stripePromise from "./config/stripeConfig.js";
import { defaultTheme } from "./styles/themes/default.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <GlobalStyles />
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <ToastContainer
          position="top-center"
          theme="dark"
          autoClose={2000}
          transition={Slide}
        />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
