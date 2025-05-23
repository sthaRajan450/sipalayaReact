import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, LogoutBtn, Logo } from "../index";
import { useSelector } from "react-redux";


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, // Only show if user is authenticated
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, // Only show if user is authenticated
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-600">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (navItem) =>
                navItem.active && (
                  <li key={navItem.name}>
                    <button
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      onClick={() => navigate(navItem.slug)}
                    >
                      {navItem.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
