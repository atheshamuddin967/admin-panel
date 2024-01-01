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
    <BrowserRouter>
      <ApiProvider>
        <RtmApiProvider>
          <VideoProvider>
            <UserProvider>
              <ProSidebarProvider>
                <App />
              </ProSidebarProvider>
            </UserProvider>
          </VideoProvider>
        </RtmApiProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
