// App.js
import { useState } from 'react';
import './App.css';
import { Tabs } from './Data';

function App() {
  const [activeTabs, setActiveTabs] = useState(0);
  const [activeContent, setActiveContent] = useState(Tabs[0]);

   let changeContent=(i)=>{
    // alert(i)
    setActiveTabs(i)
    setActiveContent(Tabs[i])
   }
  return (
    <div className='App'>
      <div className='outer'>
        <h1 style={{ textAlign: 'center' }}>
          Product From Amazon, Flipkart and Meesho
        </h1>
        <ul>
          {Tabs.map((v, i) => (
            <li key={i}> {/* Unique key for each list item */}
              <button onClick={()=>changeContent(i)} className={activeTabs==i? 'activeButton':''}>{v.title}</button>
            </li>
          ))}
        </ul>
        {
          activeContent !== undefined ?
            <p>{activeContent.description}</p> :
            ''
        }
      </div>
    </div>
  );
}

export default App;
