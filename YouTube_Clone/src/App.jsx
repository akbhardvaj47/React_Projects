import { useState } from 'react'
import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'
import Video from './Components/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Video/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:seacrhQuerry' element={<Search />} />
        <Route path='/video/:id' element={<PlayingVideo />} />
      </Routes>
    </>
  )
}

export default App
