import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Community from '../pages/Community'
import Creator from '../pages/Creator'
import PCs from '../pages/PCs'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import '../styles/globals.css'

function App() {

  return (
    <>
    <div className='bg-primary-black overflow-hidden'>
    <img
          src='./stars.png'
          alt='stars'
          className="z-0 absolute w-screen h-screen object-cover object-center opacity-50"
    />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="pc" element={<PCs />} />
        <Route path="community" element={<Community />} />
        <Route path="creator" element={<Creator />} />
      </Routes>
     </div>
    </>
  )
}

export default App