import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <h1 className="text-2xl font-semibold text-white italic">
              FakeStore
            </h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/products">
            <p>Products</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
