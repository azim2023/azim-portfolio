// src/components/Skills.jsx

import { skills } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

function SkillGroup({ title, items }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-brand-glow hover:scale-110">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li
            key={s}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-300"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-[#f9fafb] py-24 px-4 cursor-default">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.skills.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillGroup title={t.skills.languages} items={skills.languages} />
          <SkillGroup title={t.skills.web} items={skills.web} />
          <SkillGroup title={t.skills.methodologies} items={skills.methodologies} />
          <SkillGroup title={t.skills.other} items={skills.other} />
        </div>
      </div>
    </section>
  );
}