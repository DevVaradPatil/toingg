"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardV from "./CardV";

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
const Tasks3 = () => {
  return (
    <div className="w-full justify-center items-center">
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
        <div className="w-full justify-center items-center flex">
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/tune@2x.png"
          title="Fine tuning"
          description="Elevate Your Agent Interactions With Our Fine-tuning Technique, Not only LLM wights but Prompts and parameters too."
        />
        </div>
        
        <div className="w-full justify-center items-center flex">
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/tools@2x.png"
          title="Custom tools"
          description="Enhanced Agent Capabilities: Instantly access customer history, integrate databases, and connect to APIs during calls. Simplify tasks like scheduling and data handling, all while leveraging past call insights for smarter interactions."
        />
        </div>
        
        <div className="w-full justify-center items-center flex">
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/voice@2x.png"
          title="Dedicated infrastructure"
          description="Experience unmatched scalability and reliability with our dedicated Kubernetes clusters, designed for high availability to support up to 10,000 concurrent calls. Enjoy exclusive server access, bypassing standard rate limits, complemented by our 24/7 expert support."
        />
        </div>
        
    </Carousel>
    </div>
  )
}

export default Tasks3