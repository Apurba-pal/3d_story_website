import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const Right = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/dark-haunted-lighthouse-with-creepy-fog_1020697-470394.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex"
      >
        <FiArrowLeft size={24}  className='mr-2'/>
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-60 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-300">
        6. Horror 
        {/* (Number: 3, Position: 6) */}
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
        The Blackwater Point lighthouse had been abandoned for years, its light a distant memory. Locals spoke in hushed tones about the curse that befell those who entered it after dark. Evan, a skeptic, entered with only his flashlight, determined to disprove the tales. As he ascended the crumbling stairs, he found a journal left behind by the former keeper, its pages stained and brittle. The last entry read: “The lights are wrong. They always come in threes.” He shivered, hearing the distinct sound of a door creaking behind him. Turning, he saw it—the lighthouse’s beacon flaring, casting three distinct shadows across the ground. The sixth shadow wasn’t cast by any earthly being.        </p>
      </div>
    </div>
  )
}

export default Right
