import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/pricing', text: 'Pricing' },
]

export const Navbar = async () => {
  return (
    <nav className="flex rounded bg-blue-800 bg-opacity-30 gap-2 ml-2 mr-2">
      <Link href="/">Home</Link>

      <div className="flex-1"></div>

      {
        navItems.map((items) => {
            return (
                <ActiveLink key={items.path}  path={items.path} text={items.text} />
            )
        })
      }
    </nav>
  );
};
