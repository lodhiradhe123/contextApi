import React, { useState } from "react";
import Routers  from "./utils/Roters";
import Nav from "./utils/Nav";

function App() {
 const [products,setProducts]= useState([{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
},
{
  "id": 2,
  "title": "Mens Casual Premium Slim Fit T-Shirts ",
  "price": 22.3,
}])
  return (
    <>
      <Nav />
      <Routers />
    </>
  );
}

export default App;
