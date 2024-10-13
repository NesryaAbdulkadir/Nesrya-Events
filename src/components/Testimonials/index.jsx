import React from "react";
import { TestimonialsContent } from "../../constant";

export default function Testimonials() {
  return (
    <div className="bg-bgColor m-0 pt-20" id="testimonials">
      <div className="pt-28 md:p-10 p-5 w-screen ">
        <h1 className="text-5xl font-italiana lg:text-7xl sm:text-6xl m-0  ">
          Testimonials
        </h1>
        <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
          Explore our customer's opinion on our events.
        </p>
        <div className="flex flex-col lg:flex-row gap-y-10 md:gap-x-10 md:gap-y-0 justify-center items-center mt-10">
          {TestimonialsContent.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-3 p-10 bg-bgColor shadow-md"
            >
              <div className="flex gap-x-3 items-center">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-20 h-auto rounded-full"
                />
                <div>
                  <p className="font-poppins font-bold text-xl">
                    {testimonial.name}
                  </p>
                  <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
                    {testimonial.position} at {testimonial.companey}
                  </p>
                </div>
              </div>
              <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
                {testimonial.content}
              </p>
              {/* <a
              href={testimonial.link}
              className="text-xl font-poppins text-accent hover:border-b-2 max-w-max hover:text-textColor"
            >
              See {testimonial.companey}'s event.
            </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
