import React from 'react'
import { Footer } from '../components'
import Program from '../sections/Program'

const Creator = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-8 flex flex-col justify-center items-center mt-10`}>
    <div className='bg-primary-black overflow-hidden'>
      <div className='relative'>
        <Program />
        <Footer />
      </div>
    </div>
    </section>
  )
}

export default Creator