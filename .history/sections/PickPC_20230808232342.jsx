import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, PCcard, TitleText, Button } from '../components'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { neptuneSet } from '../constants'

import React from 'react'
import Pickcard from "../components/Pickcard";

const PickPC = () => {
    const [active, setActive] = useState("SecondCar");
    const [colorBtn, setColorBtn] = useState("btn1");
  
    const btnID = (id) => {
      setColorBtn(colorBtn === id ? "" : id);
    };
  
    const coloringButton = (id) => {
      return colorBtn === id ? { backgroundColor: '#ff0000', color: '#ffffff' } : "";
    };

  return (
    <section className={`${styles.xPaddings} ${styles.innerWidth}`}>
        <div className="flex flex-col">
            <div className="text-center text-white mb-4 font-bold">
                <h3>Our PCs</h3>
                <p>Choose from a variety of our amazing PCs for your next adventure</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center text-white">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("First");
                    btnID("btn1");
                  }}
                >
                  THALASSA
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("Second");
                    btnID("btn2");
                  }}
                >
                  NEREID
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("Third");
                    btnID("btn3");
                  }}
                >
                  TRITON
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("Fourth");
                    btnID("btn4");
                  }}
                >
                  EUROPA
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("Fifth");
                    btnID("btn5");
                  }}
                >
                  CALLISTO
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
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
            <div className="flex items-center justify-between flex-col">      
                <div className="flex flex-row items-center justify-between">
                    <p className="text-white text-[20px]">$1,099.99 USD</p>
                    <p className="text-white line-through text-[15px] ml-1">$1,299.99 USD</p>
                </div>
                <Button className='mt-[12px]'/>
            </div>}

            {active === "Second" && <img src="/pc2.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Third" && <img src="/pc1.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Fourth" && <img src="/pc4.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Fifth" && <img src="/pc5.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            {active === "Sixth" && <img src="/pc6.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}

            <div className="flex flex-col justify-between">
                <div className="flex flex-row">
\
                </div>
            </div>
            </div>
          </div>
      </section>
  )
}

export default PickPC