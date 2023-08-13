import React from 'react'
import { TypingText } from '../components'
import styles from '../styles'

const Tiles = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center max-[1191px]:flex-none flex justify-center`}>
      <div className='justify-between justify-center flex gap-10 mt-10 flex-row max-[1191px]:flex-col max-[1539px]:gap-2 '>

        <div className='bg-white shadow-xl shadow-[#25618B] justify-between flex items-center pointer w-[100%] h-[160px]'>
            <p className='mb-20 text-black font-medium text-2xl ml-4'>Gaming PCs</p>
            <img src='./pc5.png' className='w-[100px] h-[100px] mr-4 mt-10'/>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex items-center justify-between pointer w-[100%] h-[160px]'>
            <p className='mb-20 text-black font-medium text-2xl ml-4'>Custom Parts</p>
            <img src='./cpu.png' className='w-[100px] h-[70px] mt-10'/>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex items-center justify-between pointer w-[100%] h-[160px]'>
            <p className='mb-20 text-black font-medium text-2xl ml-4'>Refurb PCs</p>
            <img src='./pc1.png' className='w-[100px] h-[100px] mr-4 mt-10'/>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex items-center justify-between pointer w-[100%] h-[160px]'>
        <p className='mb-20 text-black font-medium text-2xl ml-4'>Gaming Gear</p>
            <img src='./headphones.png' className='w-[100px] h-[100px] mr-8 mt-10'/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Tiles