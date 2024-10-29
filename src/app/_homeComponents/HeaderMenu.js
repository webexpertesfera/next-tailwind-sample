"use client"
import React, { useState, useRef } from "react";

const HeaderMenu = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState("");
  const navigationDropdownRef = useRef(null);
  const closeDelay = 200;
  let closeTimeout;

  const handleMouseEnter = (menu, element) => {
    clearCloseTimeout();
    setNavigationMenuOpen(true);
    setNavigationMenu(menu);
    repositionDropdown(element);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setNavigationMenuOpen(false);
      setNavigationMenu("");
    }, closeDelay);
  };

  const clearCloseTimeout = () => {
    clearTimeout(closeTimeout);
  };

  const repositionDropdown = (element) => {
    if (navigationDropdownRef.current) {
      const dropdown = navigationDropdownRef.current;
      dropdown.style.left = `${element.offsetLeft}px`;
      dropdown.style.marginLeft = `${element.offsetWidth / 2}px`;
    }
  };

  return (
    <nav className="relative z-10 w-auto">
      <div className="relative">
        <ul className="flex items-center justify-center flex-1 p-1 space-x-1 list-none border rounded-md text-neutral-700 group border-neutral-200/80">
          <li>
            <button
              className={`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-neutral-900 focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
                navigationMenu === "learn-more" ? "bg-neutral-100" : "hover:bg-neutral-100"
              }`}
              onMouseEnter={(e) => handleMouseEnter("learn-more", e.currentTarget)}
              onMouseLeave={handleMouseLeave}
            >
              <span>Learn More</span>
              <svg
                className={`relative top-[1px] ml-1 h-3 w-3 transition-transform duration-300 ease-out ${
                  navigationMenuOpen && navigationMenu === "learn-more" ? "-rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {navigationMenuOpen && (
        <div
          ref={navigationDropdownRef}
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={handleMouseLeave}
          className={`absolute top-0 pt-3 ease-out transform duration-100 ${
            navigationMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } -translate-x-1/2 translate-y-11`}
        >
          <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
            {navigationMenu === "learn-more" && (
              <div className="flex items-stretch justify-center w-full p-6">
                <div className="w-72">
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Tailwind CSS</span>
                    <span className="block font-light leading-5 opacity-50">A utility first CSS framework for building amazing websites.</span>
                  </a>
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Laravel</span>
                    <span className="block font-light leading-5 opacity-50">The perfect all-in-one framework for building amazing apps.</span>
                  </a>
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Pines UI</span>
                    <span className="block leading-5 opacity-50">An Alpine JS and Tailwind CSS UI library for awesome people.</span>
                  </a>
                </div>
                <div className="w-72">
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">AlpineJS</span>
                    <span className="block font-light leading-5 opacity-50">A framework without the complex setup or heavy dependencies.</span>
                  </a>
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Livewire</span>
                    <span className="block leading-5 opacity-50">A seamless integration of server-side and client-side interactions.</span>
                  </a>
                  <a href="#_" onClick={() => setNavigationMenuOpen(false)} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Tails</span>
                    <span className="block leading-5 opacity-50">The ultimate Tailwind CSS design tool that helps you craft beautiful websites.</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderMenu;
