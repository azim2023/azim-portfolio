// src/components/ContactCard.jsx

export default function ContactCard({ method }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 w-24">
      <img 
        src={method.qrImage} 
        alt={`QR-kod för ${method.label}`} 
        className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110" 
      />
      <div className="text-sm">
        <strong>{method.label}</strong><br/>
        <a 
          className={`underline hover:text-brand ${method.className || ''}`} 
          href={method.link}

          target={method.isExternal ? '_blank' : undefined}
          rel={method.isExternal ? 'noopener noreferrer' : undefined}
        >
          {method.linkText}
        </a>
      </div>
    </div>
  );
}