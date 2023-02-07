import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { App } from "./components/App/App";
import { AppContextProvider } from "./context/AppContextProvider";
import { MainPage } from "./pages/MainPage";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignInForm } from "./components/SignInForm/SignInForm";
import { ProductsPage } from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "signin",
        element: <SignInForm />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
