import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboarProvider from "./Provider/DashboarProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <DashboarProvider>
          {" "}
          <RouterProvider router={router}></RouterProvider>
        </DashboarProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
