import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[15vw] py-10 bg-[#FFFAF7] gap-2">
      <p className="text-[42px] font-bold">TOINGG</p>
      <p className="text-lg text-gray-500 font-medium mt-3 xs:text-center">
        We are here to grow your business{" "}
        <span className="text-red-500">❤</span>{" "}
      </p>

      <div className="flex justify-center items-center gap-5 cursor-pointer xs:flex-col">
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
            <p>Contact</p>
            <p>API docs</p>
            <p>Refund Policy</p>
      </div>

      <div className="flex justify-between items-center mt-2 w-full px-[5vw] xs:flex-col-reverse xs:text-center xs:gap-4">
        <p>Copyright © 2024 Toingg, All rights reserved.</p>

        <div className="flex text-black text-2xl gap-3 items-center">
            <a href="https://www.instagram.com/toingg_ai?igsh=bTYyM2J4bG1iYW5j">
                <FaInstagram/>
            </a>
            <a href="https://discord.com/invite/ghsS3z9N">
                <FaDiscord/>
            </a>
            <a href="https://www.linkedin.com/company/toingg/">
                <FaLinkedinIn/>
            </a>
            <a href="https://x.com/Toingg_AI">
                <FaX className="text-xl"/>
            </a>
            <a href="https://www.youtube.com/@Toingg-AI">
                <FaYoutube/>
            </a>
        </div>
      </div>


    </div>
  );
};

export default Footer;
