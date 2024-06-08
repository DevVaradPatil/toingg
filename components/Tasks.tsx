import React from "react";
import Card from "./Card";
import CardV from "./CardV";
import "./Scrollbox.css";

const Tasks = () => {
  return (
    <div className="flex px-[15vw] mt-[180px] items-center flex-col justify-center gap-10">
      <p className="text-4xl font-medium">
        Program phone agents to automate any task
      </p>

      <div className="flex flex-wrap items-center justify-center ">
        <Card
          imgUrl="https://call.toingg.com/images/Response.svg"
          title="Ultra-Fast Response"
          description="Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations."
        />
        <div className="w-px h-[300px] bg-[#F49C5D]" />
        <Card
          imgUrl="https://call.toingg.com/images/interruption.svg"
          title="Smart Interruption Management"
          description="Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations"
        />
        <div className="w-px h-[300px] bg-[#F49C5D]" />
        <Card
          imgUrl="https://call.toingg.com/images/memory.svg"
          title="Advanced Memory Recall"
          description="Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction."
        />
        <div className="w-[90%] h-px bg-[#F49C5D]" />
        <Card
          imgUrl="https://call.toingg.com/images/conversational.svg"
          title="Dynamic Conversational Flows"
          description="Navigate through complex conversations with ease, thanks to our AIs ability to understand and adapt to various conversational pathways."
        />
        <div className="w-px h-[300px] bg-[#F49C5D]" />
        <Card
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9bb1f32f0ee6f4a90c4d0b4631b5e6f3e9d013bcf6bd1a004459f759cb2fe?apiKey=4f9ab024be65425d98b6f0dcbd459477&"
          title="Custom AI Solutions"
          description="Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness."
        />
        <div className="w-px h-[300px] bg-[#F49C5D]" />
        <Card
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f904e78a506d435ed42f76be30f6b2b24e29becc1de59f5022e87e30bcb3b5?apiKey=4f9ab024be65425d98b6f0dcbd459477&"
          title="Scalability at Your Fingertips"
          description="From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business."
        />
      </div>
      <p className="text-4xl font-medium mt-20">
        Elevate Your Calls With AI Precision And Enterprise Power
      </p>

      <div className="flex flex-wrap items-center justify-center ">
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/tune@2x.png"
          title="Fine tuning"
          description="Elevate Your Agent Interactions With Our Fine-tuning Technique, Not only LLM wights but Prompts and parameters too."
        />
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/tools@2x.png"
          title="Custom tools"
          description="Enhanced Agent Capabilities: Instantly access customer history, integrate databases, and connect to APIs during calls. Simplify tasks like scheduling and data handling, all while leveraging past call insights for smarter interactions."
        />
        <CardV
          imgUrl="https://c.animaapp.com/CnZn5oX7/img/voice@2x.png"
          title="Dedicated infrastructure"
          description="Experience unmatched scalability and reliability with our dedicated Kubernetes clusters, designed for high availability to support up to 10,000 concurrent calls. Enjoy exclusive server access, bypassing standard rate limits, complemented by our 24/7 expert support."
        />
      </div>
    </div>
  );
};

export default Tasks;
