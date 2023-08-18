import React from 'react'
import { Footer, Navbar } from '../components';
import { Neptune, Jupiter } from '../sections';

const PCs = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
        <div className='relative'>
        <div className={`font-normal text-center text-secondary-white mt-20 flex-col flex flex-center`}>
          <span className="font-extrabold text-white sm:text-[40px] text-[32px]">GAMING PCS</span>
        </div>
            <Neptune />
            <Jupiter />
            <Footer />
        </div>
    </div>
  )
}

export default PCs