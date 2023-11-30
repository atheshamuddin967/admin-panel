import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "../src/context/VideoContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VideoProvider>
      <BrowserRouter>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </BrowserRouter>
    </VideoProvider>
  </React.StrictMode>
);
