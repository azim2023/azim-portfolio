// src/components/Contact.jsx

import { contactMethods } from '../data/contact';
import ContactCard from './ContactCard';

export default function Contact() {
  return (

    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center cursor-default">
      <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Vill du komma i kontakt med mig? Hör gärna av dig via kontaktuppgifterna nedan.
      </p>
      

      <div className="mt-20 text-center">

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-8 md:gap-16">
          {contactMethods.map((method) => (
            <ContactCard key={method.id} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
}