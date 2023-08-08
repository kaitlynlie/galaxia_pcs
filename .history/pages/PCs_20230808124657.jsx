import React from 'react'
import { Footer, Navbar } from '../components';
import { Neptune, Jupiter } from '../sections';

const PCs = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
        <div className='relative'>
            <Jupiter />
            <Neptune />
        </div>
    </div>
  )
}

export default PCs