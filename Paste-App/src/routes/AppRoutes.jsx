import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Pastes from "../pages/Pastes";
import Paste from "../pages/Paste";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="pastes" element={<Pastes />} />
      <Route path="pastes/:id" element={<Paste />} />
    </Route>
  )
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
