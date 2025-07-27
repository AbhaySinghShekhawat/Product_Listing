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
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={img} className="h-8 sm:h-10" alt="Logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
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
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 text-gray-900 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent border rounded-lg md:border-0">
            {/* Categories Link */}
            <li
              className={`block py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition text-center md:text-left ${
                location.pathname === "/listing"
                  ? "bg-blue-500 text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              <Link to="/listing">Categories</Link>
            </li>

            {/* Cart Link */}
            <li
              className={`relative flex justify-center md:justify-start rounded-md hover:bg-blue-500 hover:text-white transition ${
                location.pathname === "/cart"
                  ? "bg-blue-500 text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              <Link to="/cart" className="block py-2 px-4">
                <div className="relative flex items-center justify-center">
                  {/* Cart Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 6h14M9 21h0M15 21h0" />
                  </svg>

                  {/* Cart Badge */}
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
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
