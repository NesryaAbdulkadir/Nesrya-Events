import React from "react";

export default function HeroSection() {
  return (
    <div
      className="bg-heroSection h-screen w-screen bg-cover flex justify-center items-center"
      id="home"
    >
      <div className="z-40 bg-[#fcf5c79a] md:w-2/3 lg:p-20 flex flex-col justify-center items-center backdrop-blur-sm p-10 m-10">
        <h1 className="text-4xl md:text-center font-italiana lg:text-6xl sm:text-5xl ">
          Creating unforgettable moments
        </h1>
        <p className="md:text-xl font-poppins pt-2 md:text-center">
          We are dedicated to perfecting every detail, ensuring your event is
          truly memorable.
        </p>
        <a
          href="#contact"
          className="py-3 px-5 bg-accent mt-5 hover:bg-[#e2e6ff]"
        >
          Book a call with us
        </a>
      </div>
    </div>
  );
}
