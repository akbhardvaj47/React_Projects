import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [uname, setUname] = useState(''); // Initial state should be an empty string for text input
  const [password, setPassword] = useState(''); // Initial state should be an empty string for text input
  const [userEmail, setUserEmail] = useState(''); // Initial state should be an empty string for text input

  // Handle username input change
  // let getName = (event) => { This code can be call at the place of onchange setUname
  //   setUname(event.target.value);  // Update the state with input value
  // };

  // Prevent form default submit behavior
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username saved:', uname,password,userEmail);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}> {/* Use onSubmit for form submission */}
              <div className="text-start my-3">
                <label htmlFor="userName" className="form-label">Username</label>
                <input
                  type="text"
                  value={uname} // Bind state to the input
                  onChange={(event)=>setUname(event.target.value)} // Handle input change
                  className="form-control w-100"
                  id="userName"
                />
              </div>
              <div className="text-start my-3">
                <label htmlFor="userPassword" className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event)=>setPassword(event.target.value)}
                  className="form-control w-100"
                  id="userPassword"
                />
              </div>
              <div className="text-start my-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(event)=>setUserEmail(event.target.value)}
                  className="form-control w-100"
                  id="userEmail"
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button> {/* Use type="submit" */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
