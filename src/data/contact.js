// src/data/contact.js

export const contactInfo = {
  name: 'Azim Hoseini',
  email: 'hoaz22yr@student.ju.se',
  phone: '+46 72 914 5021',
  location: 'Jönköping, Sverige',
  linkedin: 'https://www.linkedin.com/in/azim-hoseini-2a7b8a225',
  cv: '/cv.pdf',
}


export const contactMethods = [
  {
    id: 'email',
    label: 'E-post',
    qrImage: 'https://azim2023.github.io/azim-portfolio/qr-mail.png',
    link: `mailto:${contactInfo.email}`,
    linkText: contactInfo.email,
  },
  {
    id: 'phone',
    label: 'Telefon',
    qrImage: 'https://azim2023.github.io/azim-portfolio/qr-phone.png',
    link: `tel:${contactInfo.phone}`,
    linkText: contactInfo.phone,
    className: 'whitespace-nowrap', 
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    qrImage: 'https://azim2023.github.io/azim-portfolio/qr-linkedin.png',
    link: contactInfo.linkedin,
    linkText: 'Besök profil',
    isExternal: true,
  }
];