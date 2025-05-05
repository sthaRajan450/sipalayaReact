import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-[url(assests/bg.jpg)] w-full h-screen bg-cover bg-top-right">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
