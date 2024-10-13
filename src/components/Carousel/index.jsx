import React, { useState } from "react";
import { PortfolioImages } from "../../constant";
import {
  ArrowBigLeftIcon,
  ArrowDownLeftFromCircle,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
} from "lucide-react";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [editItemId, setEditItemId] = useState();

  let previousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(PortfolioImages.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  let NextImage = () => {
    if (currentImage === 6) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className="overflow-hidden relative ">
      <div
        className="flex gap-3 transition ease-out duration-400 h-[1200px] "
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {PortfolioImages.map((image, index) => (
          <img
            key={index}
            src={image.image}
            className="h-[40%] content-stretch
            "
          />
        ))}
      </div>

      <div className="absolute flex top-0 justify-between  w-full items-center">
        <button
          className="bg-bgColor py-3 px-4 text-textColor m-3 rounded-full shadow-md"
          onClick={previousImage}
        >
          <ArrowLeft />
        </button>
        <button
          className="bg-bgColor py-3 px-4 text-textColor m-3 rounded-full shadow-md"
          onClick={NextImage}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
