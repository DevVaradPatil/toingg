"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CodeComponent from "./CodeComponents";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Ways2 = () => {
  return (
    <div className="w-full">
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
     <div className="px-5">
     <div className="flex justify-between items-center gap-10 w-full xs:flex-col-reverse bg-[#FFF6E8] rounded-[30px] py-10 px-10 xs:px-5 xs:py-5 ">
        <div className="flex flex-col justify-center items-start w-[55%] xs:w-full">
          <p className="text-4xl font-bold">Explore TOINGG in</p>
          <p className="text-4xl font-bold text-[#FC6B01] ">GPT store</p>
          <ul className="flex flex-col gap-2 list-disc ml-5 mt-4">
            <li>
              Interactive Communication: Engage in single or batch calls using
              TOINGG GPT.
            </li>
            <li>
              Advanced Features: Leverage GPT for real-time sentiment analysis
              during calls.
            </li>
            <li>Data Export: Conveniently export call logs to CSV.</li>
            <li>
              Enhanced Usability: Tailored for users familiar with CSV
              functionalities.
            </li>
          </ul>

          <button className="px-3 text-sm rounded-md mt-4 bg-gradient-to-r from-[#FB974F] to-[#AD4C06] text-white py-1">
            Explore more
          </button>
        </div>

        <div className="w-[45%] xs:w-full">
          <div className="w-full h-[400px] overflow-hidden rounded-xl">
            <video
              className="w-full h-full object-cover"
              autoPlay={true}
              loop={true}
              src="https://call.toingg.com/videos/Untitled%20design%20(1).mp4"
            ></video>
          </div>
        </div>
      </div>
     </div>

     <div className="px-5">
     <div className="flex xs:flex-col justify-between items-center gap-10 w-full bg-[#FFF6E8] mt-10 rounded-[30px] py-10 px-10">
        <div className="flex flex-col justify-center items-start w-[50%] xs:w-full">
          <p className="text-4xl font-semibold">Build your own voice agent</p>
          <p className="text-4xl mt-10 font-semibold text-gray-400">
            in just a few lines of code
          </p>
        </div>

        <div className="w-[50%] xs:w-full">
          <div className="w-full overflow-hidden rounded-xl">
            <CodeComponent/>
          </div>
        </div>
      </div>
     </div>
    </Carousel>
    </div>
  );
};

export default Ways2;
