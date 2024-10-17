"use client";
const Modal = ({ isOpen, onClose, onConfirm }:any) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm px-4 animate-fadeIn"
            onClick={onClose} 
        > 
            <div
                className="bg-white rounded-lg p-6 w-full max-w-sm "
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-bold mb-6 text-lg">Are you sure you want to logout?</h2>
                <div className="flex">
                    <button
                        onClick={onClose} // Close modal on "No"
                        className="bg-black text-white py-2 px-5 w-full md:w-auto rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-lg transform hover:scale-105 transition-transform"
                        >
                        No
                    </button>
                    <button
                        onClick={onConfirm} // Confirm logout on "Yes"
                        className="bg-black text-white py-2 px-5 w-full md:w-auto rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-lg transform hover:scale-105 transition-transform"
                        >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
