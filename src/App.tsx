import React from "react";
import { image1, image2, image3, image4, image5, image6, image7, image8 } from "./assets/images/images";
// import Caro from "./components/carousel/Caro";
import SlickCarousel from "./components/carousel/SlickCarousel";


const images = [image1, image2, image3, image4, image5,image6,image7,image8];

const App: React.FC = () => {
  return (  
    <>
      <div className=" max-w-screen-xl mx-auto py-4">
        <div>
          {/* <Caro images={images} /> */}
          {/* <Slider /> */}
          <SlickCarousel images={images} />
        </div>

      </div>
      {/* <div></div> */}

    </>
  );
};

export default App;
