import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import $ from "jquery";
import AuthenContextProvider from "./context/AuthenContext";
import ErrorContextProvider from "./context/ErrorContext";
import SearchContextProvider from "./context/SearchContext";

window.jQuery = window.$ = $;
require("bootstrap");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <SearchContextProvider>
          <AuthenContextProvider>
            <App />
          </AuthenContextProvider>
        </SearchContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
