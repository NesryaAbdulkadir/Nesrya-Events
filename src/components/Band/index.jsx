import React from "react";
import { BandTexts } from "../../constant";

export default function Band() {
  return (
    <div className="bg-textColor text-bgColor flex justify-evenly sm:items-center items-start p-5 gap-4">
      {BandTexts.map((text, index) => (
        <div key={index} className="flex flex-col justify-center items-center ">
          <h1 className="md:text-5xl text-3xl font-poppins font-semibold">
            {text.header}
          </h1>
          <p className="md:text-xl text-center font-poppins ">{text.desc}</p>
        </div>
      ))}
    </div>
  );
}
