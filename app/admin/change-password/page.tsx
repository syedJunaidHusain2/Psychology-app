"use client"; 

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock } from 'react-icons/ai';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handlePasswordChange = (e) => {
        e.preventDefault();
        console.log({ currentPassword, newPassword });
    };

    return (
        <div className="pt-6 px-4 md:px-8 lg:px-10">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
                <div className="font-bold mb-6 text-base ">
                    Change Password
                </div>
                <form className='text-sm' onSubmit={handlePasswordChange}>
                    {/* Current Password */}
                    <div className="mb-7 relative">
                        <div className="flex items-center">
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                id="currentPassword"
                                value={currentPassword}
                                placeholder='Current Password'
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-md placeholder-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute inset-y-0 right-0 px-3 py-2"
                            >
                                {showCurrentPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} className="text-gray-500" />}
                            </button>
                            <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium text-gray-600" />
                        </div>
                    </div>

                    {/* New Password */}
                    <div className="mb-7 relative">
                        <div className="flex items-center">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                id="newPassword"
                                value={newPassword}
                                placeholder='New Password'
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-md placeholder-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute inset-y-0 right-0 px-3 py-2"
                            >
                                {showNewPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} className="text-gray-500" />}
                            </button>
                            <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium text-gray-600" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-gray-900 text-white py-3 px-5 w-full md:w-auto rounded-full focus:outline-none focus:shadow-outline"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
