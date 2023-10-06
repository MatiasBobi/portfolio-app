import React from "react";
import ReactDOM from "react-dom/client";
import index from "./index.css?inline";
import Home from "./routes/Home?inline";
import Login from "./routes/Login?inline";
import ErrorMsg from "./routes/ErrorMsg";
import App from "./App";

// react router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//

// redux imports
import { store } from "./app/store";
import { Provider } from "react-redux";
//

// Lang configuration
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
i18next.init({
  interpolation: { escapeValue: false},
  lng: "es",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})
//

// react router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home style={index} />,
    errorElement: <ErrorMsg />,
  },
  {
    path: "/login",
    element: <Login style={index} />,
    errorElement: <ErrorMsg />,
  },
]);

//

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </I18nextProvider>
    </React.StrictMode>
  </Provider>
);
