// src/i18n/translations.js


export const translations = {
  sv: {
    navItems: [
      { id: 'home', label: 'Hem' },
      { id: 'about', label: 'Om mig' },
      { id: 'skills', label: 'Färdigheter' },
      { id: 'projects', label: 'Projekt' },
      { id: 'contact', label: 'Kontakt' },
    ],

    hero: {
      welcome: "Välkommen!",
      intro: "Välkommen till min digitala portfolio.",
      button1: "Utforska Mitt Arbete",
      button2: "Kontakta Mig",
      button3: "Ring Mig"
    },

    about: {
      title: "Bakgrund",
      subtitle: "Från de första raderna kod till komplexa applikationer. Här är några av höjdpunkterna.",
      timelineData: [
        { year: 2019, title: 'Gymnasiestudier påbörjas', description: 'Påbörjade teknikprogrammet med IT-inriktning vid Ållebergsgymnasiet i Falköping.' },
        { year: 2022, title: 'Universitetsstudier påbörjas', description: 'Tog examen från gymnasiet och påbörjade min resa mot en kandidatexamen i mjukvaruutveckling och mobila plattformar vid Jönköpings Universitet.' },
        { year: 2024, title: 'Arbetslivserfarenhet på Airmee', description: 'Arbetade deltid som orderplockare på Airmee, där jag hanterade beställningar effektivt och bidrog till att optimera lagerflödet.' },
        { year: 2025, title: 'Examen, praktik och sommarjobb på Husqvarna Group', description: 'Tog examen från Jönköping University och arbetade därefter som sommaranställd på Husqvarna Group. Genomförde även en sju veckor lång praktikperiod där jag utvecklade en intern mobilapplikation som används för registrering och hantering av produktrelaterade händelser.' },
        { year: 2026, title: 'Universitetsstudier, masternivå', description: 'Påbörjade min resa mot en masterexamen i Software Engineering and Management vid Göteborgs universitet.' },
      ],
    },

    skills: {
      title: "Färdigheter",
      languages: "Programmeringsspråk",
      web: "Webb",
      methodologies: "Metoder",
      other: "Övrigt",
    },

    projects: {
      title: "Mina Projekt",
      projectData: [
        {
          id: 'azim-app',
          title: 'AZIM app (Flutter)',
          blurb:
            'Intern Flutter-app för att registrera och spåra produktrelaterade händelser (scan + bilder) med spårbarhet. Entra ID SSO med RBAC samt TypeScript/MSSQL-backend som automatiserar SharePoint-dokumentation via Microsoft Graph, vilket ersatte manuell Excel-registrering av händelser.',
          tech: [
            'Flutter', 'Dart',
            'TypeScript', 'REST API',
            'Microsoft SQL Server',
            'Microsoft Entra ID', 'RBAC',
            'Azure App Registrations',
            'Microsoft Graph API', 'SharePoint'
          ],
          role: 'Full-stack Developer',
          github: '',
          images: [
            'https://azim2023.github.io/azim-portfolio/husq-login.png',
            'https://azim2023.github.io/azim-portfolio/husq-home.png',
            'https://azim2023.github.io/azim-portfolio/husq-report1.png',
            'https://azim2023.github.io/azim-portfolio/husq-report2.png',
            'https://azim2023.github.io/azim-portfolio/husq-management.png',
            'https://azim2023.github.io/azim-portfolio/husq-histories.png'
          ],
        },
        {
          id: 'bookstore-ios-app',
          title: 'BookStore app (iOS)',
          blurb: 'En iOS-app för att utforska och spara böcker från ett externt API, med användarhantering och favoriter kopplat till Firebase.',
          tech: ['Swift', 'SwiftUI', 'REST API', 'Firestore'],
          role: 'iOS-utvecklare (API & Firebase Integration)',
          github: 'https://github.com/azim2023/BookStore',
          images: ['https://azim2023.github.io/azim-portfolio/BookStore1.png', 'https://azim2023.github.io/azim-portfolio/BookStore2.png', 'https://azim2023.github.io/azim-portfolio/BookStore3.png', 'https://azim2023.github.io/azim-portfolio/BookStore4.png', 'https://azim2023.github.io/azim-portfolio/BookStore5.png'],
        },
        {
          id: 'ios-weather-app',
          title: 'Väderappen (iOS)',
          blurb: 'En minimalistisk och snabb väderapp för iOS som visar aktuell temperatur, utvecklad med Swift och SwiftUI.',
          tech: ['Swift', 'SwiftUI', 'REST API'],
          role: 'iOS-utvecklare (Design & Implementation)',
          github: 'https://github.com/azim2023/WeatherApp',
          images: ['https://azim2023.github.io/azim-portfolio/WeatherApp1.png', 'https://azim2023.github.io/azim-portfolio/WeatherApp2.png'],
        },
        {
          id: 'tic-tac-toe-android',
          title: 'Tic-Tac-Toe Spel (Android)',
          blurb: 'Ett klassiskt luffarschack (Tic-Tac-Toe) byggt som en native Android-app med Kotlin.',
          tech: ['Kotlin', 'Jetpack Compose'],
          role: 'Android-utvecklare (Studentprojekt)',
          github: 'https://github.com/azim2023/TicTacToe',
          images: ['https://azim2023.github.io/azim-portfolio/Tic-Toc-Toe1.png', 'https://azim2023.github.io/azim-portfolio/Tic-Toc-Toe2.png'],
        },
        {
          id: 'ios-todo-app',
          title: 'To Do list app (iOS)',
          blurb: 'En native iOS-app för att organisera uppgifter, byggd med Swift och SwiftUI.',
          tech: ['Swift', 'SwiftUI', 'MVVM'],
          role: 'iOS-utvecklare (Design & Implementation)',
          github: 'https://github.com/azim2023/ToDoList',
          images: ['https://azim2023.github.io/azim-portfolio/ToDoList1.png', 'https://azim2023.github.io/azim-portfolio/ToDoList2.png'],
        },
        {
          id: 'Loading...',
          title: 'More projects coming soon...',
          blurb: '',
          tech: [],
          role: '',
          github: '',
          images: [],
        },
      ],
    },

    contact: {
      title: "Kontakt",
      subtitle: "Vill du komma i kontakt med mig? Hör gärna av dig via kontaktuppgifterna nedan.",
      contactMethods: [
        { id: 'email', label: 'Email', value: 'goshoseaz@student.gu.se', link: 'mailto:goshoseaz@student.gu.se', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-mail.png' },
        { id: 'phone', label: 'Telefon', value: '+46 72 914 5021', link: 'tel:+46729145021', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-phone.png', className: 'whitespace-nowrap' },
        { id: 'linkedin', label: 'LinkedIn', value: 'Besök profil', link: 'https://www.linkedin.com/in/azim-hoseini-2a7b8a225', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-linkedin.png', isExternal: true }
      ]
    },

    projectCard: {
      github: "GitHub",
      demo: "Live Demo"
    },
    footer: {
      builtWith: ""
    },
  },

  en: {
    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Me' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],

    hero: {
      welcome: "Welcome!",
      intro: "Welcome to my digital portfolio.",
      button1: "Explore My Work",
      button2: "Contact Me",
      button3: "Call Me"
    },

    about: {
      title: "Background",
      subtitle: "From the first lines of code to complex applications. Here are some of the highlights.",
      timelineData: [
        { year: 2019, title: 'High School Begins', description: 'Started the Technology Program with an IT focus at Ållebergsgymnasiet in Falköping.' },
        { year: 2022, title: 'University Studies Begin', description: 'Graduated from high school and began my journey towards a Bachelor\'s degree in Software Engineering and Mobile Platforms at Jönköping University.' },
        { year: 2024, title: 'Work Experience at Airmee', description: 'Worked part-time as an order picker at Airmee, where I handled orders efficiently and contributed to optimizing warehouse flow.' },
        { year: 2025, title: 'Graduation, Internship & Summer Position at Husqvarna Group', description: 'Graduated from Jönköping University and continued as a summer employee at Husqvarna Group. Completed a seven-week internship where I developed an internal mobile application used for registering and managing product-related events.' },
        { year: 2026, title: "University Studies, M.Sc. level", description: "Started my journey towards a Master\'s degree in Software Engineering and Management at the University of Gothenburg" },
      ],
    },

    skills: {
      title: "Skills",
      languages: "Programming Languages",
      web: "Web",
      methodologies: "Methodologies",
      other: "Other",
    },

    projects: {
      title: "My Projects",
      projectData: [
        {
          id: 'azim-app',
          title: 'AZIM App (Flutter)',
          blurb:
            'Internal Flutter app for logging and tracking product-related events (scan + photos) with full traceability. Entra ID SSO with RBAC, plus a TypeScript/MSSQL backend that automates SharePoint documentation via Microsoft Graph, replacing manual Excel-based event logging.',
          tech: [
            'Flutter', 'Dart',
            'TypeScript', 'REST API',
            'Microsoft SQL Server',
            'Microsoft Entra ID', 'RBAC',
            'Azure App Registrations',
            'Microsoft Graph API', 'SharePoint'
          ],
          role: 'Full-stack Developer',
          github: '',
          images: [
            'https://azim2023.github.io/azim-portfolio/husq-login.png',
            'https://azim2023.github.io/azim-portfolio/husq-home.png',
            'https://azim2023.github.io/azim-portfolio/husq-report1.png',
            'https://azim2023.github.io/azim-portfolio/husq-report2.png',
            'https://azim2023.github.io/azim-portfolio/husq-management.png',
            'https://azim2023.github.io/azim-portfolio/husq-histories.png'
          ],
        },
        {
          id: 'bookstore-ios-app',
          title: 'BookStore app (iOS)',
          blurb: 'An iOS app to explore and save books from an external API, with user management and favorites linked to Firebase.',
          tech: ['Swift', 'SwiftUI', 'REST API', 'Firestore'],
          role: 'iOS Developer (API & Firebase Integration)',
          github: 'https://github.com/azim2023/BookStore',
          images: ['https://azim2023.github.io/azim-portfolio/BookStore1.png', 'https://azim2023.github.io/azim-portfolio/BookStore2.png', 'https://azim2023.github.io/azim-portfolio/BookStore3.png', 'https://azim2023.github.io/azim-portfolio/BookStore4.png', 'https://azim2023.github.io/azim-portfolio/BookStore5.png'],
        },
        {
          id: 'ios-weather-app',
          title: 'Weather App (iOS)',
          blurb: 'A minimalistic and fast weather app for iOS that displays the current temperature, developed with Swift and SwiftUI.',
          tech: ['Swift', 'SwiftUI', 'REST API'],
          role: 'iOS Developer (Design & Implementation)',
          github: 'https://github.com/azim2023/WeatherApp',
          images: ['https://azim2023.github.io/azim-portfolio/WeatherApp1.png', 'https://azim2023.github.io/azim-portfolio/WeatherApp2.png'],
        },
        {
          id: 'tic-tac-toe-android',
          title: 'Tic-Tac-Toe Game (Android)',
          blurb: 'A classic Tic-Tac-Toe game built as a native Android app with Kotlin.',
          tech: ['Kotlin', 'Jetpack Compose'],
          role: 'Android Developer (Student Project)',
          github: 'https://github.com/azim2023/TicTacToe',
          images: ['https://azim2023.github.io/azim-portfolio/Tic-Toc-Toe1.png', 'https://azim2023.github.io/azim-portfolio/Tic-Toc-Toe2.png'],
        },

        {
          id: 'ios-todo-app',
          title: 'To Do list app (iOS)',
          blurb: 'A native iOS app for organizing tasks, built with Swift and SwiftUI.',
          tech: ['Swift', 'SwiftUI', 'MVVM'],
          role: 'iOS Developer (Design & Implementation)',
          github: 'https://github.com/azim2023/ToDoList',
          images: ['https://azim2023.github.io/azim-portfolio/ToDoList1.png', 'https://azim2023.github.io/azim-portfolio/ToDoList2.png'],
        },
        {
          id: 'Loading...',
          title: 'More projects coming soon...',
          blurb: '',
          tech: [],
          role: '',
          github: '',
          images: [],
        },
      ],
    },

    contact: {
      title: "Contact",
      subtitle: "Want to get in touch? Feel free to reach out using the contact details below.",
      contactMethods: [
        { id: 'email', label: 'Email', value: 'goshoseaz@student.gu.se', link: 'mailto:goshoseaz@student.gu.se', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-mail.png' },
        { id: 'phone', label: 'Phone', value: '+46 72 914 5021', link: 'tel:+46729145021', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-phone.png', className: 'whitespace-nowrap' },
        { id: 'linkedin', label: 'LinkedIn', value: 'Visit Profile', link: 'https://www.linkedin.com/in/azim-hoseini-2a7b8a225', qrImage: 'https://azim2023.github.io/azim-portfolio/qr-linkedin.png', isExternal: true }
      ]
    },

    projectCard: {
      github: "GitHub",
      demo: "Live Demo"
    },
    footer: {
      builtWith: ""
    },
  }
};