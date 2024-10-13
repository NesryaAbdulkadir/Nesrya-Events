import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-bgColor m-0 pt-20" id="about">
      <div className="pt-28 md:p-10 p-5 w-screen ">
        <h1 className="text-5xl font-italiana lg:text-7xl sm:text-6xl m-0  ">
          Get to know us
        </h1>
        <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
          We believe that every event is a unique opportunity to create
          unforgettable experiences.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src="group.jpg"
            alt="service"
            className="w-full lg:w-[700px] md:w-[500px]  h-auto "
          />
          <div className="p-10 md:py-36">
            <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
              Nesrya Events was founded in 1990, our team of passionate event
              planners, designers, and coordinators is dedicated to turning your
              vision into reality, no matter the scale or type of event.
            </p>
            <p className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7">
              Our Mission Our mission is to deliver exceptional event planning
              services that exceed our clients'expectations. We strive to create
              memorable moments that foster connections, celebrate achievements,
              and reflect the individual styles of our clients.
            </p>

            <p className="lg:text-xl font-poppins font-bold md:mt-5 tracking-wide md:leading-8 leading-7">
              Our Values{" "}
            </p>
            <ul>
              <li className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7 list-disc list-inside">
                Creativity: We embrace innovation and creativity in every event
                we plan, ensuring that each experience is tailored and original.
              </li>
              <li className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7 list-disc list-inside ">
                Integrity: We believe in transparency and honesty, building
                trust with our clients through open communication and reliable
                service.
              </li>
              <li className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7 list-disc list-inside">
                Collaboration: We work closely with our clients, understanding
                their needs and preferences to create an event that truly
                represents them.
              </li>
              <li className="lg:text-xl font-poppins md:mt-5 tracking-wide md:leading-8 leading-7 list-disc list-inside">
                Excellence: Our commitment to excellence drives us to go above
                and beyond in every detail, ensuring a seamless and enjoyable
                experience for all.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
