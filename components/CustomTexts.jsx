'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyle }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold text-[15px] text-secondary-white ${textStyle}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    className={`${textStyle} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
    initial="hidden"
    whileInView="show"
  >
    {title}
  </motion.h2>
);
