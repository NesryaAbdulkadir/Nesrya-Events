import React from "react";
import { PortfolioImages } from "../../constant";
import Carousel from "../Carousel";

export default function Portfolio() {
  return (
    <div className="bg-bgColor m-0 pt-20" id="portfolio">
      <div className="pt-28 md:p-10 p-5 w-screen">
        <h1 className="text-5xl font-italiana lg:text-7xl sm:text-6xl m-0  ">
          Portfolio
        </h1>
        <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
          Look at our latest events
        </p>
        <div className="w-[80%] h-[500px] m-auto overflow-y-hidden mt-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
