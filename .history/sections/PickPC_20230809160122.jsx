import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, PCcard, TitleText, Button } from '../components'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { neptuneSet } from '../constants'
import React from 'react'
import Pickcard from "../components/Pickcard";

const PickPC = () => {
    const [active, setActive] = useState("Second");
    const [colorBtn, setColorBtn] = useState("btn1");
  
    const btnID = (id) => {
      setColorBtn(colorBtn === id ? "" : id);
    };
  
    const coloringButton = (id) => {
      return colorBtn === id ? "bg-primary-blue text-white" : "";
    };

  return (
    <section className={`px-40 flex-1 justify-center items-center mt-20 mb-20`}>
        <div className="flex flex-col bg-[#323f5d] p-20">
            <div className="text-center text-white mb-20 font-bold">
                <TypingText title='OUR PCS' textStyles='text-center' />
                <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Choose from a variety of our amazing PCs <br className="max-[1267px]:hidden block"/> for your next adventure</span>
            </div>
            
            <div className="min-[1267px]:flex flex-none max-[1267px]:flex-col justify-between items-center gap-1">
              <div className="flex-col flex gap-2">
                <button
                  className={`${coloringButton("btn1")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  onClick={() => {
                    setActive("First");
                    btnID("btn1");
                  }}
                >
                  THALASSA
                </button>
                <button
                  className={`${coloringButton("btn2")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  id="btn2"
                  onClick={() => {
                    setActive("Second");
                    btnID("btn2");
                  }}
                >
                  NEREID
                </button>
                <button
                  className={`${coloringButton("btn3")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  id="btn3"
                  onClick={() => {
                    setActive("Third");
                    btnID("btn3");
                  }}
                >
                  TRITON
                </button>
                <button
                  className={`${coloringButton("btn4")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  id="btn4"
                  onClick={() => {
                    setActive("Fourth");
                    btnID("btn4");
                  }}
                >
                  EUROPA
                </button>
                <button
                  className={`${coloringButton("btn5")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  id="btn5"
                  onClick={() => {
                    setActive("Fifth");
                    btnID("btn5");
                  }}
                >
                  CALLISTO
                </button>
                <button
                  className={`${coloringButton("btn6")} text-2xl font-titles font-semibold border-none cursor-pointer px-6 py-4 bg-gray-300 transition-colors duration-200 text-left hover:bg-[#25618B] hover:text-white`}
                  id="btn6"
                  onClick={() => {
                    setActive("Sixth");
                    btnID("btn6");
                  }}
                >
                  GANYMEDE
                </button>
              </div>

            {active === "First" &&
            <div className="justify-center items-center flex">
            <img src="/pc3.png" className="max-[1267px]:mb-20 max-[1267px]:mt-20 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />
            </div>
            }

            {active === "First" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$1,099.99 USD</p>
                    <p className="text-white line-through text-[14px]">$1,299.99 USD</p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>
                    <Button />
                </div>
            </div>}

            {active === "Second" && 
            
            <div className="justify-center items-center flex"><img src="/pc2.png" className="max-[1267px]:mb-20 max-[1267px]:mt-20 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" /></div>}
            {active === "Second" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$1,399.99 USD</p>
                    <p className="text-white line-through text-[14px]">$1,699.99 USD</p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>
                    <Button />
                </div>
            </div>}

            {active === "Third" && <div className="justify-center items-center flex"><img src="/pc1.png" className="max-[1267px]:mb-20 max-[1267px]:mt-20 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" /></div>}
            {active === "Third" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$1,599.99 USD</p>
                    <p className="text-white line-through text-[14px]">$1,999.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Fourth" && <div className="justify-center items-center flex"><img src="/pc4.png" className="max-[1267px]:mb-10 max-[1267px]:mt-10 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" /></div>}
            {active === "Fourth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$2,499.99 USD</p>
                    <p className="text-white line-through text-[14px]">$2,699.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Fifth" && <div className="justify-center items-center flex"><img src="/pc5.png" className="max-[1267px]:mb-10 max-[1267px]:mt-10 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" /></div>}
            {active === "Fifth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$2,599.99 USD</p>
                    <p className="text-white line-through text-[14px]">$2,799.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Sixth" && <div className="justify-center items-center flex"><img src="/pc6.png" className="max-[1267px]:mb-10 max-[1267px]:mt-10 w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" /></div>}
            {active === "Sixth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-col items-center justify-between">
                    <p className="text-white text-[16px]">$2,799.99 USD</p>
                    <p className="text-white line-through text-[14px]">$2,999.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[16px] mt-[20px] text-white">Earth Core e2-1023</p>
                        <p className="text-[16px] mt-[20px] text-white">KForce MTX2390 Ti 12GB</p>
                        <p className="text-[16px] mt-[20px] text-white">RGB 32GB DDR5 CL38</p>
                        <p className="text-[16px] mt-[20px] text-white">NSI Z790 Wifi DDR5</p>
                    </div>
                    <Button />
                </div>
            </div>}
            </div>
          </div>
      </section>
  )
}

export default PickPC