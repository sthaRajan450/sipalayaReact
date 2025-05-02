import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="blog" element={<Blog />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
