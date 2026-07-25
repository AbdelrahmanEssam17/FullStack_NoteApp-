import React from "react";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Navbarlayout from "./layout/navbar.layout";
import Otp from "./pages/otp/otp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
