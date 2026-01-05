'use client'

export default function TestFixPage() {
  const handleClick = (buttonName: string) => {
    alert(`${buttonName} clicked!`)
    console.log(`${buttonName} button worked`)
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Button Fix Test Page</h1>
      
      <div className="space-y-6 max-w-md mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4">Simple Buttons</h2>
          <button 
            onClick={() => handleClick('Simple')}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
          >
            Simple Button
          </button>
          
          <button 
            onClick={() => handleClick('Premium')}
            className="btn-premium"
          >
            Premium Style
          </button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Form Buttons</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleClick('Form Submit'); }}>
            <input 
              type="text" 
              placeholder="Test input" 
              className="border p-2 rounded mb-4 text-black"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit Form
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Disabled Test</h2>
          <button 
            disabled
            onClick={() => console.log('This should not fire')}
            className="px-4 py-2 bg-gray-500 text-white rounded mr-4"
          >
            Disabled Button
          </button>
          
          <button 
            onClick={() => handleClick('Enabled')}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            Enabled Button
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-gray-800 rounded">
          <h3 className="font-bold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open Browser Console (F12)</li>
            <li>Click buttons above</li>
            <li>You should see logs in console</li>
            <li>Alerts should appear for working buttons</li>
            <li>Disabled button should not trigger anything</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
