import { skills } from '../data/skills'

function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s} className="px-3 py-1 bg-brand-light/30 rounded-full text-sm">{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-24 cursor-default">
      <h2 className="text-3xl font-bold mb-8">Färdigheter</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillGroup title="Programmeringsspråk" items={skills.languages} />
        <SkillGroup title="Webb" items={skills.web} />
        <SkillGroup title="Metoder" items={skills.methodologies} />
        <SkillGroup title="Verktyg" items={skills.tools} />
        <SkillGroup title="Övrigt" items={skills.other} />
      </div>
    </section>
  )
}
