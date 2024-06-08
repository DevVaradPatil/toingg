import Branding from "@/components/Branding";
import CodeComponent from "@/components/CodeComponents";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Headbar from "@/components/Headbar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Saftey from "@/components/Saftey";
import Tasks from "@/components/Tasks";
import Tasks2 from "@/components/Tasks2";
import Tasks3 from "@/components/Tasks3";
import Ways from "@/components/Ways";
import Ways2 from "@/components/Ways2";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Headbar />
      <Navbar />
      <Hero />
      <Branding />
      <div className="xs:hidden">
        <Ways />
      </div>
      <div className="hidden xs:flex">
        <Ways2 />
      </div>
      <div className="xs:hidden">
        <Tasks />
      </div>
      <div className="hidden xs:flex xs:flex-col xs:justify-center xs:items-center">
        <p className="text-2xl px-10 text-center mt-10 font-medium ">
          Program phone agents to automate any task
        </p>
        <Tasks2 />
        <p className="text-2xl px-10 text-center mt-10 font-medium ">
          Elevate Your Calls With AI Precision And Enterprise Power
        </p>
        <Tasks3 />
      </div>
      <Saftey />
      <Faq />
      <Footer />
    </div>
  );
}
