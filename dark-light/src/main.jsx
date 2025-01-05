import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./context/ContextProvider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>
);
