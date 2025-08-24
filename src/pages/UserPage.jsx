import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const answer = response.data;
      setUsers(answer);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div data-testid="user-page">
      {users.map((item) => (
        <Link to={`/users/${item.id}`} key={item.id} data-testid="users-id">
          {item.title}
        </Link>
      ))}
    </div>
  );
};
