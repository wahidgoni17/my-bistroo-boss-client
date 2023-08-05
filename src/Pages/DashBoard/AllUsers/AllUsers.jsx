import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleDelete = (user) => {};
  const handleMakeAdmin = (user) =>{
    fetch(`https://bistro-boss-server-gules-seven.vercel.app/users/admin/${user._id}`,{
        method: "PATCH"
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire("Updated!", `${user.name} is an Admin Now`, "success");
        }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <SectionTitle subheading={'How Many??'} heading={"Manage All Users"}></SectionTitle>
      <h1 className="text-4xl px-5 font-bold">Total Users = {users.length}</h1>
      <div className="overflow-x-auto w-full text-white px-5 py-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=>handleMakeAdmin(user)} className="btn btn-md text-white bg-amber-600">
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-md text-white bg-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
