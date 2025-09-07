"use client";

import React, { useState } from "react";
import { Menu, CircleX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../logo/logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="relative dark:bg-background-dark">
      <div className="container mx-auto flex gap-5 justify-between items-center relative z-10">
        <button
          className="md:hidden focus:outline-none z-20"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <CircleX
              strokeWidth={1.5}
              className="w-6 h-6 dark:text-primaryText-heading-dark text-primaryText-heading-light hover:text-primaryHover"
            />
          ) : (
            <Menu
              strokeWidth={1.5}
              className="w-6 h-6 dark:text-primaryText-heading-dark text-primaryText-heading-light hover:text-primaryHover"
            />
          )}
        </button>

        <Logo />

        {/* Desktop menu */}

        <ul className="hidden md:flex flex-row gap-6  text-primaryText-heading-light dark:text-primaryText-heading-dark">
          <li
            className="relative pb-1 cursor-pointer  
                 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[2px] 
                 before:bg-primaryHover before:transition-all before:duration-300 hover:before:w-full"
          >
            خانه
          </li>
          <li
            className="relative pb-1 cursor-pointer  
                 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[2px] 
                 before:bg-primaryHover before:transition-all before:duration-300 hover:before:w-full"
          >
            وبلاگ
          </li>
          <li
            className="relative pb-1 cursor-pointer  
                 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[2px] 
                 before:bg-primaryHover before:transition-all before:duration-300 hover:before:w-full"
          >
            ارتباط با ما
          </li>
        </ul>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[75px] left-0 w-full rounded-lg bg-background-default dark:bg-gray-900 flex flex-col gap-4 p-4 text-center md:hidden shadow-lg z-10"
          >
            <li className="cursor-pointer hover:text-primaryHover decoration-2 underline-offset-4">
              خانه
            </li>
            <li className="cursor-pointer hover:text-primaryHover decoration-2 underline-offset-4">
              وبلاگ
            </li>
            <li className="cursor-pointer hover:text-primaryHover decoration-2 underline-offset-4">
              ارتباط با ما
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
