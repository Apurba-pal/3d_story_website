import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const Back = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20241021/pngtree-fantasy-moonlit-garden-with-lush-green-grass-and-magical-landscape-image_16436547.jpg')] bg-center bg-no-repeat bg-cover text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex "
      >
        <FiArrowLeft size={24} className='mr-2' />
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-60 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-300">
          3. Romance 
          {/* (Number: 2, Position: 3) */}
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
          Clara’s fingers trembled as she opened the weathered envelope. Her breath caught when she saw the familiar handwriting of Ethan. It had been two years since they’d last spoken—an argument that had left them both shattered. But the letter was filled with a quiet hope. “Meet me at the bridge at midnight,” it read, “under the stars we once counted together.” With a nervous smile, Clara set out, her heart a tangle of conflicting emotions. At the bridge, she found a small wooden box waiting for her, with a note inside: “The third star shines brightest tonight. Wait for me there.” As she gazed upward, she realized she had never stopped loving him.
        </p>
      </div>
    </div>
  )
}

export default Back
