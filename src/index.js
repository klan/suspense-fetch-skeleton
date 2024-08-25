import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SkeletonTheme } from "react-loading-skeleton";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SkeletonTheme baseColor="#d9d9d9">
      <App />
    </SkeletonTheme>
  </StrictMode>
);
