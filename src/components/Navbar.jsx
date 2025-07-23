import { useState } from 'react'

const navItems = [
  { id: 'home', label: 'Hem' },
  { id: 'about', label: 'Om mig' },
  { id: 'skills', label: 'Färdigheter' },
  { id: 'projects', label: 'Projekt' },
  { id: 'contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={() => handleNav('home')}
          className="font-bold text-brand text-lg"
        >
          Azim
        </button>
        <button
          className="sm:hidden p-2 border rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >☰</button>
        <ul className="hidden sm:flex gap-6">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => handleNav(n.id)}
                className="hover:text-brand-dark transition-colors"
              >{n.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden flex flex-col gap-4 px-4 pb-4">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => handleNav(n.id)}
                className="w-full text-left text-lg py-2 border-b"
              >{n.label}</button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
