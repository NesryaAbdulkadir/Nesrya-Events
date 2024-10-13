import React from "react";
import { Services } from "../../constant";

export default function ServicesSection() {
  return (
    <div className="bg-bgColor m-0 pt-20" id="services">
      <div className="pt-28 md:p-10 p-5 w-screen ">
        <h1 className="text-5xl font-italiana lg:text-7xl sm:text-6xl m-0  ">
          Services
        </h1>
        <p className="md:mb-12 mb-8 text-xl font-poppins">
          Explore our services that aligns with your unique vision and goals.
        </p>
        {Services.map((service, index) => (
          <div key={index} className=" ">
            {service.id % 2 === 1 ? (
              <div className="flex flex-col md:flex-row justify-center items-center">
                <img
                  src={service.img}
                  alt="service"
                  className="w-full lg:w-[700px] md:w-[500px]  h-auto "
                />
                <div className="p-10 md:py-36">
                  <h2 className="text-5xl lg:text-8xl md:text-6xl sm:text-7xl font-italiana mb-5">
                    {service.title}
                  </h2>
                  <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
                    {service.desc}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="p-10 md:py-36">
                  <h2 className="text-5xl lg:text-8xl md:text-6xl sm:text-7xl font-italiana mb-5">
                    {service.title}
                  </h2>
                  <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
                    {service.desc}
                  </p>
                </div>
                <img
                  src={service.img}
                  alt="service"
                  className="w-full lg:w-[700px] md:w-[500px] h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
