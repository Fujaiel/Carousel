import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from "react-feather";

type ImageProps = {
  images: string[];
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="slick-custom-arrow slick-next custom-next-arrow bg-red text-black rounded-full shadow-xl"
      onClick={onClick}
      aria-label="Next"
      //   style={{display:"block", background:"red", padding:"18px"}}
    >
      {/* <ChevronRight color="black" /> */}
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="slick-custom-arrow slick-prev custom-prev-arrow bg-white text-black rounded-full shadow-xl"
      onClick={onClick}
      aria-label="Previous"
    >
      {/* <ChevronLeft color="black" /> */}
    </button>
  );
}

const SlickCarousel: React.FC<ImageProps> = ({ images }) => {
  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto border border-indigo-500 py-6">
      <div className="border border-red-500 max-w-screen-lg mx-auto px-4">
        <h2 className=" text-white font-bold"> Carousel </h2>
        <Slider {...settings} className="hide">
          {images.map((image, index) => (
            <div key={index} className="w-[318px] h-[415px] p-2 group relative">
              <div className="px-4 cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0  group-hover:opacity-100 flex justify-center items-center ">
                <p className="text-white text-center text-medium font-bold animate-move-up"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum.</p>
              </div>
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickCarousel;
