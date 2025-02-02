import { useState } from 'react'

import './App.css'
import { questions } from './Data/QueAns'

function App() {
  const [showAns, setShowAns] = useState(questions[0].id)

  return (
    <div>
      <div className='faqOuter'>
        <h2>Frequently Asked Questions and Answers</h2>
        {questions.map((faqItems, i) => {
          return (
            <div className="faqInner">
              <h4 onClick={() => setShowAns(faqItems.id)}>{faqItems.questions}</h4>
              <p className={showAns == faqItems.id ? 'activeAns' : ''}>{faqItems.answers}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
