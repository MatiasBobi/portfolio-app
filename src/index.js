import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import index from "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ErrorMsg from "./routes/ErrorMsg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home style={index}/>,
    errorElement: <ErrorMsg />
  },
  {
    path: "/login",
    element: <Login style={index}/>,
    errorElement: <ErrorMsg />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
