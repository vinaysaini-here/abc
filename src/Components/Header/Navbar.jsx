import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const linkStyle = ({ isActive }) => {
    return `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-cyan-700" : "text-gray-700"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-700 lg:p-0`;
  };

  return (
    <>
      <header className="z-50 top-0 sticky shadow-md bg-white">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4  text-lg ">
          <div>
            <Link to="/">
              <img
                src="https://www.ignet.co.uk/wp-content/uploads/2022/02/IGNET-Logo.png"
                alt="IGNET Group Ltd"
                className="h-16 pt-3"
              />
            </Link>
          </div>

          <div className="">
            <ul className="hidden md:flex space-x-10">
              <li>
                <NavLink to="/" className={linkStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkStyle}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkStyle}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/portfolio" className={linkStyle}>
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/testimonials" className={linkStyle}>
                  Testimonials
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={linkStyle}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className=" bg-cyan-500 p-3 rounded-4xl text-white px-6">
              <NavLink to="/support" className={linkStyle}>
                Request Support
              </NavLink>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
