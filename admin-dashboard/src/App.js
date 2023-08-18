import React, { useState } from "react";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import "./styles/reset.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [change, setChange] = useState(true);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChange(!change);
  };

  const Layout = () => {
    return (
      <div className={theme}>
        <Navbar />

        <div className="changeTheme">
          <button className="themeButton" onClick={handleClick}>
            {change ? (
              <BsFillSunFill className="sun" />
            ) : (
              <BsFillMoonStarsFill className="moon" />
            )}
          </button>
        </div>

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
