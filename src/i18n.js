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
        rights: "Todos los derechos reservados.",
        developed_by: "Desarrollado por"
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
        flavors_desc: "En medio del ritmo acelerado de Buenos Aires, Isla Negra busca traer la calma, la calidez y los tiempos del litoral entrerriano a una experiencia gastronómica a la altura de la ciudad.\n\nUna propuesta única en Palermo donde los sabores de río, los productos regionales y la coctelería de autor se combinan con una ambientación pensada para relajarse, disfrutar y conectar con el momento.\n\nLuces cálidas, música, una terraza para quedarse horas y una carta amplia para compartir distintas experiencias alrededor de la mesa, ya sea en familia, en pareja o entre amigos.\n\nCocktails elaborados con ingredientes únicos de nuestra provincia, platos inspirados en nuestras raíces y una forma de atender donde el encuentro y la hospitalidad siguen siendo lo más importante.\n\nPorque en Isla Negra no buscamos que vengas solamente a comer.\nBuscamos que vivas una experiencia que quieras volver a repetir.",
        reservations_title: "Reservas limitadas",
        reservations_cta: "Quiero mi mesa"
      },
      about: {
        title: "Sobre nosotros",
        description: "Somos una familia gastronómica proveniente de Colón, Entre Ríos, con más de 23 años de experiencia en el rubro. Isla Negra nace de un legado familiar y del deseo de traer un pedazo del litoral entrerriano a la ciudad de Buenos Aires.\n\nMáximo y Zoe, fundadores de Isla Negra, llegaron a Buenos Aires con la intención de estudiar, pero pronto descubrieron que faltaba un espacio que conectara con sus raíces, sus sabores y la experiencia cálida de su tierra.\n\nEn ese momento entendimos que la gastronomía siempre había sido parte de nosotros. Crecimos entre cocinas, hornallas y fuegos; viendo a nuestros padres dedicar su vida a crear experiencias alrededor de la comida. Isla Negra nace justamente de ese legado y de la necesidad de volver a conectar con nuestras raíces luego de alejarnos.\n\nAsí nació Isla Negra Entre Ríos – Buenos Aires: un concepto que fusiona la esencia del río y la gastronomía del litoral con una mirada moderna y adaptada al público porteño.\n\nNuestra propuesta busca ofrecer mucho más que comida: una experiencia. Desde pescados de río y productos regionales hasta platos tradicionales que forman parte de las mesas entrerrianas, cada detalle está pensado para transportar, aunque sea por un momento, a esas tierras tan recordadas y queridas por quienes las conocen.\n\nPor eso elegimos una cocina casera y hecha con dedicación, inspirada en esos almuerzos de domingo que marcaron nuestra infancia. Crecimos viendo a nuestras abuelas cocinar para toda la familia con amor, pasión y entrega, dejando una parte de sí en cada preparación.\n\nIsla Negra fue creada para compartir momentos únicos, desconectar de la rutina y disfrutar de un espacio cálido y acogedor, con la impronta de Buenos Aires pero sin perder la esencia de las tierras que nos vieron crecer."
      },
      menu_page: {
        title: "Menú",
        description: "Descubre nuestra deliciosa carta.",
        title_featured: "MENÚ DESTACADO",
        full_menu_title: "CARTA COMPLETA",
        river_flavors: "SABORES DEL RÍO",
        river_desc: "Surubí · Boga · Pacú · Dorado",
        pastas: "PASTAS & RISOTTOS",
        pastas_desc: "Pastas artesanales de autor y risottos de mar",
        meats: "CARNES",
        meats_desc: "Cortes magros y carnes blancas",
        salads: "ENSALADAS",
        salads_desc: "Opciones veganas con ingredientes seleccionados, proteína de río y variedad de vegetales asados",
        cocktails: "COCTELERÍA",
        cocktails_desc: "Coctelería de autor inspirada en sabores del litoral entrerriano ",
        discover_full: "“Descubrí toda la experiencia Isla Negra.”"
      },
      events: {
        title: "Eventos",
        description: "Así se vive tu evento en Isla Negra."
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
        rights: "All rights reserved.",
        developed_by: "Developed by"
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
        flavors_desc: "Amidst the fast-paced rhythm of Buenos Aires, Isla Negra seeks to bring the calm, warmth, and timing of the Entre Ríos coast to a dining experience on par with the city.\n\nA unique proposal in Palermo where river flavors, regional products, and signature cocktails combine with a setting designed to relax, enjoy, and connect with the moment.\n\nWarm lights, music, a terrace to stay for hours, and an extensive menu to share different experiences around the table, whether with family, as a couple, or among friends.\n\nCocktails made with unique ingredients from our province, dishes inspired by our roots, and a service style where connection and hospitality remain the most important things.\n\nBecause at Isla Negra, we don't just want you to come to eat.\nWe want you to live an experience that you will want to repeat.",
        reservations_title: "Limited Reservations",
        reservations_cta: "Book a table"
      },
      about: {
        title: "About Us",
        description: "We are a culinary family from Colón, Entre Ríos, with more than 23 years of experience in the industry. Isla Negra was born from a family legacy and the desire to bring a piece of the Entre Ríos coast to the city of Buenos Aires.\n\nMáximo and Zoe, founders of Isla Negra, arrived in Buenos Aires with the intention of studying, but soon discovered that there was a lack of a space that connected with their roots, their flavors, and the warm experience of their land.\n\nAt that moment we understood that gastronomy had always been a part of us. We grew up among kitchens, stoves, and fires; watching our parents dedicate their lives to creating experiences around food. Isla Negra was born precisely from that legacy and from the need to reconnect with our roots after moving away.\n\nThus Isla Negra Entre Ríos – Buenos Aires was born: a concept that merges the essence of the river and the gastronomy of the coast with a modern look adapted to the Buenos Aires public.\n\nOur proposal seeks to offer much more than food: an experience. From river fish and regional products to traditional dishes that are part of the Entre Ríos tables, every detail is designed to transport you, even for a moment, to those lands so remembered and loved by those who know them.\n\nThat's why we choose homemade cuisine made with dedication, inspired by those Sunday lunches that marked our childhood. We grew up watching our grandmothers cook for the whole family with love, passion, and devotion, leaving a part of themselves in every preparation.\n\nIsla Negra was created to share unique moments, disconnect from the routine, and enjoy a warm and welcoming space, with the identity of Buenos Aires but without losing the essence of the lands that saw us grow."
      },
      menu_page: {
        title: "Menu",
        description: "Discover our delicious menu.",
        title_featured: "FEATURED MENU",
        full_menu_title: "COMPLETE MENU",
        river_flavors: "FLAVORS OF THE RIVER",
        river_desc: "Surubí · Boga · Pacú · Dorado",
        pastas: "PASTAS & RISOTTOS",
        pastas_desc: "Handmade signature pastas and seafood risottos",
        meats: "MEATS",
        meats_desc: "Lean cuts and white meats",
        salads: "SALADS",
        salads_desc: "Vegan options with selected ingredients, river protein and a variety of roasted vegetables",
        cocktails: "COCKTAIL BAR",
        cocktails_desc: "Signature cocktails inspired by the flavors of the Entre Ríos coast",
        discover_full: "“Discover the entire Isla Negra experience.”"
      },
      events: {
        title: "Events",
        description: "This is how your event is experienced in Isla Negra."
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
        rights: "Todos os derechos reservados.",
        developed_by: "Desenvolvido por"
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
        flavors_desc: "Em meio ao ritmo acelerado de Buenos Aires, Isla Negra busca trazer a calma, o calor e os tempos do litoral de Entre Ríos para uma experiência gastronômica à altura da cidade.\n\nUma propuesta única em Palermo onde os sabores de rio, os produtos regionais e a coquetelaria de autor se combinam com um ambiente pensado para relaxar, desfrutar e se conectar com o momento.\n\nLuzes quentes, música, um terraço para ficar horas e um cardápio amplo para compartilhar diferentes experiências ao redor da mesa, seja em família, em casal ou entre amigos.\n\nCoquetéis elaborados com ingredientes únicos da nossa província, pratos inspirados nas nossas raízes e uma forma de atender onde o encontro e a hospitalidade continuam sendo o mais importante.\n\nPorque na Isla Negra não queremos que você venha apenas para comer.\nQueremos que você viva uma experiência que queira repetir.",
        reservations_title: "Lugares Limitados",
        reservations_cta: "Fazer reserva"
      },
      about: {
        title: "Sobre Nós",
        description: "Somos uma família gastronômica de Colón, Entre Ríos, com mais de 23 anos de experiência no setor. Isla Negra nasce de um legado familiar e do desejo de trazer um pedaço do litoral de Entre Ríos para a cidade de Buenos Aires.\n\nMáximo e Zoe, fundadores da Isla Negra, chegaram a Buenos Aires com a intenção de estudar, mas logo descobriram que faltaba um espaço que conectasse com suas raízes, seus sabores e a experiência calorosa de sua terra.\n\nNesse momento entendemos que a gastronomia sempre fez parte de nós. Crescemos entre cozinhas, fogões e fogos; vendo nossos pais dedicarem suas vidas a criar experiências em torno da comida. Isla Negra nasce justamente desse legado e da necessidade de nos reconectarmos com nossas raízes após nos afastarmos.\n\nAssim nasceu a Isla Negra Entre Ríos – Buenos Aires: um conceito que funde a essência do rio e a gastronomia do litoral com um olhar moderno adaptado ao público portenho.\n\nNossa proposta busca oferecer muito mais do que comida: uma experiência. Desde peixes de rio e produtos regionais até pratos tradicionais que fazem parte das mesas de Entre Ríos, cada detalhe é pensado para transportar, ainda que por um momento, a essas terras tão lembradas e queridas por quem as conhece.\n\nPor isso escolhemos uma cozinha caseira feita com dedicação, inspirada naqueles almoços de domingo que marcaram nossa infância. Crescemos vendo nossas avós cozinharem para toda la família com amor, paixão e entrega, deixando uma parte de si em cada preparação.\n\nIsla Negra foi criada para compartilhar momentos únicos, desconectar da rotina e desfrutar de um espaço acolhedor e aconchegante, com a marca de Buenos Aires mas sem perder a essência das terras que nos viram crescer."
      },
      menu_page: {
        title: "Cardápio",
        description: "Descubra o nosso delicioso cardápio.",
        title_featured: "CARDÁPIO EM DESTAQUE",
        full_menu_title: "CARDÁPIO COMPLETO",
        river_flavors: "SABORES DO RIO",
        river_desc: "Surubí · Boga · Pacú · Dorado",
        pastas: "MASSAS E RISOTOS",
        pastas_desc: "Massas artesanais exclusivas e risotos de frutos do mar.",
        meats: "CARNES",
        meats_desc: "Cortes magros e carnes brancas",
        salads: "SALADAS",
        salads_desc: "Opções veganas com ingredientes selecionados, proteína de rio e uma variedade de vegetais assados",
        cocktails: "COQUETELARIA",
        cocktails_desc: "Coquetéis exclusivos inspirados nos sabores da costa de Entre Ríos",
        discover_full: "“Descubra toda a experiência Isla Negra.”"
      },
      events: {
        title: "Eventos",
        description: "É assim que seu evento será vivenciado em Isla Negra."
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
