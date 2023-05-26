import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import StateProvider from "./compenents/StateProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
