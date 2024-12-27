import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Navi = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Menu open icon */}
              <svg
                className={`block size-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Menu close icon */}
              <svg
                className={`hidden size-6 ${
                  isMobileMenuOpen ? "block" : "hidden"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-4xl">𝓼𝓾𝓳𝓪𝓵</div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex justify-center align-items-center mt-2 space-x-4">
                <Link to="about" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-2xl hover:underline">
                About
                </Link>
                <Link to="experience" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-2xl">
                Experience
                </Link>
                <Link to="project" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-2xl">
                Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isUserMenuOpen ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                 <a href="https://www.linkedin.com/in/sujal-saxena-384701288/" className="text-2xl text-white"><FaLinkedinIn/></a>
                  
                </button>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  
                  aria-expanded={isUserMenuOpen ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                 <a href="https://github.com/sujal8923" target="blank" className="text-white text-2xl">
                 <FaGithub/>
                 </a>

                  
                </button>
              </div>

              {/* Dropdown menu */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col gap-8">
        <Link to="about" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-3xl">
                About
                </Link>
                <Link to="experience" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-3xl">
                Experience
                </Link>
                <Link to="project" smooth={true} duration={300}  className="cursor-pointer text-decoration-none text-white text-3xl">
                Project
                </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navi;
