
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const translations = {
  es: {
    'hero.title': 'Javier González',
    'hero.subtitle': 'Desarrollador web',
    'hero.description': 'Creando experiencias digitales increíbles',
    'hero.cta': 'Descubre mi trabajo',
    'about.title': 'Sobre Mí',
    'about.greeting': 'Hola, mi nombre es Javier González.',
    'about.description1': 'Desarrollador web apasionado por crear soluciones innovadoras, con más de un año de experiencia en el desarrollo de aplicaciones web modernas, funcionales y escalables. Me especializo en',
    'about.description2': 'Mi objetivo es desarrollar soluciones digitales robustas y eficientes que garanticen un rendimiento óptimo, alta escalabilidad y una experiencia de usuario fluida.',
    'about.cleanCode': 'Clean Code',
    'about.uiPassionate': 'Scalable Systems Builder',
    'about.downloadCV': 'Descargar CV',
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Las tecnologías que domino para crear experiencias increíbles',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más destacados',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.bartoyou.title': 'BarToYou Web App',
    'projects.bartoyou.description': 'Desarrollo de una aplicación web que agiliza y organiza los pedidos en bares de hoteles todo incluido, mejorando la eficiencia operativa y la experiencia del huésped.',
    'projects.bartoyouapi.title': 'BarToYou Web API',
    'projects.bartoyouapi.description': 'API REST completa para la gestión de pedidos en bares, incluyendo autenticación, gestión de usuarios y procesamiento de pedidos en tiempo real.',
    'projects.byca.title': 'Portfolio',
    'projects.byca.description': 'Portfolio personal donde muestro mis proyectos y experiencias',
    'projects.gym.title': 'GYM Apirest',
    'projects.gym.description': 'Desarrollo de una API REST completa para la gestión integral de gimnasios, incluyendo módulos para tablas de entrenamiento, rutinas, planes nutricionales y gestión de usuarios.',
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria en el desarrollo de software',
    'experience.jobTitle': 'Desarrollador Full Stack - Prácticas',
    'experience.company': 'Empresa en Irlanda, Dublin.',
    'experience.location': 'Dublín, Irlanda',
    'experience.period': '2025 - 3 Meses',
    'experience.description': 'Desarrollo de una aplicación de seguridad para almacenar información confidencial de la compañía. Diseñé una base de datos relacional y escalable a futuro. Acto seguido, desarrollé una API REST en Laravel con middleware propio y autenticación vía token. Por último, desarrollé el frontend con React, creando una interfaz intuitiva, optimizada y atractiva.',
    'experience.responsibilities': 'Responsabilidades',
    'experience.achievements': 'Logros',
    'experience.technologies': 'Tecnologías utilizadas',
    'experience.resp1': '• Desarrollo backend con Laravel',
    'experience.resp2': '• Desarrollo frontend con react',
    'experience.resp3': '• Gestión de bases de datos',
    'experience.ach1': '• Fortalecimiento de la seguridad de la información.',
    'experience.ach2': '• Optimización del rendimiento',
    'experience.ach3': '• Trabajo en equipo internacional',
    'contact.title': 'Contacto',
    'contact.subtitle': '¡Hagamos realidad tu próximo proyecto!',
    'contact.description': '¿Tienes una idea increíble? ¡Estoy aquí para ayudarte a convertirla en realidad! Trabajemos juntos para crear algo',
    'contact.extraordinary': 'extraordinario',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.gc': 'Gran Canaria, España',
    'contact.cta': '¡Hablemos de tu proyecto!',
    'contact.findMe': 'También puedes encontrarme en:',
    'contact.available': 'Disponible para proyectos',
    'contact.footer': '© 2025 javii. Creado con love y mucho código.'
  },
  en: {
    'hero.title': 'Javier González',
    'hero.subtitle': 'Web Developer',
    'hero.description': 'Creating incredible digital experiences',
    'hero.cta': 'Discover my work',
    'about.title': 'About Me',
    'about.greeting': 'Hi, my name is Javier González.',
    'about.description1': 'I\'m a web developer passionate about building innovative solutions, with over a year of experience developing modern, functional, and scalable web applications. I specialize in',
    'about.description2': 'My goal is to develop robust and efficient digital solutions that ensure optimal performance, high scalability, and a smooth user experience.',
    'about.cleanCode': 'Clean Code',
    'about.uiPassionate': 'Scalable Systems Builder',
    'about.downloadCV': 'Download CV',
    'skills.title': 'Skills',
    'skills.subtitle': 'The technologies I master to create incredible experiences',
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my most outstanding work',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.bartoyou.title': 'BarToYou Web App',
    'projects.bartoyou.description': 'Development of a web application that streamlines and organizes orders in all-inclusive hotel bars, improving operational efficiency and guest experience.',
    'projects.bartoyouapi.title': 'BarToYou Web API',
    'projects.bartoyouapi.description': 'Complete REST API for bar order management, including authentication, user management and real-time order processing.',
    'projects.byca.title': 'Portfolio',
    'projects.byca.description': 'Personal portfolio where I show my projects and experiences',
    'projects.gym.title': 'GYM Apirest',
    'projects.gym.description': 'Development of a complete REST API for comprehensive gym management, including modules for workout tables, routines, nutrition plans and user management.',
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey in software development',
    'experience.jobTitle': 'Full Stack Developer - Internship',
    'experience.company': 'Company in Ireland',
    'experience.location': 'Dublin, Ireland',
    'experience.period': '2025 - 3 Months',
    'experience.description': 'Development of a security application to store the company\'s confidential information. I designed a relational and scalable database for future growth. Then, I developed a REST API in Laravel with custom middleware and token-based authentication. Finally, I built the frontend using React, creating an intuitive, optimized, and attractive interface.',
    'experience.responsibilities': 'Responsibilities',
    'experience.achievements': 'Achievements',
    'experience.technologies': 'Technologies used',
    'experience.resp1': '• Backend development with Laravel',
    'experience.resp2': '• Frontend development with React',
    'experience.resp3': '• Database management',
    'experience.ach1': '• Information security enhancement.',
    'experience.ach2': '• Performance optimization',
    'experience.ach3': '• International teamwork',
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s make your next project a reality!',
    'contact.description': 'Do you have an incredible idea? I\'m here to help you turn it into reality! Let\'s work together to create something',
    'contact.extraordinary': 'extraordinary',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.gc': 'Gran Canaria, Spain',
    'contact.cta': 'Let\'s talk about your project!',
    'contact.findMe': 'You can also find me on:',
    'contact.available': 'Available for projects',
    'contact.footer': '© 2025 javii. Created with love and lots of code.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoading: false }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
