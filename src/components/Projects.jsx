// src/components/Projects.jsx

import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Mina Projekt</h2>

      {projects.length === 0 ? (
        <p className="text-center">Projekt kommer snart! 🔧</p>
      ) : (
        <div className="flex flex-col gap-16 cursor-default">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}