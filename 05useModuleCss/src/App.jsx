import { useState } from 'react'
import buttonModule from './button.module.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-50 rounded-3 p-2 h-50 mt-5 bg-secondary gap-2 justify-content-center d-flex m-auto'>
      <button className={`px-4 py-2 border-0 rounded-2 ${buttonModule.error}`}>Error Message</button>
      <button className={`px-4 py-2 border-0 rounded-2 ${buttonModule.warning}`}>Warning Message</button>
      <button className={`px-4 py-2 border-0 rounded-2 ${buttonModule.success}`}>Right Message</button>
      <button className={`px-4 py-2 border-0 rounded-2 ${buttonModule.primary}`}>Blue Message</button>
    </div>
  )
}

export default App
