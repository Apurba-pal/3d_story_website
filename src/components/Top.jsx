import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const Top = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://i.pinimg.com/736x/59/8c/46/598c46a447c16b13b41a757251e0fc16.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex"
      >
        <FiArrowLeft size={24} className='mr-2' />
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-50 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-400">
          5. Thriller 
          {/* (Number: 5, Position: 5) */}
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          The room was cold, its atmosphere thick with secrets as Iris Cole stood in front of the evidence board. Detective Langley had been investigating the Caldwell murder for weeks, piecing together a complex web of suspects and motives. The only thing they hadn’t figured out was the strange pattern of numbers in the victim’s personal diary. May 5th was underlined repeatedly, each entry cryptic and seemingly out of place. Iris felt a chill as she realized the number wasn’t just a date—it was a key. Langley’s voice broke through her thoughts: “The fifth page of the journal holds something we missed. We need to decode it.” It was time to dig deeper into Caldwell’s life.
        </p>
      </div>
    </div>
  )
}

export default Top
