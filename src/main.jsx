/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Hero from "./pages/Hero";


let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hero",
    element: <Hero />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
