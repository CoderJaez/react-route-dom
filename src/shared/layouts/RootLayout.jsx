import React from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import { Link, Outlet } from "react-router-dom";
const RootLayout = ({ children }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/About">About</Link>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
