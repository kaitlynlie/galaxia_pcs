import React from 'react'
import { Footer } from '../components'
import Program from '../sections/Program'

const Creator = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <div className='relative'>
        <div className={`font-normal text-center text-secondary-white mt-20 flex-col flex flex-center`}>
          <span className="font-extrabold text-white sm:text-[40px] text-[32px]">CREATOR PROGRAM</span>
        </div>
        <Program />
        <Footer />
      </div>
    </div>
  )
}

export default Creator