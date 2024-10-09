import React, { useState } from 'react';

const DateRangePicker = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [dateArray, setDateArray] = useState([]);

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const generateDateArray = () => {
        const start = new Date(fromDate);
        const end = new Date(toDate);
        const dates = [];

        while (start <= end) {
            const day = start.getDate().toString().padStart(2, '0');
            const month = (start.getMonth() + 1).toString().padStart(2, '0');
            const year = start.getFullYear().toString().slice(-2);
            dates.push(`${day}/${month}/${year}`);
            start.setDate(start.getDate() + 1);
        }

        setDateArray(dates);
    };

    return (
        <div className='p-6 bg-bg_color_primary rounded-lg shadow-lg'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <div className="w-72 flex">
                        <input
                            type="date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 shadow-sm'
                        />
                    </div>
                    <div className="w-72 flex">
                        <input
                            type="date"
                            value={toDate}
                            onChange={handleToDateChange}
                            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 shadow-sm'
                        />
                    </div>
                </div>
                <button
                    onClick={generateDateArray}
                    className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 transition duration-300"
                >
                    Generate Dates
                </button>
                <div className='mt-4'>
                    {dateArray.length > 0 && (
                        <ul>
                            {dateArray.map((date, index) => (
                                <li key={index} className='text-gray-700'>{date}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DateRangePicker;
