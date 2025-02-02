import { useState } from 'react';
import './App.css';
import { paragraphs } from './Para'; 

function App() {
  // Declare state variables using React's useState hook
  const [count, setCount] = useState('');  // To store the number input by the user
  let [generatedParagraphs, setGeneratedParagraphs] = useState([]);  // To store the paragraphs to be displayed

  // Function to generate paragraphs when the button is clicked
  let generate = () => {
    // If count is not a valid number or it's out of range, generate a random paragraph
    if (isNaN(count) || count > paragraphs.length || count <= 0) {
      let randomNumber = Math.floor(Math.random() * paragraphs.length); // Generate a random index for the paragraph array
      setCount(randomNumber); // Set the random number to 'count'
      setGeneratedParagraphs([paragraphs[randomNumber]]); // Set a random paragraph to be displayed
      setCount(''); // Reset the input field after generating
    } else {
      // Shuffle the paragraphs if a valid number is entered
      let newParagraphs = shuffle(paragraphs);  // Shuffle the paragraphs array
      let generatedPara = newParagraphs.slice(0, count);  // Get the first 'count' paragraphs
      // let generatedPara = paragraphs.slice(0, count);  // if shuffle function is not being uses
      setGeneratedParagraphs(generatedPara);  // Update the state with the selected paragraphs
      setCount('');  // Reset the input field after generating
    }
  };

  // Shuffle function to randomize the order of elements in the array
  function shuffle(array) {
    let currentIndex = array.length;

    // While there are elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a random index
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; // Reduce the remaining elements

      // Swap the current element with the random element
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array; // Return the shuffled array
  }

  return (
    <>
      <div className='input-box'>
        <input
          type="number"
          value={count}  // Set the input field's value to the 'count' state
          onChange={(event) => setCount(Number(event.target.value))}  // Update 'count' when user types
        />
        <button onClick={generate}>Generate</button>
      </div>

      <div className='para-box'>
        {/* Display the generated paragraphs */}
        {
          generatedParagraphs.map((v, i) => (
            // For each paragraph, create a <p> element and display it
            <p key={i}
            style={{fontSize:'25px'}}
            >{v}</p>
          ))
        }
      </div>
    </>
  );
}

export default App;
