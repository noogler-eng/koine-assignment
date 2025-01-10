import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainProvider from "./providers/MainProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <MainProvider>
    <App />
  </MainProvider>
);
