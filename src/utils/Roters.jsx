import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";

function Roters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Roters;
