'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { slideIn,staggerContainer,textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`sm:pl-16 pl-6 ${styles.yPaddings}`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false,amount:0.30}}
    className={`mx-auto flex-col ${styles.innerWidth}`}
    >
      <div className={`${styles.flexCenter} flex-col relative z-10`}>
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          Embark your next adventure  
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className={`${styles.flexCenter} flex-row`}
        >
          <h1 className={`${styles.heroHeading}`}>with us</h1>
        </motion.div>
      </div>
      <motion.div
      variants={slideIn('right','tween',0.3,1)}
      className="relative w-full md:-mt-[30px] -mt-[15px]"
      >
        <img src="/cover.jpg" alt="<--ilisdi ni ninyo ang cover" className="w-full sm:h-[400px] h-[250px] object-cover rounded-tl-[140px] z-10 relative shadow-lg hover:shadow-2xl"/>
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img src="/stamp.png" alt="<--butngig gamay nga circled-image diri" 
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"/>
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
