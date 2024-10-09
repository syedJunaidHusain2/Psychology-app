"use client"; 

import { useState } from 'react';
import { AiOutlineUpload, AiOutlineLock } from 'react-icons/ai';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log({ title, image, description });
    };

    return (
        <div className="pt-6 px-4 md:px-8 lg:px-10">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-lg">
                <div className="font-bold mb-6 text-base">
                    Add Blog
                </div>
                <form className='text-sm' onSubmit={handleBlogSubmit}>
                    {/* Title */}
                    <div className="mb-7">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            placeholder='Add Blog Title'
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full pl-4 pr-4 py-3 border bg-gray-100 rounded-md placeholder-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    {/* Add Image */}
                    <div className="mb-7 relative">
                        <div className="flex items-center">
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="w-full pl-10 pr-4 py-3 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <AiOutlineUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium text-gray-600" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-7">
                        <textarea
                            id="description"
                            value={description}
                            placeholder='Add Blog Description ...'
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full pl-4 pr-4 py-3 border bg-gray-100 rounded-md placeholder-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
                            rows="4"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-black text-white py-3 px-5 w-full md:w-auto rounded-full focus:outline-none focus:shadow-outline"
                        >
                            Add Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
