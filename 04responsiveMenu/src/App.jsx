import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='fw-bold text-center w-100 h-100'>
      <button className={`tog btn ${showMenu?'btn-danger':'btn-primary'}`} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${showMenu?'show':''}`}>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default App
