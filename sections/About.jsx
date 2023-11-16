'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from '../styles';
import { fadeIn,staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-04 z-0"></div>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    className={`${styles.innerWidth} mx-auto flex-col ${styles.flexCenter}`}
    viewport={
      {
        once:false,
        amount:0.30
      }
    }
    >
      
      <TypingText title="| ABOUT CTURISTA" textStyle="text-center"/>
      <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className="mt-[8px] font-normal sm:text-[35px] text-[15px] text-center text-secondary-white"
      >
          Our travel agency offers an array of services that bring remarkable advantages to our customers. We specialize in crafting customized travel experiences, ensuring each journey is uniquely tailored to individual preferences. What distinguishes us from other travel agency websites is our unwavering commitment to customer satisfaction. We prioritize transparency, providing competitive pricing without hidden fees. Our user-friendly platform simplifies the booking process and our travel experts offer round-the-clock support, guaranteeing a seamless experience. With a vast network of trusted partners, we provide access to exclusive deals and access to premier global destinations. Explore a world of opportunities with us, where unforgettable adventures commence.
      </motion.p>

      <motion.img
        variants={fadeIn('up','tween',0.3,1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[20px] h-[30px] object-contain mt-[26px]"
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
