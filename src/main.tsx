import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "../src/context/VideoContext.tsx";
import ApiProvider from "./context/Api.tsx";
import React from "react";
import RtmApiProvider from "./context/RTmpProvider.tsx";
import { UserProvider } from "./context/Socketprovider.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <RtmApiProvider>
        <VideoProvider>
          <BrowserRouter>
            <UserProvider>
              <ProSidebarProvider>
                <App />
              </ProSidebarProvider>
            </UserProvider>
          </BrowserRouter>
        </VideoProvider>
      </RtmApiProvider>
    </ApiProvider>
  </React.StrictMode>
);
