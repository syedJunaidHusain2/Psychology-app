import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Modal = ({ selectedNotification, closeModal }) => {
    return (
        <div onClick={closeModal} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm px-4 animate-fadeIn">
            <div className="bg-white w-full max-w-lg p-6 md:p-8 rounded-xl shadow-2xl transition-all transform scale-95 hover:scale-100">
                <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-6">
                    Notification Details
                </h2>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-gray-700">
                        <FaUser size={15} className="text-gray-500" />
                        <p className="text-sm md:text-base">
                            <strong>Name:</strong> {selectedNotification.username}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <FaPhone size={15} className="text-gray-500" />
                        <p className="text-sm md:text-base">
                            <strong>Number:</strong> {selectedNotification.number}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <FaEnvelope size={15} className="text-gray-500" />
                        <p className="text-sm md:text-base">
                            <strong>Email:</strong> {selectedNotification.email}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <FaCommentDots size={30} className="text-gray-500" />
                        <p className="text-sm md:text-base mb-4">
                            <strong>Message:</strong> {selectedNotification.message}
                        </p>
                    </div>
                </div>
                <button
                    className="text-sm bg-black text-white py-2 px-5 w-full md:w-auto rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-lg transform hover:scale-105 transition-transform"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
