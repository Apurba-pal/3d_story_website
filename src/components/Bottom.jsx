import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const Bottom = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://thumbs.dreamstime.com/b/ancient-temple-forest-night-overgrown-ruins-old-building-surreal-mystical-fantasy-artwork-generative-ai-ancient-temple-281583252.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex"
      >
        <FiArrowLeft size={24} className='mr-2' />
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-60 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-300">
          4. Fantasy 
          {/* (Number: 6, Position: 4) */}
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
          Alaric stood before the towering gates of the Oracle’s temple, the final barrier before he would learn the truth of his heritage. The temple was guarded by six trials, each representing a different element of his destiny. The fourth trial awaited him—an arena of shifting illusions, where reality bent and twisted like smoke. He was told that only the sixth breath would grant him passage. Alaric closed his eyes and focused on his breath, sensing the invisible barrier that separated him from his future. When he finally exhaled, the illusions shattered, revealing a hidden passage leading to the Oracle’s chamber. He had passed the sixth trial—his destiny was unfolding, but he knew the hardest was yet to come.
        </p>
      </div>
    </div>
  )
}

export default Bottom
