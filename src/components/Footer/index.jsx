import React from "react";
import { NavLinks, SocialIcons } from "../../constant";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex mt-0 p-10 bg-bgColor">
      <div className="flex justify-around items-center w-screen mx-auto gap-2">
        <div className="flex gap-2 items-center">
          <a href="#home">
            <img src="/LogoDark.png" alt="logo" className="w-10 h-auto " />
          </a>
          <div className="hidden sm:flex">
            <p className="font-italiana lg:text-2xl text-xl">Nesrya</p>
            <p className="font-italiana lg:text-2xl text-xl">Events</p>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col ">
          <div className="flex justify-center gap-3 mb-3">
            {SocialIcons?.map((icon, index) => (
              <a key={index} href={icon.path}>
                {icon.icon}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="lg:text-xl text-sm font-poppins md:mt-5 tracking-wide md:leading-8 leading-7"
          >
            NesryaEvents@gmail.com
          </a>
        </div>
        <a href="#" className="flex flex-col justify-center items-center">
          <Copyright />
          <p className="lg:text-xl text-sm font-poppins md:mt-5 tracking-wide">
            Privacy and Terms
          </p>
        </a>
      </div>
    </footer>
  );
}
