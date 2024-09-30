import React from 'react'

const CurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() is 0-based
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    
    const formattedDate = `${day} ${month} ${year}`;
  return (
    <div className="text-[10px] text-gray-600 uppercase">{formattedDate}</div>
  )
}

export default CurrentDate
