"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

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
const Tasks2 = () => {
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
       <Card
          imgUrl="https://call.toingg.com/images/Response.svg"
          title="Ultra-Fast Response"
          description="Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations."
        />
        </div>
        <div className="w-full justify-center items-center flex">     
        <Card
          imgUrl="https://call.toingg.com/images/interruption.svg"
          title="Smart Interruption Management"
          description="Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations"
        />
        </div>
        <div className="w-full justify-center items-center flex">
        <Card
          imgUrl="https://call.toingg.com/images/memory.svg"
          title="Advanced Memory Recall"
          description="Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction."
        />
        </div>
        <div className="w-full justify-center items-center flex">
        <Card
          imgUrl="https://call.toingg.com/images/conversational.svg"
          title="Dynamic Conversational Flows"
          description="Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways."
        />
        </div>
        <div className="w-full justify-center items-center flex">
        <Card
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9bb1f32f0ee6f4a90c4d0b4631b5e6f3e9d013bcf6bd1a004459f759cb2fe?apiKey=4f9ab024be65425d98b6f0dcbd459477&"
          title="Custom AI Solutions"
          description="Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness."
        />
        </div>
        <div className="w-full justify-center items-center flex">

        <Card
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f904e78a506d435ed42f76be30f6b2b24e29becc1de59f5022e87e30bcb3b5?apiKey=4f9ab024be65425d98b6f0dcbd459477&"
          title="Scalability at Your Fingertips"
          description="From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business."
        />
        </div>
    </Carousel>
    </div>
  )
}

export default Tasks2