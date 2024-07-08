import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

function UserDetails() {
  const id = useParams();
  const { users, setUsers } = useContext(UserContext);
  const user= users[id.id-1];
  console.log(id);
    console.log(user);
  return (
    <div className=" w-full bg-zinc-200 p-10 mt-3">
      <h1 className="text-3xl font-semibold text-red-300">UserDetails</h1>
      <div className="userss w-1/2 bg-sky-300 p-4 text-xl">
         
            <ul
              key={users.id}
              className="w-full bg-red-200 mb-3 p-2 rounded text-blue-600"
            >
              <li className="mb-3 ml-2">{user.name}</li>
              <li className="mb-3 ml-2">{user.id}</li>
              <li className="mb-3 ml-2">{user.email}</li>
            </ul>
          
      </div>
      <hr />
      {users.name}
    </div>
  );
}

export default UserDetails;
