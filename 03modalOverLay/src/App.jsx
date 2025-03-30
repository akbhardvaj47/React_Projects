import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button className='btn btn-outline-primary en' onClick={() => setShowModal(!showModal)}>Enquiry Now</button>

      {/* Modal overlay that listens for clicks to close the modal */}
      <div
        className={`modalOverLay ${showModal ? 'sho-modal' : ''}`}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={`modalDiv bg-secondary fw-bold ${showModal ? 'show-modal' : ''}`}>
        <h2 className='text-center'>Enquiry Now <span className='btn bg-danger fs-5' onClick={() => setShowModal(false)}>&times;</span></h2>


        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
         
          <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          
          <div className="col-md-6">
            <label for="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default App
