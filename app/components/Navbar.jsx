import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink href="/">Indie Gamer</NavLink>
        </li>

        <li className="ml-auto">
          <NavLink href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" className="text-orange-800 hover:underline">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
