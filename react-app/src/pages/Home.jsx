import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Move to about page
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
