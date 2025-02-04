import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import UserDetails from "../components/UserDetails";

function Roters({products}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User products={products}/>} />
       
      <Route path="/user/:id" element={< UserDetails />} />
       
      
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Roters;
