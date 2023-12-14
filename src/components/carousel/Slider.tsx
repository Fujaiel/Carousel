import React, { useState } from "react";
import { image1, image2, image3,image4,image5,image6,image7,image8 } from "../../assets/images/images";

const images = [image1, image2, image3, image4, image5,image6,image7,image8];

const Slider: React.FC = () => {
  const [currentIndex,setCurrentIndex]= useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* previous slide button */}
       <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500">
        Previous
      </button>

       <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
          
          {/* next slide button */}
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2">
        Next
      </button>
    </div>
  )
}

export default Slider