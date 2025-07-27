// src/components/ProjectCard.jsx

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center py-12 border-b border-slate-200 last:border-b-0">
      <div className="w-full md:flex-1 flex flex-col justify-between self-stretch">
        <div><h3 className="text-3xl lg:text-4xl font-bold text-slate-800 italic [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">{project.title}</h3></div>
        <div><p className="text-base lg:text-lg text-slate-600 my-6 leading-relaxed">{project.blurb}</p></div>
        <div>
          <ul className="flex flex-wrap gap-3 mb-6">{project.tech.map((t) => (<li key={t} className="px-3 py-1 bg-slate-100 text-slate-700 font-medium rounded-full text-sm">{t}</li>))}</ul>
          <div className="flex gap-6">
            {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-brand transition-colors duration-300"><FiGithub size={18} /><span>{t.projectCard.github}</span></a>)}
            {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-brand transition-colors duration-300"><FiExternalLink size={18} /><span>{t.projectCard.demo}</span></a>)}
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/5 md:flex-shrink-0">
        {project.images && project.images.length > 0 && (
          <div>
            
            {project.images.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={project.images.length > 2}
                slidesPerView={1}
                spaceBetween={0} 
                breakpoints={{

                  768: { slidesPerView: 2 }
                }}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index} className="p-14 sm:p-8 lg:p-6">
                    <img
                      src={image}
                      alt={`Projektbild ${index + 1} för ${project.title}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (

              <div className="p-1 sm:p-2 lg:p-3">
                <img
                  src={project.images[0]}
                  alt={`Projektbild för ${project.title}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            )}
            
            <style>{`
              .swiper-button-next, .swiper-button-prev { color: #ffffff; filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.5)); }
              .swiper-pagination-bullet-active { background-color: #ffffff !important; }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
}