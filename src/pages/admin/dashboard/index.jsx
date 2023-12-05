import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Link to="addUsers">Add Users</Link>

      <Link to="addProducts">Add Products</Link>

      <Link to="users">Users</Link>

      <Link to="products">Products</Link>
    </>
  );
}

export default Dashboard;
