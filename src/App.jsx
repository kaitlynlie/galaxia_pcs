import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Community from '../pages/Community'
import Creator from '../pages/Creator'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import '../styles/globals.css'

function App() {

  return (
    <>
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="creator" element={<Creator />} />
      </Routes>
     </div>
    </>
  )
}

export default App