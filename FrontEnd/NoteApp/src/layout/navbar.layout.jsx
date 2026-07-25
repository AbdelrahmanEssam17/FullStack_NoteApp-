import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
export default function Navbarlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
