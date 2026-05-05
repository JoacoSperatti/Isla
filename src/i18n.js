import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      hero: {
        title: "Un paréntesis en Palermo 🍷🔥",
        subtitle: "Bajá un cambio, viví Isla Negra.",
        cta: "Reservar mesa"
      },
      navbar: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre nosotros",
        events: "Eventos",
        gallery: "Galería",
        contact: "Contacto",
        reserve: "Reservar mesa"
      },
      footer: {
        description: "Un paréntesis necesario en el corazón de Palermo. Cocina de autor inspirada en el litoral, con ingredientes frescos y brasas encendidas.",
        contact: "Contacto",
        hours: "Horarios",
        days: "Martes a Domingo 11:00 — 00:00",
        special: "Viernes y Sábado 11:00 — 01:00",
        rights: "Todos los derechos reservados."
      },
      languageSelector: {
        title: "Selecciona tu idioma / Select your language",
        es: "Español",
        en: "English",
        pt: "Português"
      },
      home: {
        experience: "Así se vive Isla Negra",
        flavors_title: "Sabores del litoral",
        flavors_desc: "Pescados de río, pastas caseras y coctelería.",
        reservations_title: "Reservas limitadas",
        reservations_cta: "Quiero mi mesa"
      },
      about: {
        title: "Sobre nosotros",
        description: "Isla Negra nació con la idea de crear un espacio único en Palermo, donde la buena mesa, la coctelería y la calidez se combinan para ofrecerte un paréntesis en la ciudad.\n\nNuestra misión es que cada visita sea una experiencia: sabores del litoral, música, encuentros y la magia de nuestra terraza."
      },
      menu_page: {
        title: "Menú",
        description: "Descubre nuestra deliciosa carta."
      },
      events: {
        title: "Eventos",
        description: "Próximamente compartiremos nuestros eventos especiales."
      },
      gallery: {
        title: "Galería",
        description: "Explora la belleza de Isla Negra a través de nuestras imágenes."
      },
      contact: {
        title: "Contacto",
        address: "Dirección",
        phone: "Teléfono",
        email: "Email",
        hours: "Horario",
        week: "Lunes a Domingo"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "A break in Palermo 🍷🔥",
        subtitle: "Slow down, live Isla Negra.",
        cta: "Book a table"
      },
      navbar: {
        home: "Home",
        menu: "Menu",
        about: "About us",
        events: "Events",
        gallery: "Gallery",
        contact: "Contact",
        reserve: "Book a table"
      },
      footer: {
        description: "A necessary break in the heart of Palermo. Signature cuisine inspired by the coast, with fresh ingredients and lit embers.",
        contact: "Contact",
        hours: "Hours",
        days: "Tuesday to Sunday 11:00 AM — 00:00 AM",
        special: "Friday and Saturday 11:00 AM — 01:00 AM",
        rights: "All rights reserved."
      },
      languageSelector: {
        title: "Select your language",
        es: "Spanish",
        en: "English",
        pt: "Portuguese"
      },
      home: {
        experience: "The Isla Negra Experience",
        flavors_title: "Coastal Flavors",
        flavors_desc: "River fish, homemade pastas and signature cocktails.",
        reservations_title: "Limited Reservations",
        reservations_cta: "Book a table"
      },
      about: {
        title: "About Us",
        description: "Isla Negra was born with the idea of creating a unique space in Palermo, where fine dining, cocktails, and warmth combine to offer you a break in the city.\n\nOur mission is for every visit to be an experience: coastal flavors, music, gatherings, and the magic of our terrace."
      },
      menu_page: {
        title: "Menu",
        description: "Discover our delicious menu."
      },
      events: {
        title: "Events",
        description: "Coming soon: our special events."
      },
      gallery: {
        title: "Gallery",
        description: "Explore the beauty of Isla Negra through our images."
      },
      contact: {
        title: "Contact",
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours",
        week: "Monday to Sunday"
      }
    }
  },
  pt: {
    translation: {
      hero: {
        title: "Um parêntese em Palermo 🍷🔥",
        subtitle: "Vá com calma, viva a Isla Negra.",
        cta: "Fazer reserva"
      },
      navbar: {
        home: "Início",
        menu: "Cardápio",
        about: "Sobre nós",
        events: "Eventos",
        gallery: "Galeria",
        contact: "Contato",
        reserve: "Fazer reserva"
      },
      footer: {
        description: "Uma pausa necessária no coração de Palermo. Cozinha autoral inspirada no litoral, com ingredientes frescos e brasas acesas.",
        contact: "Contato",
        hours: "Horários",
        days: "Terça a Domingo 11:00 — 00:00",
        special: "Sexta e Sábado 11:00 — 01:00",
        rights: "Todos os derechos reservados."
      },
      languageSelector: {
        title: "Selecione o seu idioma",
        es: "Espanhol",
        en: "Inglês",
        pt: "Português"
      },
      home: {
        experience: "A Experiência Isla Negra",
        flavors_title: "Sabores do Litoral",
        flavors_desc: "Peixes de rio, massas caseiras e coquetelaria autoral.",
        reservations_title: "Lugares Limitados",
        reservations_cta: "Fazer reserva"
      },
      about: {
        title: "Sobre Nós",
        description: "Isla Negra nasceu com a ideia de criar um espaço único em Palermo, onde a boa mesa, a coquetelaria e o acolhimento se combinam para oferecer uma pausa na cidade.\n\nNossa missão é fazer de cada visita uma experiência: sabores del litoral, música, encontros e a magia do nosso terraço."
      },
      menu_page: {
        title: "Cardápio",
        description: "Descubra o nosso delicioso cardápio."
      },
      events: {
        title: "Eventos",
        description: "Em breve: nossos eventos especiais."
      },
      gallery: {
        title: "Galeria",
        description: "Explore a beleza da Isla Negra através das nossas imagens."
      },
      contact: {
        title: "Contato",
        address: "Endereço",
        phone: "Telefone",
        email: "E-mail",
        hours: "Horário",
        week: "Segunda a Domingo"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
