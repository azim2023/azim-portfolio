// src/components/Contact.jsx

import ContactCard from './ContactCard';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {

  const { t } = useLanguage();
  const contactMethods = t.contact?.contactMethods || [];
  const contactTitle = t.contact?.title;
  const contactSubtitle = t.contact?.subtitle;
  const qrTitle = t.contact?.qrTitle;

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center cursor-default">
      <h2 className="text-3xl font-bold mb-6">{contactTitle}</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        {contactSubtitle}
      </p>
      
      <div className="mt-20 text-center">
        <h3 className="text-lg font-semibold text-slate-700 mb-8">{qrTitle}</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-8 md:gap-16">
          {contactMethods.map((method) => (
            <ContactCard key={method.id} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
}