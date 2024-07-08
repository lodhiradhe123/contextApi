import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const user = users[id-1];
 //   console.log(id);
 //   console.log(user);
  return (
    <div className=" w-full bg-zinc-200 p-10 mt-3">
      <h1 className="text-3xl font-semibold text-red-300">UserDetails</h1>
      <div className="userss w-1/2 bg-sky-300 p-4 text-xl">
        <ul
          key={users.id}
          className="w-full bg-red-200 mb-3 p-2 rounded text-blue-600"
        >
          <li className=" text-3xl text-blue-300 font-bold capitalize mb-3 ml-2">
            {user.name}
          </li>
          <li className="mb-3 ml-2">{user.id}</li>
          <li className="mb-3 ml-2">{user.email}</li>
          <button
            onClick={()=>navigate(-1)}
            className="btn text-sm font-semibold py-2 px-3 bg-sky-300 rounded"
          >
            GO Back
          </button>
        </ul>
      </div>
      <hr />
      {users.name}
    </div>
  );
}

export default UserDetails;
