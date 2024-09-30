import StarRating from '@/components/starRating';
import React from 'react';

const Card: React.FC = () => {
    return (
        <div className='w-fit p-4 bg-gray-100 rounded-lg'>
            <table className='w-full border-separate border-spacing-1'>
                <tbody>
                    <tr>
                        <td className='py-2'>
                            <div className='text-gray-700'>Activity</div>
                        </td>
                        <td className='py-2'>
                            <StarRating />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'>
                            <div className='text-gray-700'>Exercise</div>
                        </td>
                        <td className='py-2'>
                            <StarRating />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'>
                            <div className='text-gray-700'>Mindfulness</div>
                        </td>
                        <td className='py-2'>
                            <StarRating />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'>
                            <div className='text-gray-700'>Book</div>
                        </td>
                        <td className='py-2'>
                            <StarRating />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Card;
