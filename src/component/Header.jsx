import { useContext, useState } from "react";
import React from "react";
import img from "../assets/images/ByteBazarLogo.png";
import { Link, useLocation } from "react-router-dom";
import { MainContext } from "./Context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useContext(MainContext);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={img} className="h-8 sm:h-10" alt="Logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-100 rounded-lg md:hidden hover:bg-gray-900"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-4 md:mt-0`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-gray-200  bg-gray-900 md:bg-transparent border md:border-0 rounded-lg p-4 md:p-0">
            {/* Categories Link */}
            <Link to="/listing">
              <li
                className={`block py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition ${
                  location.pathname === "/listing"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
              >
                Categories
              </li>
            </Link>

            {/* Cart Link */}
            <li
              className={`relative rounded-md hover:bg-blue-500  text-gray-200  bg-gray-900  transition ${
                location.pathname === "/cart" ? "bg-blue-500 text-white" : ""
              }`}
            >
              <Link to="/cart" className="block py-2 px-4 rounded-md">
                <div className="relative flex items-center">
                  {/* Cart Icon */}
                  <svg
                    className="w-6 h-6  "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 6h14M9 21h0M15 21h0" />
                  </svg>

                  {/* Badge Count */}
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                      {cart.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
