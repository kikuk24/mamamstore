
import axios from "axios"
import { useEffect, useState } from "react"
import { FaPen, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users")
    setUsers(response.data)
  }
  return (
    <div className="mx-auto w-full mt-9">
      <div className="relative overflow-x-auto">
        <table className = "w-full text-sm text-left">
          <thead className="border uppercase">
            <tr>
              <th scope="col" className="px-6 py-6">No</th>
              <th scope="col" className="px-6 py-6">Nama</th>
              <th scope="col" className="px-6 py-6">Email</th>
              <th scope="col" className="px-6 py-6">Role</th>
              <th scope="col" className="px-6 py-6">Acton</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" className="px-6 py-4">{index + 1}</th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <Link to={`/dashboard/users/edit/${user.uuid}`} className="mr-3 px-3 py-2 bg-blue-500 text-white">Edit</Link>
                  <button className="ml-3 px-3 py-2 bg-red-600"><FaTrash className="text-white"/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList