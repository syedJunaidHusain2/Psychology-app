'use client'
import { useState } from 'react';
import Modal from './modal';

const Notifications = () => {
  // Sample notifications data
  const [notifications] = useState([
    {
      id: 1,
      username: 'John Doe',
      number: '123-456-7890',
      email: 'johndoe@example.com',
      message: 'This is a sample message from John Doe. Please feel free to contact me anytime.',
    },
    {
      id: 2,
      username: 'Jane Smith',
      number: '987-654-3210',
      email: 'janesmith@example.com',
      message: 'Hey there! Just wanted to reach out and check in regarding the recent updates.',
    },
    {
      id: 3,
      username: 'Michael Brown',
      number: '456-789-1230',
      email: 'michaelbrown@example.com',
      message: 'I would like to inquire about your services. Can you provide more details?',
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div className="pt-6 px-4 md:px-8 lg:px-10">
      <h1 className="text-base font-bold mb-6">Notifications</h1>
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full bg-white border-2 border-stone-100 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-left font-semibold">SNo.</th>
                <th className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-left font-semibold">Contacted User Name</th>
                <th className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-left font-semibold">Number</th>
                <th className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-left font-semibold">Message (Preview)</th>
                <th className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, index) => (
                <tr key={notification.id} className="border-b cursor-pointer" onClick={() => openModal(notification)}>
                  <td className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-black">{index + 1}</td>
                  <td className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-black">{notification.username}</td>
                  <td className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-black">{notification.number}</td>
                  <td className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-black">{notification.message.slice(0, 30)}...</td>
                  <td className="text-xs sm:text-sm py-3 px-2 sm:px-4 text-black">
                    <button
                      className="bg-black text-white py-1 px-3 w-full md:w-auto rounded-full focus:outline-none focus:shadow-outline"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click from opening modal
                        alert(`Delete notification from ${notification.username}`);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedNotification && (
        <Modal closeModal={closeModal} selectedNotification={selectedNotification} />
      )}
    </div>
  );
};

export default Notifications;
