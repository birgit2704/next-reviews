"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ children, href }) => {
  const pathName = usePathname();
  if (href === pathName) {
    return (
      <span href={href} className="text-orange-800 font-orbitron font-bold">
        {children}
      </span>
    );
  } else {
    return (
      <Link
        href={href}
        className="text-orange-800 font-orbitron font-bold hover:underline "
      >
        {children}
      </Link>
    );
  }
};

export default NavLink;
