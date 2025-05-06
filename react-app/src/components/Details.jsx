import React from "react";
import useUser from "../context/userContext";


const Details = () => {
  const { user } = useUser();

  if (!user) return <p>No user logged in.</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        Email: <b>{user.email}</b>
      </p>
      <p>
        Password: <i>{user.password}</i>
      </p>
    </div>
  );
};

export default Details;
