'use client'

import { useState } from 'react'

export default function IglooBuilder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStepComplete = (step: number) => {
    setCompletedSteps(prev =>
      prev.includes(step)
        ? prev.filter(s => s !== step)
        : [...prev, step]
    )
  }

  const steps = [
    {
      title: "Choose Your Location",
      description: "Find a flat area with packed snow at least 2 feet deep",
      details: [
        "Look for wind-packed snow for best building material",
        "Avoid areas near trees or structures that could drop snow",
        "Ensure you have enough space for a 10-12 foot diameter circle",
        "Test snow consistency - it should hold together when squeezed"
      ]
    },
    {
      title: "Create the Foundation Circle",
      description: "Mark and prepare your igloo base",
      details: [
        "Use a rope or string to mark a perfect circle (8-10 feet diameter)",
        "Pack down the snow inside the circle firmly",
        "Create a small entrance trench on one side",
        "The entrance should face away from prevailing winds"
      ]
    },
    {
      title: "Cut Snow Blocks",
      description: "Create uniform building blocks from quality snow",
      details: [
        "Cut blocks about 18 inches long, 12 inches wide, 6 inches thick",
        "Use a snow saw or large knife for clean cuts",
        "Test each block - it should support its own weight",
        "You'll need approximately 150-200 blocks total"
      ]
    },
    {
      title: "Build the First Row",
      description: "Lay the foundation spiral",
      details: [
        "Place blocks around your circle, leaving space for the entrance",
        "Angle each block slightly inward (about 15 degrees)",
        "Create a spiral by cutting the first row at an angle",
        "Each block should lean on the previous one for stability"
      ]
    },
    {
      title: "Continue the Spiral",
      description: "Build upward in a continuous spiral",
      details: [
        "Each new row should lean more inward than the last",
        "Maintain the spiral pattern - never create distinct rows",
        "Trim blocks to fit perfectly against neighbors",
        "The dome should curve inward more dramatically as you go up"
      ]
    },
    {
      title: "Install the Capstone",
      description: "Complete the dome with the final block",
      details: [
        "Save the largest, strongest block for last",
        "Cut it to fit the remaining hole precisely",
        "Lower it from inside the igloo",
        "This block locks the entire structure in place"
      ]
    },
    {
      title: "Finish the Interior",
      description: "Create a comfortable living space",
      details: [
        "Smooth interior walls with your hands or tools",
        "Dig sleeping platform higher than entrance (warm air rises)",
        "Create ventilation hole at top (small, about 2 inches)",
        "Add snow blocks as furniture: shelves, seats, etc."
      ]
    },
    {
      title: "Final Touches",
      description: "Weatherproof and customize your igloo",
      details: [
        "Fill any gaps between blocks with loose snow",
        "Light a small candle inside to glaze interior walls",
        "Create a door with a snow block or tarp",
        "Mark your igloo location for easy finding"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              🏔️ How to Build an Igloo
            </h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Master the ancient art of snow architecture with our comprehensive step-by-step guide
            </p>
          </div>
        </div>
      </header>

      {/* Progress Overview */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Progress</h2>
          <div className="flex flex-wrap gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all ${
                  completedSteps.includes(index + 1)
                    ? 'bg-green-500 text-white'
                    : currentStep === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => setCurrentStep(index + 1)}
              >
                {completedSteps.includes(index + 1) ? '✓' : index + 1}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            Completed: {completedSteps.length} of {steps.length} steps
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Steps List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Building Steps</h3>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentStep === index + 1
                        ? 'bg-blue-100 border-2 border-blue-300'
                        : completedSteps.includes(index + 1)
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    <div className="flex items-center">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        completedSteps.includes(index + 1)
                          ? 'bg-green-500 text-white'
                          : currentStep === index + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {completedSteps.includes(index + 1) ? '✓' : index + 1}
                      </span>
                      <span className="font-medium text-sm">{step.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Current Step Detail */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    Step {currentStep}: {steps[currentStep - 1].title}
                  </h2>
                  <p className="text-lg text-blue-700 mt-2">
                    {steps[currentStep - 1].description}
                  </p>
                </div>
                <button
                  onClick={() => toggleStepComplete(currentStep)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    completedSteps.includes(currentStep)
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {completedSteps.includes(currentStep) ? 'Completed ✓' : 'Mark Complete'}
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Detailed Instructions:</h3>
                <ul className="space-y-3">
                  {steps[currentStep - 1].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  disabled={currentStep === steps.length}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Pro Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-800">Safety First:</h4>
                  <p className="text-yellow-700">Always inform someone of your location and expected return time when building in remote areas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Best Conditions:</h4>
                  <p className="text-yellow-700">Build when temperature is between 0°F and 20°F (-18°C to -7°C) for optimal snow consistency.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Tool Essentials:</h4>
                  <p className="text-yellow-700">Bring a snow saw, shovel, and measuring tape for best results.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Time Required:</h4>
                  <p className="text-yellow-700">Plan for 4-6 hours for your first igloo, 2-3 hours once experienced.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">Happy building! Stay warm and safe out there. ❄️</p>
          <p className="text-sm opacity-75">Remember: practice makes perfect. Your first igloo might not be perfect, but each one will be better than the last!</p>
        </div>
      </footer>
    </div>
  )
}