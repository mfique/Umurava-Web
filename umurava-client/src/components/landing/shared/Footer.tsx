import Link from "next/link";
import Career from "../../../../public/icons/career.svg";
import Image from "next/image";
import {
  Chrome,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Pin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social icons */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-4xl font-bold">
            <Image height={45} src={Career} alt="Umurava career ticket logo" />
          </Link>
          <div className="flex gap-4">
            <Link href="#" className="bg-white p-2 rounded-full">
              <Facebook className="h-5 w-5 text-[#001233]" />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full">
              <Chrome className="h-5 w-5 text-[#001233]" />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full">
              <Youtube className="h-5 w-5 text-[#001233]" />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full">
              <Linkedin className="h-5 w-5 text-[#001233]" />
            </Link>
          </div>
        </div>

        <hr className="py-3" />

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Address</h2>
            <div className="space-y-2 text-[14px]">
              <div className="flex gap-1 items-center text-gray-300">
                <Mail size={20} />
                <p>career@tickets.com</p>
              </div>
              <div className="flex gap-1 items-center text-gray-300">
                <Pin size={20} />
                <p>89 KG 14 Ave, Kigali</p>
              </div>
              <div className="flex gap-1 items-center text-gray-300">
                <Phone size={20} />
                <p>+250 700 000</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <nav className="space-y-2 text-gray-300 text-[14px]">
              <Link href="/" className="block hover:text-blue-400">
                Home
              </Link>
              <Link href="/program" className="block hover:text-blue-400">
                Program
              </Link>
              <Link href="/about" className="block hover:text-blue-400">
                About
              </Link>
              <Link href="/contact" className="block hover:text-blue-400">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Join our newsletter to keep up to date with us!
            </h2>
            <div className="relative bg-white px-2 py-1 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black py-2 px-4 pr-20 rounded-lg focus:outline-none"
              />
              <button className="absolute right-[1x] top-0 bottom-0 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright © All Rights Reserved SawaPay 2024.
          </p>
          <div className="text-sm text-gray-400 space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
