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
    <div className="flex justify-between items-center pr-6">
      <div>
        <Image src={logo2} alt="Umurava logo" height={90} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-blue-dark">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6">
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

      {/* Desktop Join the Program Button */}
      <div className="hidden md:block">
        <Link
          href={""}
          className="bg-blue-dark px-2 py-3 rounded-md text-white"
        >
          Join the Program
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-blue-dark"
        >
          <X size={24} />
        </button>

        {/* Mobile Navigation Links */}
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.linkTo}
            onClick={closeMenu}
            className="hover:text-blue-light duration-300 text-xl"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Join the Program Button */}
        <Link
          href={""}
          onClick={closeMenu}
          className="bg-blue-dark px-2 py-3 rounded-md text-white text-xl"
        >
          Join the Program
        </Link>
      </div>
    </div>
  );
}
