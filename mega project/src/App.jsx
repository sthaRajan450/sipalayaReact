import React, { useEffect, useState } from "react";
import conf from "./conf/conf";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Failed to get current user", error);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <div className="min-h-screen flex flex-wrap bg-gray-400 content-center ">
        <div className="w-full block">
          <Header />
          <main>
            Todo:  <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : null;
};

export default App;
