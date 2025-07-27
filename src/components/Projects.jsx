// src/components/Projects.jsx

import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.projectData || [];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const overlapRatio = 0.8;
  const topOffset = (1 - overlapRatio) * 100;

  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-50 cursor-default">
      <h2 className="text-3xl font-bold mb-12 sm:mb-20 text-center">{t.projects.title}</h2>

      {projects.length === 0 ? (
        <p className="text-center">Projekt kommer snart! 🔧</p>
      ) : (
        <div>
          {isMobile ? (
            <div className="flex flex-col gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="relative">
              {projects.map((p, index) => (
                <div
                  key={p.id}
                  className="relative"
                  style={{
                    height: '80vh',
                    zIndex: index,
                  }}
                >
                  <div
                    className="sticky transition-all duration-700"
                    style={{
                      top: '24vh',
                    }}
                  >
                    <ProjectCard project={p} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}