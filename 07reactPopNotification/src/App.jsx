import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify components


function App() {
  const [count, setCount] = useState(0)
    // Function to trigger notifications
    const blueMessage = () => {
      toast.info('Welcome to my World!'); // Info type notification
    };
    const successMessage = () => {
      toast.success('Welcome to my World!'); // Success type notification
    };
    const warningMessage = () => {
      toast.warning('Welcome to my World!'); // Warning type notification
    };
    const errorMessage = () => {
      toast.error('Welcome to my World!'); // Error type notification
    };
  return (
    <div className='d-flex flex-column gap-2'>
     {/* Render the Toast Container */}
     <ToastContainer />
      {/* Button that triggers the notification */}
      <button className="btn btn-primary" onClick={blueMessage}>
        Click to Show Notification
      </button>
      <button className="btn btn-success" onClick={successMessage}>
        Click to Show Notification
      </button>
      <button className="btn btn-warning" onClick={warningMessage}>
        Click to Show Notification
      </button>
      <button className="btn btn-danger" onClick={errorMessage}>
        Click to Show Notification
      </button>

       {/* Additional Content */}
       <div>
        <p className='fw-bold'>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </div>
  )
}

export default App
