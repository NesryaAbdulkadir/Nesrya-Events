import React, { useState } from "react";
import { NavLinks } from "../../constant";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-20 py-5 backdrop-blur-lg text-textColor fixed top-0 left-0 right-0 z-50 shadow-md bg-bgColor">
      <a href="#home">
        <img src="/LogoDark.png" alt="logo" className="w-10 h-auto" />
      </a>

      <div
        className="md:hidden cursor-pointer  max-w-max p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </div>

      {isOpen && (
        <div className="flex flex-col gap-y-4 w-full justify-center items-center absolute right-0 top-20 z-50 sm:p-20 p-10 bg-bgColor md:hidden">
          <ul className="flex flex-col gap-x-4 items-center">
            {NavLinks?.map((link, index) => (
              <li
                className="list-none hover:border-b-2 border-textColor"
                key={index}
              >
                <a className="text-black  font-poppins " href={link.path}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="py-3 px-5 bg-accent  hover:bg-[#e2e6ff] max-w-max"
          >
            Contact Us
          </a>
        </div>
      )}

      <div className="hidden md:flex md:justify-between md:w-2/3">
        <ul className="flex gap-x-4 items-center">
          {NavLinks?.map((link, index) => (
            <li
              className="list-none hover:border-b-2 border-textColor"
              key={index}
            >
              <a className="text-black font-poppins " href={link.path}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="py-3 px-5 bg-accent hover:bg-[#e2e6ff]">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
