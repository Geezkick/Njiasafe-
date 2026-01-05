'use client'

import { useState } from 'react'

export default function ButtonTester() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="p-8 space-y-6 bg-gray-900 rounded-xl">
      <h2 className="text-2xl font-bold">Button Tester Component</h2>
      
      <div className="space-y-4">
        {/* Test 1: Basic button */}
        <div>
          <button
            onClick={() => {
              console.log('Basic button clicked')
              setCount(count + 1)
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Basic Button (Count: {count})
          </button>
          <p className="text-sm text-gray-400">Click and check console</p>
        </div>

        {/* Test 2: Button with preventDefault */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log('Button with preventDefault clicked')
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Button with preventDefault
          </button>
        </div>

        {/* Test 3: Form submit */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('Form submitted, input value:', inputValue)
          }}
          className="space-y-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              console.log('Input changed:', e.target.value)
              setInputValue(e.target.value)
            }}
            className="px-3 py-2 border rounded text-black"
            placeholder="Type here..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit Form
          </button>
        </form>

        {/* Test 4: Disabled button */}
        <div>
          <button
            disabled
            onClick={() => console.log('This should not fire')}
            className="px-4 py-2 bg-gray-500 text-white rounded cursor-not-allowed"
          >
            Disabled Button
          </button>
        </div>

        {/* Test 5: Your actual button styles */}
        <div>
          <button
            onClick={() => console.log('Premium button clicked')}
            className="btn-premium"
          >
            Premium Style Button
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <h3 className="font-bold">Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Browser DevTools (F12)</li>
          <li>Go to Console tab</li>
          <li>Click buttons above</li>
          <li>You should see log messages in console</li>
          <li>If no logs appear, there's a blocking issue</li>
        </ol>
      </div>
    </div>
  )
}
