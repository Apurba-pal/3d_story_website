import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const Left = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('https://as1.ftcdn.net/v2/jpg/09/60/49/20/1000_F_960492067_YavzJf6BfHwGWq8May1NPaRi13vekHTX.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center p-8">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 hover:bg-opacity-50 transition duration-300 flex"
      >
        <FiArrowLeft size={24} className="mr-2" />
        Go Back
      </button>
      <div className="text-center max-w-3xl bg-opacity-50 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-6 text-yellow-300">
          2. Sci-Fi 
          {/* (Number: 4, Position: 2) */}
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          The Polaris drifted silently through the void, its crew huddled around an alien artifact discovered on Vega IV. The artifact was covered in unknown symbols, some glowing faintly, others barely discernible. Lieutenant Jaro scanned the codes, narrowing his focus on a sequence that repeated the number four in a distinct pattern. "There it is again," he muttered. "Why is the number four so significant?" Captain Lin studied the artifact with increasing trepidation. "Look at the positioning," she said, pointing at the relic’s design. “This sequence is centered on the second marker. It's not just a number—it’s a beacon.” The discovery sent a chill through the crew: they were no longer exploring; they were being guided.
        </p>
      </div>
    </div>
  )
}

export default Left