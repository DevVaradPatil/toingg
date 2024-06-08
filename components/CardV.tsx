import React, { ReactNode } from 'react'

interface CardVProps {
    imgUrl: string,
    title: string,
    description: string,
}

const CardV: React.FC<CardVProps> = ({ imgUrl, title, description }) => {
    return (
      <div className="w-[300px] h-[450px] flex bg-white flex-col items-center justify-start text-center gap-5 border mx-4 px-5 rounded-xl border-gray-500 shadow-15 hover:bg-[#ffefe3]">
        <div className='h-[30%] flex items-center justify-center'>
        <img src={imgUrl} alt={title} className="h-20" />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="">{description}</p>
      </div>
    );
  }

export default CardV