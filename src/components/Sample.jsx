import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sample = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-8">
      {/* Button */}
      <button 
        onClick={() => navigate('/')} 
        className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mb-6"
      >
        Go Back
      </button>
      
      {/* Story Content */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Chapter 1: The Beginning</h1>
        <p className="text-lg leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet officiis eum molestiae suscipit 
          possimus quibusdam nobis odio illo, deleniti, rerum sapiente excepturi eaque repellat consequuntur assumenda 
          modi omnis alias? Ut, deserunt. Quas consequuntur nisi odit eius, facilis, dolore ipsa eos, laborum at dolor 
          saepe itaque rerum expedita necessitatibus sit perferendis perspiciatis nulla. Odit et asperiores quas quibusdam 
          velit molestiae ratione ipsam totam libero unde ad eaque, nulla voluptatibus expedita illo consequatur corporis 
          aperiam sequi quaerat inventore dolores labore reiciendis? Quae voluptatem molestias illum commodi, sunt quia 
          repellat voluptates maxime beatae doloribus qui nulla cupiditate ex earum incidunt suscipit nostrum?
        </p>
      </div>
    </div>
  );
};

export default Sample;
