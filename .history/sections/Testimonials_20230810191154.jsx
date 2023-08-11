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

      <div className='justify-between flex-row flex mt-10'>
        <div className='bg-white shadow-lg max-w-[456px] max-h-[372px] shadow-[#25618B]'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Been using it for a few months now. PC looks great and runs every game I play very nicely. Customer service was top notch, had great communication all the way through."</p>
            <div className='flex-row flex mt-2'>
                <img src='./people-01.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                <div className='flex flex-col'>
                    <p className='mt-10 font-bold'>Valued Customer</p>
                    <p>Nereid</p>
                </div>
            </div>
        </div>

        <div className='bg-white shadow-lg max-w-[456px] max-h-[372px] shadow-[#25618B]'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Works great, fast, and quiet. Shipped super secure. No problems with it for streaming any game. Very glad with our selection and happy with purchase."</p>
                <div className='flex-row flex mt-2'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                    <div className='flex flex-col'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Triton</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials