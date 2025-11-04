import React from 'react';

const Page = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3>idhar nahi aane ka tha </h3>
      <img src="src\images\chaliye_shuru_karte_hai.jpg" alt="lets go" />
    </div>
  );
};

export default Page;
