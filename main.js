const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const reveals = document.querySelectorAll(".reveal");
const langToggle = document.querySelector(".lang-toggle");

const translations = {
  en: {
    nav_story: "Story",
    nav_pricing: "Pricing",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_toggle: "Open menu",
    hero_eyebrow: "Premium buffet · Live cooking · Fast service",
    hero_title: "A warm experience that turns first visits into regulars.",
    hero_lead:
      "International flavors, live stations, and a setting designed to linger. You pick the table, we handle the rest.",
    hero_cta_primary: "Call now",
    hero_cta_secondary: "View location",
    hero_hours_label: "Hours",
    hero_hours_value: "Mon - Thu 11:00 AM – 9:00 PM",
    hero_address_label: "Address",
    hero_address_value: "9910 Little Rd, New Port Richey",
    story_title: "The most complete buffet in the area.",
    story_body:
      "Daily selection with seafood, grill, hibachi, and sushi. Fresh ingredients, live prep, and a space made to enjoy.",
    story_point_1: "Live stations with made-to-order cooking.",
    story_point_2: "Healthy options and classic favorites.",
    story_point_3: "Perfect for families, groups, and casual dinners.",
    pricing_title: "Clear, competitive pricing.",
    pricing_body:
      "Lunch, dinner, and to-go buffet options. Ask about promotions and snow crab availability.",
    pricing_card1_title: "Monday to Friday · Lunch",
    pricing_card1_row1: "Adults (Open - 3:25 PM) · $14.99",
    pricing_card1_row2: "Kids 59\"+ regular",
    pricing_card1_row3: "Kids 45\"-58\" · $10.99",
    pricing_card1_row4: "Kids 36\"-44\" · $8.99",
    pricing_card2_title: "Monday to Friday · Dinner",
    pricing_card2_row1: "Adults (3:30 PM - Close) · $25.99 / $18.99",
    pricing_card2_row2: "Kids 59\"+ regular",
    pricing_card2_row3: "Kids 45\"-58\" · $17.99 / $13.99",
    pricing_card2_row4: "Kids 36\"-44\" · $15.99 / $11.99",
    pricing_card3_title: "Weekends · All day",
    pricing_card3_row1: "Adults · $25.99 / $18.99",
    pricing_card3_row2: "Kids 59\"+ regular",
    pricing_card3_row3: "Kids 45\"-58\" · $17.99 / $13.99",
    pricing_card3_row4: "Kids 36\"-44\" · $15.99 / $11.99",
    pricing_card4_title: "Buffet To Go",
    pricing_card4_row1: "Regular · $7.99/LB",
    pricing_card4_row2: "Mixed with Seafood · $9.99/LB",
    pricing_card4_row3: "Seafood · $10.99/LB",
    pricing_card4_row4: "Hibachi/Sushi · $10.99/LB",
    pricing_card4_row5: "Snow Crab · $15.99/LB",
    location_title: "Prime location with easy access.",
    location_body:
      "We are in New Port Richey with ample parking and quick access from the main road.",
    location_address_label: "Address:",
    location_phone_label: "Phone:",
    location_hours_label: "Hours:",
    location_cta: "Call",
    footer_tagline: "Buffet & Grill with a premium experience and warm service.",
    footer_hours_title: "Hours",
    footer_hours_1: "Mon - Thu: 11:00 AM – 9:00 PM",
    footer_hours_2: "Fri - Sat: 11:00 AM – 10:00 PM",
    footer_hours_3: "Sun: 12:00 PM – 9:00 PM",
    footer_contact_title: "Contact",
    footer_note: "© 2026 Hungry Feast. All rights reserved.",
    meta_description:
      "International buffet & grill with fresh options daily. Fast service, premium atmosphere, and live stations.",
    og_description:
      "International flavors, live cooking, and an experience that turns visitors into regulars.",
    lang_toggle_aria: "Switch to Spanish"
  },
  es: {
    nav_story: "Historia",
    nav_pricing: "Precios",
    nav_gallery: "Galería",
    nav_location: "Ubicación",
    nav_toggle: "Abrir menú",
    hero_eyebrow: "Buffet premium · Cocina abierta · Servicio rápido",
    hero_title: "Una experiencia cálida que convierte visitas en clientes fieles.",
    hero_lead:
      "Sabores internacionales, estaciones en vivo y un ambiente diseñado para quedarse. Elige tu mesa, nosotros hacemos el resto.",
    hero_cta_primary: "Llamar ahora",
    hero_cta_secondary: "Ver ubicación",
    hero_hours_label: "Horario",
    hero_hours_value: "Lun - Jue 11:00 AM – 9:00 PM",
    hero_address_label: "Dirección",
    hero_address_value: "9910 Little Rd, New Port Richey",
    story_title: "El buffet más completo de la zona.",
    story_body:
      "Selección diaria con opciones de mariscos, parrilla, hibachi y sushi. Ingredientes frescos, preparación en vivo y un ambiente pensado para disfrutar.",
    story_point_1: "Estaciones en vivo con cocción al momento.",
    story_point_2: "Opciones saludables y favoritas tradicionales.",
    story_point_3: "Ideal para familias, grupos y cenas casuales.",
    pricing_title: "Precios claros y competitivos.",
    pricing_body:
      "Opciones para almuerzo, cena y buffet para llevar. Pregunta por promociones y disponibilidad de snow crab.",
    pricing_card1_title: "Lunes a viernes · Almuerzo",
    pricing_card1_row1: "Adultos (Open - 3:25 PM) · $14.99",
    pricing_card1_row2: "Niños 59\"+ regular",
    pricing_card1_row3: "Niños 45\"-58\" · $10.99",
    pricing_card1_row4: "Niños 36\"-44\" · $8.99",
    pricing_card2_title: "Lunes a viernes · Cena",
    pricing_card2_row1: "Adultos (3:30 PM - Close) · $25.99 / $18.99",
    pricing_card2_row2: "Niños 59\"+ regular",
    pricing_card2_row3: "Niños 45\"-58\" · $17.99 / $13.99",
    pricing_card2_row4: "Niños 36\"-44\" · $15.99 / $11.99",
    pricing_card3_title: "Fines de semana · Todo el día",
    pricing_card3_row1: "Adultos · $25.99 / $18.99",
    pricing_card3_row2: "Niños 59\"+ regular",
    pricing_card3_row3: "Niños 45\"-58\" · $17.99 / $13.99",
    pricing_card3_row4: "Niños 36\"-44\" · $15.99 / $11.99",
    pricing_card4_title: "Buffet para llevar",
    pricing_card4_row1: "Regular · $7.99/LB",
    pricing_card4_row2: "Mixto con mariscos · $9.99/LB",
    pricing_card4_row3: "Mariscos · $10.99/LB",
    pricing_card4_row4: "Hibachi/Sushi · $10.99/LB",
    pricing_card4_row5: "Snow Crab · $15.99/LB",
    location_title: "Ubicación estratégica con fácil acceso.",
    location_body:
      "Estamos en New Port Richey, con amplio estacionamiento y acceso rápido desde la vía principal.",
    location_address_label: "Dirección:",
    location_phone_label: "Teléfono:",
    location_hours_label: "Horario:",
    location_cta: "Llamar",
    footer_tagline: "Buffet & Grill con experiencia premium y servicio cálido.",
    footer_hours_title: "Horario",
    footer_hours_1: "Lun - Jue: 11:00 AM – 9:00 PM",
    footer_hours_2: "Vie - Sáb: 11:00 AM – 10:00 PM",
    footer_hours_3: "Dom: 12:00 PM – 9:00 PM",
    footer_contact_title: "Contacto",
    footer_note: "© 2026 Hungry Feast. Todos los derechos reservados.",
    meta_description:
      "Buffet & grill con sabores internacionales. Servicio rápido, ambiente premium y opciones frescas todos los días.",
    og_description:
      "Sabores internacionales, cocina en vivo y una experiencia que convierte visitantes en clientes fieles.",
    lang_toggle_aria: "Cambiar a inglés"
  }
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) el.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dictionary[key]) el.setAttribute("aria-label", dictionary[key]);
  });

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", dictionary.meta_description);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", dictionary.og_description);

  if (langToggle) {
    langToggle.dataset.lang = lang;
    langToggle.textContent = lang === "en" ? "ES" : "EN";
    langToggle.setAttribute("aria-label", dictionary.lang_toggle_aria);
  }

  localStorage.setItem("lang", lang);
};

