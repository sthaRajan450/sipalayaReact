import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Certificate from "./pages/Certificate";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<MainLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-us" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/certificate-verification" element={<Certificate />}></Route>
    </Route>
  )
);
const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
