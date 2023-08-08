import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Community from '../pages/Community'
import Creator from '../pages/Creator'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="creator" element={<Creator />} />
      </Routes>
    </>
  )
}

export default App
