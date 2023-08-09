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
            <div className="text-center text-white mb-4">
                <h3>Our PCs</h3>
            </div>
        </div>
    </section>
  )
}

export default PickPC