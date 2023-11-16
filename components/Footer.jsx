'use client';

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="sm:p-16 xs:p-8 px-6 py-12 relative"
  >
    <div className="footer-gradient" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Ali na, sa CTUrista!!!</h4>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
