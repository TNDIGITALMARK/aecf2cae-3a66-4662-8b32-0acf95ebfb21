'use client'

import { useState } from 'react'

export default function ShibaMeme() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setIsClicked(true)
    setClickCount(prev => prev + 1)
    setTimeout(() => setIsClicked(false), 1000)
  }

  const getClickMessage = () => {
    if (clickCount === 0) return null
    const messages = [
      "WOOF! 🐕",
      "MUCH COLD! ❄️",
      "VERY BUILD! 🏗️",
      "SO EXPERT! 👷",
      "WOW IGLOO! 🏔️"
    ]
    return messages[Math.min(clickCount - 1, messages.length - 1)]
  }

  return (
    <div className="relative flex items-center justify-center">
      <div 
        className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${isClicked ? 'animate-pulse scale-110' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-blue-200">
          <img
            src="/currentImgContext/5dd5e9c559c0209f0611e583376c1e51.jpg"
            alt="Comrade Shiba - Winter Building Expert"
            className="w-full h-full object-cover"
          />
          
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4">
              <div className="text-center text-white font-bold">
                <div className="text-lg">COMRADE SHIBA</div>
                <div className="text-sm opacity-90">Winter Building Expert</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
          🏔️ Expert Builder 🏔️
        </div>
        
        {isHovered && !getClickMessage() && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg text-center animate-bounce">
            <div className="text-xs font-bold">В СОВЕТСКОЙ РОССИИ</div>
            <div className="text-xs">ИГЛУ СТРОИТ ТЕБЯ!</div>
          </div>
        )}
        
        {getClickMessage() && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg shadow-lg text-center animate-bounce font-bold">
            {getClickMessage()}
          </div>
        )}
      </div>
    </div>
  )
}