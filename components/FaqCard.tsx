"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

interface FaqCardProps {
    question: string,
    answer: string
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-[80%] rounded-md border border-gray-600 px-5 xs:py-4 py-8 my-5 xs:my-2'>
      <div className='flex justify-between items-center'>
        <p className='text-2xl xs:text-lg'>
          {question}
        </p>
        <button onClick={toggleAnswer} className='text-2xl'>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {isOpen && (
        <div className='mt-5'>
          <p>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default FaqCard;
