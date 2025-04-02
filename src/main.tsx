import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@providers/ThemeProviders.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
