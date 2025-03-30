import { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [passLength, setPassLength] = useState(10); // Default to 10 characters
  const [password, setPassword] = useState('');
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LC = 'abcdefghijklmnopqrstuvwxyz';
  const NC = '1234567890';
  const SC = '~!@#$%^&*()';

  const generatePassword = () => {
    let characters = '';
    if(uppercase||lowercase||number||symbol){
    if (uppercase) characters += UC;
    if (lowercase) characters += LC;
    if (number) characters += NC;
    if (symbol) characters += SC;
    }
    else{
      toast.error('Please select at least one character type');
    }

    let generatedPassword = '';
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      //It will be generate random index from the given length
      // alert(randomIndex)
      generatedPassword += characters[randomIndex];
      //It will store the index value from characters
    }
    setPassword(generatedPassword);
    toast.success('Password Generated Successfully')
  };

  return (
    <div className="App">
    <ToastContainer/>
      <div className="inner">
        <h2>Password Generator</h2>
        <div className='main-input'>
          <input type="text" readOnly value={password} />
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        </div>
        <div>
          <label>Password Length</label>
          <input 
            type="number" 
            min={10} 
            max={20} 
            value={passLength} 
            onChange={(e) => setPassLength(Number(e.target.value))} 
          />
        </div>
        <div>
          <label>UpperCase</label>
          <input 
            type="checkbox" 
            checked={uppercase} 
            onChange={() => setUppercase(!uppercase)} 
          />
        </div>
        <div>
          <label>LowerCase</label>
          <input 
            type="checkbox" 
            checked={lowercase} 
            onChange={() => setLowercase(!lowercase)} 
          />
        </div>
        <div>
          <label>Number</label>
          <input 
            type="checkbox" 
            checked={number} 
            onChange={() => setNumber(!number)} 
          />
        </div>
        <div>
          <label>Symbol</label>
          <input 
            type="checkbox" 
            checked={symbol} 
            onChange={() => setSymbol(!symbol)} 
          />
        </div>
        <div>
          <button className='btn' onClick={generatePassword}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
