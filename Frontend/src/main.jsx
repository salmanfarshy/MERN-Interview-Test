import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./Components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster />
  </>
);
