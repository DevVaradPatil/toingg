"use client";
import React, { useEffect, useState } from "react";
import "./Scrollbox.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IoCall } from "react-icons/io5";

const Hero = () => {
  const lines = [
    "Political Campaigning",
    "Lead Generation",
    "Interview Scheduling",
    "Resolve Customer Complaints",
    "Fund Raising",
    "Market Surveys",
    "B2B Data Call",
    "Payment Reminders",
    "EVERYTHING",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {  
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="w-full px-[20vw] xs:px-5 xs:flex-col xs:text-center flex items-center justify-between">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-4xl xs:text-5xl text-gray-400 font-medium">
          Build AI Calling Agent that can do
        </h1>
        <div className="relative h-10 xs:h-14 w-full overflow-hidden">
          <div className="absolute w-full">
            <div
              className="text-4xl xs:text-5xl xs:mt-2 text-black font-bold animate-scroll"
              key={currentLineIndex}
            >
              {lines[currentLineIndex]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-5 xs:flex-col xs:justify-center xs:w-full xs:mt-10">
          <button className="bg-gradient-to-r opacity-90 hover:opacity-100 from-[#FFA96B] to-[#D98C54] text-white font-semibold px-10 py-5 shadow-30 my-3 rounded-[10px]">
            Build your own voice agent{" "}
            <span className="pl-2 text-black text-sm">&apos;Coming soon&apos;</span>
          </button>
          <button className="font-semibold py-5 px-5 hover:bg-gray-100 rounded-[10px] border text-sm">
            Hear it in Action
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 pl-10 xs:pl-0">
        <div className="w-[375px] items-start justify-center px-10 h-[450px] bg-gradient-to-br from-[#FFD3B4] to-[#FFFEFD] shadow-xl rounded-2xl flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Try now</h1>
          <p className="font-medium mt-5">Get a call from Toingg</p>
          <form className="flex flex-col gap-3 w-full justify-center items-center">
            <input
              type="text"
              placeholder="Name"
              className="text-gray-400 text-[12px] w-full bg-transparent px-2 py-2 border rounded-[10px] border-gray-600 "
            />

            <PhoneInput
              country={"in"}
              containerClass="input1 input2"
              buttonClass="input1 inpu3"
              inputClass="input1 input2 input4"
              />

            <select className="text-gray-400 text-[12px] w-full bg-transparent px-2 py-2 border rounded-[10px] border-gray-600">
              <option value="en">Choose your language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>

            <button
              type="submit"
              className="mt-2 text-white bg-[#FF9345] hover:bg-[#ff8848] rounded-full p-3 text-2xl"
            >
              <IoCall />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
