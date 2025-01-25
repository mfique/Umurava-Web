"use client";

import Image from "next/image";
import logo2 from "../../../../public/logo_2.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", linkTo: "/" },
  { name: "Challenge & Hackathons", linkTo: "/challenges" },
  { name: "For Learning Institutions", linkTo: "/instituons" },
  { name: "About Us", linkTo: "/about" },
  { name: "Contact Us", linkTo: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="flex fixed w-screen left-0 top-0 bg-white/50 backdrop-blur-lg justify-between items-center pr-6">
        <div>
          <Image src={logo2} alt="Umurava logo" height={90} />
        </div>

        {/* menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-blue-dark">
            <Menu size={24} />
          </button>
        </div>

        {/* desktop navlinks */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.linkTo}
              className="hover:text-blue-light duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* desktop join btn */}
        <div className="hidden lg:block">
          <Link
            href={""}
            className="bg-blue-dark px-2 py-3 rounded-md text-white"
          >
            Join the Program
          </Link>
        </div>

        {/* mobile menu */}
        <div
          className={`fixed h-screen inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          {/* close btn */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-blue-dark"
          >
            <X size={24} />
          </button>

          {/* mobile links */}
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.linkTo}
              onClick={closeMenu}
              className="hover:text-blue-light duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* mobile join btn */}
          <Link
            href={""}
            onClick={closeMenu}
            className="bg-blue-dark px-2 py-3 rounded-md text-white"
          >
            Join the Program
          </Link>
        </div>
      </div>
    </div>
  );
}
