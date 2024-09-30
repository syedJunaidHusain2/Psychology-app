import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Head = () => {
  return (
    <>
      <div className="font-bold mb-6">
        Manage Blogs
      </div>
      <div className="relative text-sm ">
        <input 
          type="text" 
          placeholder="Search Blogs" 
          className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300" 
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium text-gray-600" />
      </div>
    </>
  );
};

export default Head;
