import React from "react";
import Loader from '../components/Loader'
import { Link } from "react-router-dom";

/* Navbar: pure presentational component */
const Navbar = React.memo(function Navbar() {
  return (
    <header className="px-6 md:px-10 py-6">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between"
        aria-label="Primary"
      >
        <div className="flex items-center">
          <div className="mr-6 px-2">
            <Loader />
          </div>
          <span className="sr-only">Your Company</span>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Product</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Marketplace</li>
          <li className="hover:text-white cursor-pointer">Company</li>
        </ul>

        <div className="hidden md:block">
          <Link to='/register' >Login / Register </Link>
        </div>

        {/* Mobile menu stub (visible on small screens) */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2 rounded-md text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
});


export default Navbar;