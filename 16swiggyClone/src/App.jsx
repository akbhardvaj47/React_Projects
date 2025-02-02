import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import Header from './Cmponents/Header'
import Category from './Cmponents/Category'
import TopRes from './Cmponents/TopRes'
import OnlineDelivery from './Cmponents/OnlineDelivery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Category/>
      <TopRes/>
      <OnlineDelivery/>
    </>
  )
}

export default App
