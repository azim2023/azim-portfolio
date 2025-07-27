// src/components/Navbar.jsx

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'en' : 'sv');
  };

  const flagUrl = language === 'sv' ? 'us-flag.svg' : 'sv-flag.svg';

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={() => handleNav('home')}
          className="font-bold text-brand text-lg"
        >
          Azim
        </button>
        
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6">
            {t.navItems.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => handleNav(n.id)}
                  className="hover:text-brand-dark transition-colors"
                >{n.label}</button>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleLanguage} 
            className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-slate-200 shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            style={{ backgroundImage: `url(${flagUrl})` }}
            aria-label={`Byt språk till ${language === 'sv' ? 'engelska' : 'svenska'}`}
          />
        </div>
        
        <button
          className="sm:hidden p-2 border rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >☰</button>
      </nav>
      {open && (
        <ul className="sm:hidden flex flex-col gap-2 px-4 pb-4">
          {t.navItems.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => handleNav(n.id)}
                className="w-full text-left text-lg py-2 border-b"
              >{n.label}</button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }} 
              className="w-full text-left text-lg py-2 font-semibold text-brand"
            >
              {language === 'sv' ? 'Change language to English' : 'Byt språket till Svenska'}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}