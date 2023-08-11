import React from 'react'
import styles from '../styles'
import { TypingText } from '../components'

const Testimonials = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
        <TypingText title='REVIEWS' textStyles='text-center' />
        <div className="font-normal text-center text-secondary-white flex-col flex flex-center items-center justify-center">
            <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Testimonials by our Customers</span>
            <p className="text-[20px] text-white mt-6">Our customers have experienced our service and results, and they are eager to share their positive experience with you.</p>  
      </div>

      <div className='justify-between flex-row flex gap-10 mt-10'>
        <div className='bg-white shadow-lg w-[456px] h-[372px] shadow-white mx-10'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Works great, fast, and quiet. Shipped super secure. No problems with it for streaming any game. Very glad with our selection and happy with purpose."</p>
            <img src='./people-01.png' className='w-[50px] h-[50px] mx-10'/>
        </div>

        <div className='bg-white shadow-lg w-[456px] h-[372px] shadow-white'>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials