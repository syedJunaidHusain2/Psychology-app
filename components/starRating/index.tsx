// components/StarRating.tsx
"use client"
import React, { useState } from 'react';

interface StarRatingProps {
  goal: string;
}

const StarRating: React.FC<StarRatingProps> = ({ goal }) => {
  const [checkedStars, setCheckedStars] = useState<number[]>([]);

  const handleChange = (value: number) => {
    setCheckedStars(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative flex space-x-2 gap-3">
      {[5, 4, 3, 2, 1].map((num) => (
        <div key={num} className="relative flex items-center flex-col gap text-center">
          <input
            type="checkbox"
            id={`star${num}`}
            value={num}
            checked={checkedStars.includes(num)}
            onChange={() => handleChange(num)}
            className="hidden peer"
          />
          <label
            htmlFor={`star${num}`}
            title={`${num} star${num > 1 ? 's' : ''}`}
            className="cursor-pointer text-gray-600 peer-checked:fill-bg_color_secendory  hover:fill-[#ff9e0b]"
          >
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
          </label>
          {/* time, i.e., at what-what he will do the task */}
          <h5 className="text-sm text-gray-500 mt-2">{/* Dynamic time or text here */}09:56</h5>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
