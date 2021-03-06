// modules
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./~reusables/contexts/ThemeContext";
import { BrowserRouter as RouterProvider } from "react-router-dom";

// components/logic
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";

// styles
import "./index.css";

ReactDOM.render(
  <ThemeProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();
