"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Common/Button";

const Navbar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <nav className="px-5 lg:px-10 xl:px-28 py-5 lg:py-8 bg-dimWhite dark:bg-dimBlack">
      <div className="2xl:container 2xl:mx-auto flex items-center justify-between gap-5">
        <motion.div
          ref={ref}
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link href="/" className="w-[150px]">
            <Image src="/logo.png" width={200} height={200} alt="Codix Logo" />
          </Link>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: -200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center gap-5 lg:gap-7 xl:gap-10 font-semibold"
        >
          <Link
            className="text-black dark:text-white dark:hover:text-logoBlue duration-300 hover:text-logoBlue"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-black dark:text-white dark:hover:text-logoBlue duration-300 hover:text-logoBlue"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-black dark:text-white dark:hover:text-logoBlue duration-300 hover:text-logoBlue"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-black dark:text-white dark:hover:text-logoBlue duration-300 hover:text-logoBlue"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-black dark:text-white dark:hover:text-logoBlue duration-300 hover:text-logoBlue"
            href="/blogs"
          >
            Blogs
          </Link>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link href='/contact'>
            <Button text="Free Consultation" />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
