import React from 'react'

const CurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() is 0-based
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    
    const formattedDate = `${day} ${month}`;
  return (
    <div className="text-[12px] text-gray-500 uppercase">{formattedDate}</div>
  )
}

export default CurrentDate
