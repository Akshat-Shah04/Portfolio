"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-500"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          MyPortfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base md:text-lg">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-end px-10 py-4 text-base">
          <li>
            <Link
              href="/"
              className="block py-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block py-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="block py-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
