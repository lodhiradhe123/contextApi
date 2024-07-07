import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

function Context(props) {
  const [users,setUsers]=useState([
    {
      id: 1,
      name: "radhe",
      email: "radhe@gmail.com",
    },
    {
      id: 1,
      name: "radhe",
      email: "radhe@gmail.com",
    },
    {
      id: 1,
      name: "radhe",
      email: "radhe@gmail.com",
    },
  ]);
  console.log(props);
  return (
    <UserContext.Provider value={[users,setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
