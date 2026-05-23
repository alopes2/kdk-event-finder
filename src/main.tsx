import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
if (umamiWebsiteId) {
  const scriptSrc = "https://cloud.umami.is/script.js";
  const existingScript = document.querySelector(
    `script[src="${scriptSrc}"][data-website-id="${umamiWebsiteId}"]`,
  );
  if (!existingScript) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = scriptSrc;
    script.dataset.websiteId = umamiWebsiteId;
    document.head.appendChild(script);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
