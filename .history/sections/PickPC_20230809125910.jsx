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
      return colorBtn === id ? { backgroundColor: '#323f5d', color: '#ffffff' } : "";
    };

  return (
    <section className={`${styles.xPaddings} flex justify-center items-center mt-20`}>
        <div className="flex flex-col bg-[#323f5d] p-10">
            <div className="text-center text-white mb-10 font-bold">
                <TypingText title='OUR PCS' textStyles='text-center' />
                <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Choose from a variety of our amazing PCs for your next adventure</span>
            </div>
            
            <div className="flex justify-between items-center gap-1">
                <div className="flex flex-col gap-2">
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

            {active === "First" && <img src="/pc3.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "First" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[18px]">$1,099.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$1,299.99 USD</p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Second" && <img src="/pc2.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Second" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$1,399.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$1,699.99 USD</p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Third" && <img src="/pc1.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Third" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$1,599.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$1,999.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Fourth" && <img src="/pc4.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Fourth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$2,499.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$2,699.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Fifth" && <img src="/pc5.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Fifth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$2,599.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$2,799.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
                    </div>

                    <Button />
                </div>
            </div>}

            {active === "Sixth" && <img src="/pc6.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Sixth" &&     
            <div className="flex items-center justify-center flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$2,799.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$2,999.99 USD</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/core.svg"
                        alt="core"
                        className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                    <img
                        src="/card.svg"
                        alt="card"
                        className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                        <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
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