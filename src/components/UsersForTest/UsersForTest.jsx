import { useState, useEffect } from "react";
import AUser from "./AUser";
export const UsersForTest = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setUsers(json);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  console.log(users);
  return (
    <div>
      {isLoading && <h1 id="users-loading">Идет загрузка...</h1>}
      {users.length > 0 && (
        <div id="users-list">
          {users.map((item) => (
              <AUser onDelete={onDelete} user={item} />
          ))}
        </div>
      )}
    </div>
  );
};
