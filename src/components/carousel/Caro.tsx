import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface ImageCarouselProps {
  images: string[];
}

const Caro: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [initialMode, setInitialMode] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];
  // images
  // .concat(images, images)
  // .slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className=" max-w-screen-xl mx-auto  border border-indigo-400 py-4 relative">
        <div className=" flex items-center justify-center">
          {/* previous button */}
          <button
            className="absolute border border-gray-700 left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800"
            onClick={goToPrevious}
          >
            <ChevronLeft />
          </button>

          {/* Image slider container */}
          <div className="overflow-hidden">
            <div
              className=" border border-red-500 flex justify-center gap-2 oveflow-hidden w-[956px] h-[415px] max-w-full transition-transform ease-in-out duration-500"
              style={{
                transform: `translateX(-${currentIndex * 318}px)`,
              }}
            >
              {
                // images
                // .slice(currentIndex, currentIndex + 3)
                displayedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`carousel-${index}`}
                    className="cursor-pointer w-[318px] h-[415px] object-cover rounded-lg"
                  />
                ))
              }
            </div>
          </div>

          {/* Next image slider */}
          <button
            className="absolute border border-gray-700 right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800"
            onClick={goToNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Caro;
