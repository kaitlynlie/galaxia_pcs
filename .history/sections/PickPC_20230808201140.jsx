import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, PCcard, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { neptuneSet } from '../constants'

import React from 'react'

const PickPC = () => {
    const [active, setActive] = useState("SecondCar");
    const [colorBtn, setColorBtn] = useState("btn1");
  
    const btnID = (id) => {
      setColorBtn(colorBtn === id ? "" : id);
    };
  
    const coloringButton = (id) => {
      return colorBtn === id ? "colored-button" : "";
    };

  return (
    <section className={`${styles.xPaddings} ${styles.innerWidth}`}>
        <div className="flex flex-col">
            <div className="text-center text-white mb-4 font-bold">
                <h3>Our PCs</h3>
                <p>Choose from a variety of our amazing PCs for your next adventure</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("First");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("Second");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("Third");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("Fourth");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("Fifth");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("Sixth");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

            {active === "First" && <img src="/pc3.png" className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300" />}
            </div>
          </div>
      </section>
  )
}

export default PickPC