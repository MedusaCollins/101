import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  async function getUser() {
    const response = await axios.get('https://randomuser.me/api?results=5');
    setUsers(response.data.results)
    console.log(response)
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="userBox" >
          <img src={user.picture.medium} alt="user" className="userImage" />
          <div className="userInfo">
            <h3>{user.name.first} {user.name.last}</h3>
            <h4>Email: {user.email}</h4>
            <h4>{user.location.country} | {user.location.city}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users;
