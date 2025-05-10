import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
