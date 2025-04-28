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
import Cart from "./pages/Cart";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<MainLayout />}>
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/courses" element={<Courses />}>
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/certificate-verification" element={<Certificate />}/>]
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
