// src/components/Hero.jsx


import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
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
        style={{ backgroundImage: "url('/header.JPEG')", y: backgroundY }}
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
          Hej! Jag är Azim
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-slate-700 mb-8 bg-black/20 backdrop-blur-sm rounded-md text-white cursor-default"
          style={{opacity: textOpacity}}
        >
          Jag bygger användarvänliga och robusta lösningar för webb och mobil.
          Välkommen till min digitala portfolio.
        </motion.p>
        
        <motion.div className="flex flex-wrap justify-center gap-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ x: textXLeft, opacity: textOpacity }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3 rounded-2xl border border-white/30 bg-gradient-to-r from-brand via-brand/90 to-brand-dark text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Utforska mitt arbete
            </a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ x: textXRight, opacity: textOpacity }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-2xl border border-white/30 bg-gradient-to-r from-brand via-brand/90 to-brand-dark text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Kontakta mig
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}