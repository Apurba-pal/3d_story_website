import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const Front = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/stormy-weather-with-crashing-waves-lighthouse-illuminated-by-lightning-dusk_607202-48595.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex "
      >
        <FiArrowLeft size={24} className="mr-2" />
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-60 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-300">
          1. Mystery 
          {/* (Number: 1, Position: 1) */}
        </h1>
        <p className="text-lg leading-relaxed text-white">
          The storm raged fiercely as Detective Harper stood at the edge of the cliff overlooking Greyhaven. It had been a week since the Solstice Diamond was stolen from the town's museum, and every lead had dried up. Her eyes caught the first break in the case—something small, but crucial. A single, deliberate footprint was found on the beach near the old pier, leading toward a cliffside cave known for its history of smugglers. Harper knelt, studying the sand. The first step of many, she thought, as she followed the trail into the darkness. The case was about to take a dangerous turn.
        </p>
      </div>
    </div>
  )
}

export default Front
