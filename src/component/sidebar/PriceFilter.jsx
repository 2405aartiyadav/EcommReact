import React from 'react'

function PriceFilter() {
  return (
    <div className="mt-10 border rounded-lg p-4 bg-white shadow-lg">
    <h2 className="text-lg font-bold border-l-4 border-blue-500 pl-2 mb-4">
      Price Range
    </h2>
    <div className="flex justify-between items-center">
      <input
        type="range"
        min="200"
        max="100000"
        className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
      />
    </div>
    <div className="flex justify-between mt-4 text-gray-600">
      <span>$200</span>
      <span>$100000</span>
    </div>
  </div>
  )
}

export default PriceFilter
