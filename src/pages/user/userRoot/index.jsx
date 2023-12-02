import React from "react";
import Navbar from "../../../layout/userNavbar";
import { Outlet } from "react-router-dom";

function UserRoot() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default UserRoot;