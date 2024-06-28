import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  // console.log(loadedUsers);

  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${id}`, id).then(() => {
          // console.log(data.data);
        });
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });

        const remaining = users.filter((user) => user._id !== id);
        setUsers(remaining);
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-3xl font-bold">
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Register Data</th>
            <th>Last Login</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          {users.map((user) => (
            <tr key={user._id} className="hover text-2xl ">
              <th>2</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastLoggedIn}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-primary"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
