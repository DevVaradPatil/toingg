import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {

    const faqs = [
        {
            question: "What is Toingg?",
            answer: "Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use."
        },
        {
            question: "Why is Toingg better than others?",
            answer: "Toingg differentiates itself through it’s realistic Hindi & English speaking system with interruption, memory, back channeling, database connection, extensive app integration, and customizable solutions and all of this at the lowest price in the market."
        },
        {
            question: "Does Toingg support your existing database?",
            answer: "Yes, Toingg offers customizable solutions that can integrate with your existing database, ensuring seamless data synchronization."
        },
        {
            question: "How does Toingg ensure security?",
            answer: "Toingg prioritizes data security and privacy, adhering to global standards and employing internal hard audits and compliance measures to protect your information."
        },
        {
            question: "How does Toingg address Enterprise solutions?",
            answer: "Toingg provides bespoke enterprise solutions with dedicated support for smooth implementation, integration, and customization to meet specific enterprise needs."
        },
        {
            question: "Does Toingg support your own proprietary LLM model?",
            answer: "Yes, we support LLM proprietary models that can be integrated in Toingg, we also offer LLM’s fine tuning with your call recordings and data sets."
        },
        {
            question: "What is Toingg’s pricing model?",
            answer: "Toingg has three pricing models based on our offerings:AI Calling Agent: $0.12/minute (minimum $10 recharge) SaaS Platform: $0.12/minute (build your own AI agent) API Access: $0.05/minute (bring you own ASR, GPT, TTS)"
        },
        {
            question: "How can I contact Toingg?",
            answer: "For inquiries or more info, you can reach us out at contact@toingg.com and our team will promptly assist you."
        },
    ]

  return (
    <div className="flex flex-col justify-center items-center px-[20vw] xs:px-5">
      <p className="text-5xl font-medium mb-10 xs:text-3xl ">Frequently asked questions</p>
    {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer}/>
    ))}
    </div>
  );
};

export default Faq;
