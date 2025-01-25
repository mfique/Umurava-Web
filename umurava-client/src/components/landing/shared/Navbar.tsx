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
    <div className="w-screen bg-white/50 backdrop-blur-lg sticky top-0 z-50 md:py-4 flex items-center justify-between px-8 md:px-20 lg:px-44">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo2}
          alt="Umurava logo"
          height={90}
          className="w-40 md:w-52 cursor-pointer"
          onClick={closeMenu}
        />
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-blue-dark focus:outline-none"
      >
        <Menu size={24} />
      </button>

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
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-8 text-blue-dark text-4xl"
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
