// src/components/About.jsx

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import TimelineIcon from './TimelineIcon';
import { timelineData } from '../data/timeline';

const ROW_HEIGHT_PX = 80;

export default function About() {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const contentWrapperRef = useRef(null);
  const scrollTimeout = useRef(null);


  const yearNavRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const { scrollY } = useScroll();


  useMotionValueEvent(scrollY, "change", (latest) => {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
        const sections = contentWrapperRef.current.children;
        let currentYear = timelineData[0].year;
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section.getBoundingClientRect().top < window.innerHeight / 2) {
                currentYear = timelineData[i].year;
            }
        }
        if (currentYear !== activeYear) {
            setActiveYear(currentYear);
        }
    }, 100);
  });

  const activeIndex = timelineData.findIndex(item => item.year === activeYear);

  // Effekt för att uppdatera den horisontella indikatorns position
  useEffect(() => {
    const activeNavElement = yearNavRefs.current[activeIndex];
    if (activeNavElement) {
      setIndicatorStyle({
        left: activeNavElement.offsetLeft,
        width: activeNavElement.offsetWidth,
      });
    }
  }, [activeIndex]);

  const handleYearClick = (year) => {
    setActiveYear(year);
    document.getElementById(`year-${year}`).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (

    <section id="about" className="max-w-3xl mx-auto px-4 py-24 cursor-default scroll-mt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Min Resa</h2>
        <p className="mb-4 text-center">Från de första raderna kod till komplexa applikationer. Här är några av höjdpunkterna.</p>
      </div>

      <nav className="sticky top-16 z-30 mb-8 md:hidden bg-slate-100/80 backdrop-blur-md rounded-lg shadow-sm">
        <div className="relative flex justify-center items-center gap-4 sm:gap-8 py-3">
          {timelineData.map((item, index) => (
            <a
              key={item.year}
              ref={el => yearNavRefs.current[index] = el}
              href={`#year-${item.year}`}
              onClick={(e) => { e.preventDefault(); handleYearClick(item.year); }}
              className={`font-semibold transition-colors ${activeYear === item.year ? 'text-brand' : 'text-gray-600'}`}
            >
              {item.year}
            </a>
          ))}

          <motion.div
            className="absolute bottom-0 h-0.5 bg-brand"
            animate={indicatorStyle}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        </div>
      </nav>


      <div className="flex gap-12">

        <div className="hidden md:block sticky top-24 h-fit z-10">
          <motion.div className="absolute w-0.5 h-20 bg-brand rounded-full z-20" style={{ height: `${ROW_HEIGHT_PX}px` }} animate={{ y: activeIndex * ROW_HEIGHT_PX }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
          <div>
            {timelineData.map((item, index) => (
              <a
                key={item.year}
                href={`#year-${item.year}`}
                onClick={(e) => { e.preventDefault(); handleYearClick(item.year); }}
                className={`flex items-center gap-4 h-20 transition-colors ${activeYear === item.year ? 'text-brand' : 'text-gray-400 hover:text-gray-600'}`}
                style={{ height: `${ROW_HEIGHT_PX}px` }}
              >
                <TimelineIcon index={index} className="w-12 h-12" />
                <span className="font-bold text-lg">{item.year}</span>
              </a>
            ))}
          </div>
        </div>

        <div ref={contentWrapperRef} className="flex-1 min-w-0"> 
          {timelineData.map((item) => (
            <div
              key={item.year}
              id={`year-${item.year}`}
              className={`min-h-[250px] scroll-mt-24 md:scroll-mt-32 mb-8 last:mb-0 rounded-xl p-6 transition-all duration-300 ease-in-out ${activeYear === item.year ? 'bg-white scale-100 md:scale-[1.02] shadow-brand-glow' : 'bg-white border border-gray-200 shadow-sm'}`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}