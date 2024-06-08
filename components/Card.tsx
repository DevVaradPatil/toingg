import React, { ReactNode } from 'react'

interface CardProps {
    imgUrl: string,
    title: string,
    description: string,
}

const Card: React.FC<CardProps> = ({ imgUrl, title, description }) => {
    return (
      <div className="w-[330px] h-[250px] transition-all mx-2 duration-300 hover:scale-[1.03] hover:shadow-30 px-5 py-5 hover:-translate-y-2 flex items-center justify-center flex-col gap-5 text-center">
        <img src={imgUrl} alt={title} className="h-12" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    );
  }

export default Card