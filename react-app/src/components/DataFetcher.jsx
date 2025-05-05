import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
