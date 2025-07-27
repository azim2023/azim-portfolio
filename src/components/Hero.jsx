// src/components/Hero.jsx

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []); 

  const horizontalMoveDistance = isMobile ? 100 : 500;

  const backgroundY = useTransform(scrollY, [0, 500], [0, 250]);
  const textY = useTransform(scrollY, [0, 500], [0, -200]);
  const textXLeft = useTransform(scrollY, [0, 500], [0, -horizontalMoveDistance]);
  const textXRight = useTransform(scrollY, [0, 500], [0, horizontalMoveDistance]);
  const textOpacity = useTransform(scrollY, [0, 100, 500], [1, 1, 0]);
  const backdropBlur = useTransform(scrollY, [0, 300], ['blur(0px)', 'blur(4px)']);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://azim2023.github.io/azim-portfolio/header.JPEG')", y: backgroundY }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-white/5 z-10"
        style={{ backdropFilter: backdropBlur }}
      />

      <motion.div 
        className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold mb-4 text-slate-800 text-white text-opacity-80 cursor-default"
          style={{ y: textY, opacity: textOpacity }}
        >
          {t.hero.welcome}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-slate-700 mb-8 bg-black/20 backdrop-blur-sm rounded-md text-white cursor-default"
          style={{opacity: textOpacity}}
        >
          {t.hero.intro}
        </motion.p>
          
        <motion.div className="flex flex-wrap justify-center gap-4">

          <motion.a
            href="#projects"
            className="inline-flex items-center px-7 py-3 rounded-2xl border border-blue-300/30 bg-blue-500/30 backdrop-blur-md text-white font-medium shadow-md"
            style={{ x: textXLeft, opacity: textOpacity }}
            

            initial={{ opacity: 0, y: 20 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }
            }}

            whileHover={{
              y: -2,
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 10 }
            }}
          >
            {t.hero.button1}
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-2xl border border-blue-300/30 bg-blue-500/30 backdrop-blur-md text-white font-medium shadow-md"
            style={{ x: textXRight, opacity: textOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              }
            }}
            whileHover={{
              y: -2,
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 10 }
            }}
          >
            {t.hero.button2}
          </motion.a>
          
        </motion.div>

        <motion.a
            href= 'tel:+46729145021'
            className="fixed z-10 bottom-8 left-4 md:left-8 flex items-center justify-center
                   w-24 h-24 md:w-18 md:h-18 
                   rounded-full border border-white/30 bg-green-500/50 backdrop-blur-md 
                   text-white font-bold text-sm md:text-base shadow-lg
                   transform -translate-y-1/2" 
            style={{opacity: textOpacity }}
            

            initial={{ opacity: 0, y: 20 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }
            }}

            whileHover={{
              y: -2,
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 10 }
            }}
          >
            {t.hero.button3}
          </motion.a>
          
      </motion.div>
    </section>
  )
}