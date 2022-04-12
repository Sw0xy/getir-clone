import React, { useState ,useEffect } from 'react';
import CardsData from '../api/cards.json';
export default function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(CardsData);
  }, []);

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-4 mt-8 '>
      {
        cards.map((card, index) => (
          <div className='bg-white mt-4 p-10 rounded-md shadow-lg flex flex-col items-center text-center'>
            <img className='w-[150px] h-[150px] mt-6' src={card.image} alt={card.name} />
            <h6 className='mt-6 text-brand-color font-semibold'>{card.title}</h6>
            <p className='text-sm text-gray-500 mt-2'>{card.description}</p>
          </div>
        ))
      }
    </div>
  )
}
