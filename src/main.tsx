import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "../src/context/VideoContext.tsx";
import ApiProvider from "./context/Api.tsx";
import { SocketProvider } from "./context/Socketprovider.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <SocketProvider>
        <VideoProvider>
          <BrowserRouter>
            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>
          </BrowserRouter>
        </VideoProvider>
      </SocketProvider>
    </ApiProvider>
  </React.StrictMode>
);
