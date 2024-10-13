import React from "react";
import ContactForm from "../ContactForm";

export default function ContactUs() {
  return (
    <div className="bg-bgColor m-0 pt-20 " id="contact">
      <div className="pt-28 md:p-10 p-5 w-screen flex flex-col md:flex-row gap-10 justify-evenly ">
        <div className="w-full col-span-1">
          <h1 className="text-5xl font-italiana lg:text-7xl sm:text-6xl m-0  ">
            Contact Us
          </h1>
          <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
            Feel free to let us know about your upcomming event. (include your
            event date or any other pertinent information)
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
