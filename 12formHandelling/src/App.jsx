import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';

function App() {
  // State to handle form data
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    upassword: '',
    uphone: '',
    umessage: '',
    index: '',
  });

  // State to store submitted form data
  const [userData, setUserData] = useState([]);

  // Handle form field changes
  const getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  // Delete data function
  let deleteData = (indexNumber) => {
    let filterDataAfterDelete = userData.filter((v, i) => i !== indexNumber);
    setUserData(filterDataAfterDelete);
    toast.error('Data Deleted Successfully');
  };

  // Edit data function
  let editData = (indexNumber) => {
    let editDetails = userData[indexNumber]; // Get the data by index directly
    editDetails['index'] = indexNumber; // Set the index in formData for editing
    setFormData(editDetails); // Update the form with the data to be edited
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    let filterUserDetails = userData.filter(
      (v) => v.uemail === formData.uemail || v.uphone === formData.uphone
    );

    if (filterUserDetails.length > 0) {
      toast.error('Email or Phone Number Already Exists');
    } else {
      // If formData has index, it means we are updating
      if (formData.index === '') {
        // Add new user data if it's not an update
        setUserData([...userData, formData]);
        toast.success('Data Inserted Successfully');
      } else {
        // Update existing data
        let updatedData = [...userData];
        updatedData[formData.index] = formData;
        setUserData(updatedData);
        toast.success('Data Updated Successfully');
      }

      // Clear form fields after submission
      setFormData({
        uname: '',
        uemail: '',
        upassword: '',
        uphone: '',
        umessage: '',
        index: ''
      });
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label className="form-label" htmlFor="uname">Username</label>
                <input
                  className="form-control"
                  onChange={getValue}
                  type="text"
                  value={formData.uname}
                  name="uname"
                  id="uname"
                />
              </div>
              <div className="text-start my-3">
                <label className="form-label" htmlFor="uemail">Email</label>
                <input
                  className="form-control"
                  onChange={getValue}
                  value={formData.uemail}
                  type="email"
                  name="uemail"
                  id="uemail"
                />
              </div>
              <div className="text-start my-3">
                <label className="form-label" htmlFor="upassword">Password</label>
                <input
                  className="form-control"
                  onChange={getValue}
                  type="password"
                  value={formData.upassword}
                  name="upassword"
                  id="upassword"
                />
              </div>
              <div className="text-start my-3">
                <label className="form-label" htmlFor="uphone">Phone</label>
                <input
                  className="form-control"
                  onChange={getValue}
                  value={formData.uphone}
                  type="text"
                  name="uphone"
                  id="uphone"
                />
              </div>
              <div className="text-start my-3">
                <label className="form-label" htmlFor="umessage">Message</label>
                <textarea
                  className="form-control"
                  onChange={getValue}
                  value={formData.umessage}
                  name="umessage"
                  id="umessage"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {formData.index === '' ? 'Save' : 'Update'}
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            <h4>Submitted Data</h4>
            <table className="table Text-center">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>uname</th>
                  <th>uemail</th>
                  <th>upassword</th>
                  <th>uphone</th>
                  <th>umessage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 ? (
                  userData.map((data, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>{data.uname}</th>
                      <td>{data.uemail}</td>
                      <td>{data.upassword}</td>
                      <td>{data.uphone}</td>
                      <td>{data.umessage}</td>
                      <td>
                        <button className="btn btn-warning" onClick={() => editData(i)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteData(i)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>No data submitted yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
