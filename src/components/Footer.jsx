// src/components/Footer.jsx
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Azim Hoseini. {t.footer.builtWith}
    </footer>
  )
}