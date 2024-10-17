import StarRating from '@/app/components/starRating';
import React from 'react';

const Card: React.FC<{ tasksState: any[] }> = ({ tasksState,date }:any) => {
    return (
        <div className="max-w-lg w-full mx-auto p-6 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div>
                {date}
            </div>
            <table className="w-full border-separate border-spacing-2">
                <tbody>
                    {!!tasksState.length && tasksState.map((item:any, id:any) => (
                        <tr key={id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                            <td className="py-3">
                                <div className="text-gray-800 text-lg font-bold">{item.taskName}</div>
                            </td>
                            <td className="py-3 pl-6 whitespace-nowrap">
                                <StarRating numOfTimes={item.timesArry} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Card;
