import React, { useState } from 'react';
import { BiSpa } from 'react-icons/bi';

const ClientdashCards = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards

  const cardsData = [
    {
      icon: <BiSpa className="icon text-3xl group-hover:text-blue-700" />,
      title: 'Meditation Therapy',
      date: '2023.09.01',
    },
    {
      icon: <BiSpa className="icon text-3xl group-hover:text-blue-700" />,
      title: 'Positive Thinking',
      date: '2023.10.03',
    },
    {
      icon: <BiSpa className="icon text-3xl group-hover:text-blue-700" />,
      title: 'Happy Therapy ',
      date: '2023.10.10',
    },
    {
      icon: <BiSpa className="icon text-3xl group-hover:text-blue-700" />,
      title: 'Annual Therapy',
      date: '2023.11.02',
    },
  ];

  const handleShowMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Show 4 more cards on each click
  };

  return (
    <>
    
      {cardsData.slice(0, visibleCards).map((card, index) => (
        <div key={index} className="flex-1">
          <div className="group bg-white rounded-xl shadow-md hover:border-blue-700 border shadow-md  overflow-hidden text-center p-5 h-40 flex flex-col justify-between cursor-pointer items-center">
            <div className="flex icon-container relative bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center group-hover:bg-blue-100">
              {card.icon}
            </div>
            <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700 ">
              <p className="text-s">{card.title}</p>
              <p className="text-s ">{card.date}</p> {/* Replace count with date */}
            </div>
          </div>
        </div>
      ))}

      {visibleCards < cardsData.length && (
        <div className="flex-1">
          <div
            className="group bg-white rounded-xl shadow-md hover:border-blue-700 border shadow-md  overflow-hidden text-center p-5 h-40 flex flex-col justify-between cursor-pointer items-center"
            onClick={handleShowMoreCards}
          >
            <div className="flex icon-container relative bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center group-hover:bg-blue-100">
              <ImFlag className="icon text-3xl group-hover:text-blue-700" /> {/* Replace FiDollarSign with ImFlag */}
            </div>
            <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700 ">
              <p className="text-s">More Cards</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientdashCards;
