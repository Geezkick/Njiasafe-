'use client'

export default function TestButtonsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Button Test Page</h1>
      
      <div className="space-y-4">
        <button 
          onClick={() => alert('Button 1 clicked!')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Simple Button
        </button>
        
        <button 
          onClick={() => console.log('Button 2 clicked')}
          className="btn-premium"
        >
          Premium Button
        </button>
        
        <button 
          type="button"
          onClick={() => alert('Type button clicked')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Type Button
        </button>
        
        <button 
          type="submit"
          onClick={() => alert('Submit button clicked')}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Submit Button
        </button>
      </div>
    </div>
  )
}
