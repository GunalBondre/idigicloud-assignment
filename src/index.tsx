import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouteContext } from "./context/routeContext";
import { routes } from "./utils/routes";
import { RouteConfig } from "./interfaces/routeConfig";

const contextValue: { routes: RouteConfig[] } = {
  routes: routes as RouteConfig[],
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RouteContext.Provider value={contextValue}>
    <App />
  </RouteContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
