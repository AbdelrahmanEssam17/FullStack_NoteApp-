import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Navbarlayout from "./layout/navbar.layout";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Otp from "./pages/otp/otp";
import Home from "./pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbarlayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
