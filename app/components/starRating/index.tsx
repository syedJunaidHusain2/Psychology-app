"use client";
import React, { useState } from 'react';
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

interface StarRatingProps {
  numOfTimes: number[];
}

const StarRating: React.FC<StarRatingProps> = ({ numOfTimes }) => {
  const [checkedStars, setCheckedStars] = useState<number[]>([]);

  const handleStarClick = (value: number) => {
    setCheckedStars(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex space-x-4">
      {!!numOfTimes.length && numOfTimes.map((time, idx) => (
        <div
          key={idx}
          onClick={() => handleStarClick(idx + 1)}
          className="flex flex-col justify-center items-center cursor-pointer group"
        >
          {checkedStars.includes(idx + 1) ? (
            <IoIosStar
              className="text-[rgb(88,188,179)] transition-colors duration-300"
              size={30}
            />
          ) : (
            <IoIosStarOutline
              className="text-gray-500 group-hover:text-[rgb(128,128,128)] transition-colors duration-300"
              size={30}
            />
          )}
          <p className="text-xs text-gray-600 mt-2">{time}</p>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
