import React from 'react'
import { TypingText } from '../components'
import styles from '../styles'

const Tiles = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>

      <div className='justify-between justify-center flex-row max-[1240px]:flex-col flex gap-20 mt-10'>

        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>Gaming PCs</p>
                <div className='flex-row flex mt-2'>
                 <img src='./people-01.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                    <div className='flex flex-col mb-10'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Nereid</p>
                    </div>
                </div>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Works great, fast, and quiet. Shipped super secure. No problems with it for streaming any game. Very glad with our selection and happy with purchase."</p>
                <div className='flex-row flex mt-2'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                    <div className='flex flex-col'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Triton</p>
                    </div>
                </div>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'></div>
        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'></div>
      </div>
    </div>
  </section>
  )
}

export default Tiles