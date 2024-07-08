import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import { json, useParams,Link } from "react-router-dom";
import { UserContext } from "../context/Context";

function User() {
  const {users}=useContext(UserContext)
  // console.log(users);
  
  return (
    <>
    {users.map((user,index)=>{
     return  (
      <ul key={index} className="w-full bg-red-200 mb-3 p-2 rounded text-blue-600">
              <li  className="mb-3 ml-2">
               
                <Link  className="mr-2" to={`/user/${user.id}`}>
                  {user.name}
                </Link>
               
              </li>
             
            </ul>
     )
    })}
      <h1>user</h1>
    </>
  );
}

export default User;
