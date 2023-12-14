import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type ImageProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<ImageProps> = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  // Check if slides is null or undefined, and set an empty array as a default value
  const slidesArray = slides ? React.Children.toArray(slides) : [];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slidesArray.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slidesArray.length - 1 ? 0 : curr + 1));
  return (
    <>
      <div className="relative">
        
        <div className="overflow-hidden">
          {/* image */}
          <div
            className="flex transition-transform ease-out duration-500 gap-2"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slidesArray}
          </div>
        </div>
          {/* slider button */}
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800"
            >
              <ChevronRight />
            </button>
          </div>
      </div>
    </>
  );
};

export default Carousel;
