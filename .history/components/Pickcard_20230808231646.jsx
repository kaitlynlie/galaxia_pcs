import React from 'react'
import Button from './Button'

const Pickcard = ( {title, price, xprice} ) => {
  return (
    <div>      
    <h3 className="font-semibold sm:text-[32px] text-[20px] text-white z-0 mt-[36px]">
        {title}
    </h3>
    <div className="flex flex-row items-center">
        <p className="text-white text-[20px]">{price}</p>
        <p className="text-white line-through text-[15px] ml-1">{xprice}</p>
    </div>
  <Button className='mt-[12px]'/></div>
  )
}

export default Pickcard