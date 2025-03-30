import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showStatus, setShowStatus] = useState(false)

  return (
    <div className=' container-fluid bg-dark mt-5 d-flex justify-content-center align-content-center'>
     <input className='form-control w-25' type={showStatus?'text':'password'}/>
     <button className='btn btn-primary fw-bold' onClick={()=>setShowStatus(!showStatus)}>{showStatus?'Hide':'Show'}</button>
    </div>
  )
}

export default App
