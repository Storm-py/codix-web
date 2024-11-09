"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SmallHeading = ({ text }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="text-logoBlue font-semibold text-center md:text-left text-sm sm:text-base md:text-lg"
    >
      {text}
    </motion.div>
  );
};

export default SmallHeading;
