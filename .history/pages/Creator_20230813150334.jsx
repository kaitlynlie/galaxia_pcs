import React from 'react'
import { Footer } from '../components'
import Program from '../sections/Program'

const Creator = () => {
  return (
    <div className='bg-primary-black overflow-hidden z-1'>
      <div className='relative'>
        <Program />
        <Footer />
      </div>
    </div>
  )
}

export default Creator