const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", onScroll, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));

const setMenuOpen = (open) => {
  if (!nav || !navToggle) return;
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
};

navToggle?.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("open");
  setMenuOpen(willOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Escape" && nav?.classList.contains("open")) {
      setMenuOpen(false);
    }
  },
  { passive: true }
);

const closeMenuIfDesktop = () => {
  if (window.matchMedia("(min-width: 721px)").matches) {
    setMenuOpen(false);
  }
};

window.addEventListener("resize", closeMenuIfDesktop, { passive: true });

const initialLang = localStorage.getItem("lang") || "en";
setLanguage(initialLang);

langToggle?.addEventListener("click", () => {
  const current = langToggle.dataset.lang || "en";
  const next = current === "en" ? "es" : "en";
  setLanguage(next);
});

const shouldLoadHeroSecondary = () => {
  const nav = navigator;
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
  if (!conn) return true;
  if (conn.saveData) return false;
  const type = conn.effectiveType || "";
  return !/(^|-)2g$/.test(type);
};

const loadHeroSecondary = () => {
  const el = document.querySelector(".hero-slide.slide-two");
  if (!el) return;
  if (el.style.backgroundImage) return;
  el.style.backgroundImage =
    'image-set(url("assets/optimized/slider2-800.avif") type("image/avif") 1x, url("assets/optimized/slider2-1200.avif") type("image/avif") 2x, url("assets/optimized/slider2-800.webp") type("image/webp") 1x, url("assets/optimized/slider2-1200.webp") type("image/webp") 2x, url("assets/slider2.jpg") type("image/jpeg") 1x)';
};

if (shouldLoadHeroSecondary()) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadHeroSecondary, { timeout: 2500 });
  } else {
    window.setTimeout(loadHeroSecondary, 1200);
  }
}
