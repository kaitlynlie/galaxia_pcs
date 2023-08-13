import React from 'react'
import { TypingText } from '../components'
import styles from '../styles'

const Tiles = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
      <div className='justify-between justify-center flex-row max-[1240px]:flex-col flex gap-20 mt-10'>

        <div className='bg-white shadow-xl shadow-[#25618B] justify-between flex items-center'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>Gaming PCs</p>
            <img src='./pc1.png' className='w-[50%] h-[50%]'/>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>Custom Parts</p>
                <div className='flex-row flex mt-2'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                </div>
        </div>

        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'>
        <p className='mt-10 text-black font-medium text-2xl mx-10'>Refurbished PCs</p>
                <div className='flex-row flex mt-2'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                </div>
        </div>
        <div className='bg-white shadow-xl shadow-[#25618B] flex-1'>
        <p className='mt-10 text-black font-medium text-2xl mx-10'>Gaming Gear</p>
                <div className='flex-row flex mt-2'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Tiles