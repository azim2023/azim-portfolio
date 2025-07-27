import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.projectData || [];

  const overlapRatio = 0.8;
  const topOffset = (1 - overlapRatio) * 100;

  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-slate-50">
      <h2 className="text-3xl font-bold mb-20 text-center">{t.projects.title}</h2>

      {projects.length === 0 ? (
        <p className="text-center">Projekt kommer snart! 🔧</p>
      ) : (
        <div className="relative">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className="relative"
              style={{
                height: '100vh',
                zIndex: index,
              }}
            >
              <div
                className="sticky transition-all duration-700"
                style={{
                  top: `${topOffset}vh`,
                }}
              >
                <ProjectCard project={p} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}