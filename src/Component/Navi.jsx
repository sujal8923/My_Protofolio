import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Navi = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-4xl tracking-widest font-serif">
              𝓼𝓾𝓳𝓪𝓵
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex space-x-10 items-center">
            {["about", "experience", "project"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={300}
                className="text-white text-lg font-medium cursor-pointer hover:underline underline-offset-8 transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <a
              href="/MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 border border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden sm:flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/sujal-saxena-384701288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/sujal8923"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-6 pb-4 pt-2 bg-black/80 text-white flex flex-col gap-5">
          {["about", "experience", "project"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={300}
              className="text-xl font-medium cursor-pointer hover:underline underline-offset-8"
              onClick={toggleMobileMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <a
            href="/MyResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium border border-white rounded-full px-4 py-1 text-center transition-all"
          >
            Resume
          </a>

          {/* Social Icons in Mobile Menu */}
          <div className="flex justify-center gap-6 pt-3">
            <a
              href="https://www.linkedin.com/in/sujal-saxena-384701288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/sujal8923"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navi;
