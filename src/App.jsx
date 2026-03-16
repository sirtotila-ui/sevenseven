import { useState } from "react";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const telefono = "347 490 7093";
  const whatsappNumber = "3474907093";
  const whatsappBaseText = "Ciao, vorrei informazioni!";
  const whatsappLavaggioText = "Ciao, vorrei prenotare un lavaggio!";

  const whatsappUrl = `https://wa.me/39${whatsappNumber}?text=${encodeURIComponent(
    whatsappBaseText
  )}`;
  const whatsappLavaggioUrl = `https://wa.me/39${whatsappNumber}?text=${encodeURIComponent(
    whatsappLavaggioText
  )}`;
  const telUrl = `tel:+39${telefono}`;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setNavOpen(false);
  };

  const faqItems = [
    {
      q: "Dove siete esattamente?",
      a: "Via Naviglio, 22, 48123 Ravenna (RA) — all'interno dell'area del benzinaio, ingresso ben visibile dalla strada.",
    },
    {
      q: "Il bar è aperto anche la domenica?",
      a: "[ORARI DOMENICA — chiedere al cliente]",
    },
    {
      q: "L'autolavaggio self-service è aperto la sera?",
      a: "[ORARI SELF-SERVICE — chiedere al cliente]",
    },
    {
      q: "Come prenoto il lavaggio a mano?",
      a: "Chiama o scrivi su WhatsApp. Ti diamo un orario e la macchina è pronta quando torni.",
    },
    {
      q: "Per la lattoneria come faccio?",
      a: "Puoi chiamarci o visitare il sito dedicato di Lattoneria Ravennate per vedere tutti i servizi e richiedere un preventivo gratuito.",
    },
  ];

  const recensioni = [
    {
      testo: "10 stelle solo per le bariste ❤️",
      nome: "Fabio Nannini",
      piattaforma: "Google",
      stelle: "5",
    },
    {
      testo:
        "Personale davvero gentile. Dolce e salato di ottima qualità. Consigliatissimo!",
      nome: "Carlo M",
      piattaforma: "Google",
      stelle: "5",
    },
    {
      testo:
        "Hanno ridato vita ad un impianto un po' in abbandono, prezzi carburante più bassi rispetto agli altri, impianto lavaggio ultima generazione funzionale e ben fatto, il bar offre molta scelta e prodotti buoni. Personale gentile, lo consiglio... continuate così!!!",
      nome: "Cliente Google",
      piattaforma: "Google",
      stelle: "5",
    },
  ];

  const whyUsItems = [
    {
      emoji: "📍",
      titolo: "Tutto in Un Posto",
      desc: "Caffè, lavaggio auto e lattoneria. Non devi andare da 3 parti diverse.",
    },
    {
      emoji: "⏰",
      titolo: "Orari Comodi",
      desc: "Bar aperto dalla mattina presto. Autolavaggio disponibile tutti i giorni. Lattoneria su appuntamento.",
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      titolo: "Punto di Riferimento",
      desc: "Siamo qui da anni. Ci conoscono tutti nella zona. Vieni e capirai perché.",
    },
    {
      emoji: "💰",
      titolo: "Prezzi Onesti",
      desc: "Qualità e prezzo giusto. Su tutto. Dal caffè al rifacimento del tetto.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        /* Google Fonts + base styles */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg-main: #0F0F0F;
          --bg-alt: #171717;
          --accent: #EF4444;
          --accent-bar: #F59E0B;
          --accent-auto: #EA580C;
          --text-heading: #FFFFFF;
          --text-body: rgba(255,255,255,0.6);
          --text-muted: rgba(255,255,255,0.3);
          --radius-card: 12px;
          --radius-button: 8px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          background-color: var(--bg-main);
          color: var(--text-body);
        }

        .app-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, rgba(239,68,68,0.2), transparent 55%), var(--bg-main);
        }

        main {
          max-width: 1120px;
          margin: 0 auto;
          padding: 64px 16px 64px;
        }

        h1, h2, h3, h4 {
          font-family: 'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--text-heading);
          letter-spacing: 0.02em;
        }

        h1 {
          font-size: clamp(2.4rem, 5vw, 3.4rem);
          line-height: 1.05;
        }

        h2 {
          font-size: clamp(1.7rem, 3.5vw, 2.3rem);
          line-height: 1.1;
        }

        h3 {
          font-size: clamp(1.2rem, 2.4vw, 1.5rem);
        }

        p {
          margin: 0;
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* Navbar */
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .navbar {
          position: relative;
          backdrop-filter: blur(16px);
          background: linear-gradient(to bottom, rgba(15,15,15,0.96), rgba(15,15,15,0.85));
          border-bottom: 1px solid rgba(239,68,68,0.4);
        }

        .navbar-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .nav-logo {
          font-family: 'Space Grotesk', system-ui;
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .nav-logo span {
          color: var(--accent);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 20px;
          font-size: 0.92rem;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.15s ease;
          white-space: nowrap;
          padding: 6px 0;
        }

        .nav-link:hover {
          color: var(--text-heading);
        }

        .nav-link-lattoneria {
          color: var(--accent-auto);
          font-weight: 500;
        }

        .nav-cta {
          display: none;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 18px;
          min-height: 48px;
          border-radius: var(--radius-button);
          border: 1px solid transparent;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease, border-color 0.15s ease;
          white-space: nowrap;
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.35);
        }

        .btn-primary {
          background-color: var(--accent);
          color: #ffffff;
          border-color: rgba(148, 192, 255, 0.6);
        }

        .btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border-color: rgba(255,255,255,0.18);
        }

        .btn-whatsapp {
          background-color: #25D366;
          color: #ffffff;
        }

        .btn-bar {
          background-color: var(--accent-bar);
          color: #0F0F0F;
          border-color: rgba(245,158,11,0.8);
        }

        .btn-auto {
          background-color: var(--accent-auto);
          color: #ffffff;
          border-color: rgba(234,88,12,0.7);
        }

        .btn-text {
          font-size: 0.85rem;
        }

        /* Mobile nav toggle */
        .nav-toggle {
          display: inline-flex;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background-color: rgba(15,15,15,0.85);
          color: #ffffff;
          cursor: pointer;
        }

        .nav-toggle-icon {
          width: 18px;
          height: 12px;
          position: relative;
        }

        .nav-toggle-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          border-radius: 999px;
          background-color: #ffffff;
          transition: transform 0.18s ease, opacity 0.18s ease, top 0.18s ease, bottom 0.18s ease;
        }

        .nav-toggle-line:nth-child(1) {
          top: 0;
        }

        .nav-toggle-line:nth-child(2) {
          top: 5px;
        }

        .nav-toggle-line:nth-child(3) {
          bottom: 0;
        }

        .nav-toggle.open .nav-toggle-line:nth-child(1) {
          top: 5px;
          transform: rotate(45deg);
        }

        .nav-toggle.open .nav-toggle-line:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.open .nav-toggle-line:nth-child(3) {
          bottom: 5px;
          transform: rotate(-45deg);
        }

        .nav-mobile-menu {
          display: ${navOpen ? "block" : "none"};
          border-top: 1px solid rgba(255,255,255,0.06);
          background: radial-gradient(circle at top, rgba(59,130,246,0.16), transparent 65%), rgba(15,15,15,0.98);
        }

        .nav-mobile-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 8px 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-mobile-link {
          padding: 10px 0;
          font-size: 0.95rem;
          color: var(--text-body);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .nav-mobile-link span {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .nav-mobile-link-lattoneria {
          color: var(--accent-auto);
          font-weight: 500;
        }

        .nav-mobile-cta {
          margin-top: 8px;
        }

        /* Hero */
        .hero {
          padding: 28px 0 36px;
          display: grid;
          grid-template-columns: minmax(0, 1.4fr);
          gap: 28px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(239,68,68,0.55);
          background: linear-gradient(90deg, rgba(239,68,68,0.28), transparent);
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 14px;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: radial-gradient(circle, #22c55e, #16a34a);
          box-shadow: 0 0 0 4px rgba(34,197,94,0.15);
        }

        .hero-title {
          margin-bottom: 14px;
        }

        .hero-title span {
          color: var(--accent);
        }

        .hero-sub {
          max-width: 460px;
          font-size: 0.98rem;
          margin-bottom: 24px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .hero-services-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .pill-service {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.78rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          user-select: none;
          transition: transform 0.1s ease, box-shadow 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
        }

        .pill-service:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.45);
        }

        .pill-bar {
          background-color: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.5);
          color: #fbbf24;
        }

        .pill-auto {
          background-color: rgba(234,88,12,0.08);
          border: 1px solid rgba(234,88,12,0.55);
          color: #fb923c;
        }

        .pill-latt {
          background-color: rgba(234,88,12,0.08);
          border: 1px solid rgba(234,88,12,0.55);
          color: #fb923c;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr);
          gap: 28px;
        }

        .hero-image {
          border-radius: var(--radius-card);
          border: 1px solid rgba(148,163,184,0.18);
          background: linear-gradient(145deg, rgba(239,68,68,0.18), rgba(15,15,15,0.95));
          padding: 18px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-image-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.14em;
        }

        .hero-image-box {
          flex: 1;
          border-radius: 9px;
          background: repeating-linear-gradient(
            135deg,
            rgba(15,15,15,0.9),
            rgba(15,15,15,0.9) 6px,
            rgba(31,41,55,0.85) 6px,
            rgba(31,41,55,0.85) 12px
          );
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 18px;
          color: rgba(226,232,240,0.9);
          font-size: 0.9rem;
        }

        .hero-image-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .hero-image-tag {
          padding: 4px 8px;
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.35);
          background-color: rgba(15,15,15,0.7);
        }

        /* Sections base */
        section {
          scroll-margin-top: 88px;
        }

        .section {
          padding: 40px 0;
        }

        .section-inner {
          border-radius: var(--radius-card);
          border: 1px solid rgba(148,163,184,0.12);
          padding: 22px 18px 22px;
          background-color: rgba(15,15,15,0.7);
        }

        .section-label {
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .section-heading {
          margin-bottom: 12px;
        }

        .section-heading span {
          color: inherit;
        }

        .section-heading-accent-bar {
          color: var(--accent-bar);
        }

        .section-heading-accent-auto {
          color: var(--accent-auto);
        }

        .section-text {
          font-size: 0.95rem;
          max-width: 640px;
        }

        /* Bar section */
        .section-bar {
          background-color: var(--bg-alt);
          border-color: rgba(245,158,11,0.16);
        }

        .bar-layout {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-top: 20px;
        }

        .bar-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 14px;
        }

        .bar-bullets {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
          display: grid;
          gap: 10px;
          max-width: 560px;
        }

        .bar-bullets li {
          display: grid;
          gap: 4px;
          padding: 12px 12px 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(148,163,184,0.16);
          background: radial-gradient(circle at top left, rgba(255,255,255,0.06), rgba(15,15,15,0.7));
          position: relative;
        }

        .bar-bullets-title {
          font-family: 'Space Grotesk', system-ui;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 0.01em;
        }

        .bar-bullets-text {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.7);
        }

        .card-small {
          border-radius: var(--radius-card);
          padding: 14px 12px;
          background-color: #0F0F0F;
          border: 1px solid rgba(245,158,11,0.1);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-small-title {
          font-size: 0.95rem;
          color: var(--text-heading);
        }

        .card-small-emoji {
          font-size: 1.1rem;
        }

        .card-small-text {
          font-size: 0.86rem;
          color: var(--text-body);
        }

        .bar-image {
          border-radius: var(--radius-card);
          padding: 16px;
          background: linear-gradient(135deg, rgba(245,158,11,0.16), #0f0f0f);
          border: 1px solid rgba(245,158,11,0.3);
          display: flex;
          flex-direction: column;
          gap: 10px;
          order: -1;
        }

        .placeholder-img {
          border-radius: 9px;
          background-color: #0F0F0F;
          border: 1px dashed rgba(234,179,8,0.65);
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px;
          font-size: 0.9rem;
        }

        .bar-cta {
          margin-top: 16px;
        }

        /* Autolavaggio */
        .section-auto {
          background:
            radial-gradient(circle at top, rgba(37,99,235,0.4), transparent 60%),
            radial-gradient(circle at bottom, rgba(30,64,175,0.3), transparent 55%),
            var(--bg-main);
          border-color: rgba(37,99,235,0.45);
        }

        .auto-services-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr);
          gap: 16px;
          margin-top: 22px;
        }

        .auto-card {
          border-radius: var(--radius-card);
          background-color: var(--bg-alt);
          padding: 20px 18px 20px;
          border: 1px solid rgba(55,65,81,0.9);
          border-top: 3px solid var(--accent-auto);
          display: grid;
          grid-template-columns: minmax(0, 1.6fr);
          gap: 14px;
        }

        .auto-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }

        .auto-badge {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.9);
        }

        .auto-tag-premium {
          font-size: 0.72rem;
          padding: 3px 7px;
          border-radius: 999px;
          background-color: rgba(234,88,12,0.18);
          color: #fed7aa;
          border: 1px solid rgba(248,250,252,0.2);
        }

        .auto-service-name {
          font-size: 1.05rem;
          color: var(--text-heading);
        }

        .auto-desc {
          font-size: 0.9rem;
          color: var(--text-body);
          margin-bottom: 8px;
        }

        .auto-price {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auto-placeholder {
          border-radius: 9px;
          background: conic-gradient(from 140deg, rgba(15,15,15,1), rgba(30,64,175,0.9), rgba(15,15,15,1));
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px;
          font-size: 0.86rem;
          color: rgba(242,244,248,0.9);
        }

        .auto-cta-row {
          margin-top: 20px;
        }

        /* Lattoneria */
        .section-lattoneria {
          background-color: var(--bg-alt);
          border-color: rgba(234,88,12,0.15);
        }

        .lattoneria-card {
          background-color: var(--bg-main);
          border-radius: var(--radius-card);
          border: 1px solid rgba(234,88,12,0.15);
          padding: 24px 18px 24px;
        }

        .lattoneria-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin: 16px 0 18px;
          font-size: 0.9rem;
        }

        .lattoneria-point {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lattoneria-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-top: 10px;
        }

        .lattoneria-inline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Perché noi */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .why-card {
          border-radius: var(--radius-card);
          background-color: rgba(15,15,15,0.8);
          border: 1px solid rgba(55,65,81,0.9);
          padding: 14px 12px;
          font-size: 0.9rem;
        }

        .why-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
          color: var(--text-heading);
        }

        /* Recensioni */
        .reviews-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr);
          gap: 14px;
          margin-top: 18px;
        }

        .review-card {
          border-radius: var(--radius-card);
          background-color: rgba(15,15,15,0.9);
          border: 1px solid rgba(55,65,81,0.9);
          padding: 14px 14px 16px;
          font-size: 0.9rem;
        }

        .review-stars {
          color: #fbbf24;
          font-size: 0.9rem;
          margin-bottom: 6px;
        }

        .review-meta {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Contatti / mappa */
        .section-contacts {
          background-color: var(--bg-alt);
          border-color: rgba(239,68,68,0.4);
        }

        .contacts-layout {
          display: grid;
          grid-template-columns: minmax(0,1.4fr);
          gap: 18px;
          margin-top: 18px;
          align-items: flex-start;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.92rem;
        }

        .contacts-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--text-muted);
        }

        .contacts-phone {
          font-size: 1.05rem;
          color: var(--accent);
          font-weight: 600;
          cursor: pointer;
        }

        .contacts-whatsapp {
          font-size: 0.95rem;
          color: #22c55e;
          cursor: pointer;
        }

        .contacts-email {
          font-size: 0.9rem;
        }

        .contacts-hours {
          margin-top: 10px;
          display: grid;
          gap: 8px;
          font-size: 0.88rem;
        }

        .contacts-hour-row {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contacts-hour-label {
          color: var(--text-muted);
        }

        .contacts-map {
          border-radius: var(--radius-card);
          background-color: #0F0F0F;
          border: 1px dashed rgba(148,163,184,0.5);
          padding: 14px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          aspect-ratio: 4/3;
        }

        /* FAQ */
        .faq-list {
          margin-top: 18px;
          border-radius: var(--radius-card);
          border: 1px solid rgba(55,65,81,0.9);
          background-color: rgba(15,15,15,0.9);
        }

        .faq-item {
          border-bottom: 1px solid rgba(31,41,55,0.9);
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-question {
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          cursor: pointer;
          font-size: 0.95rem;
          color: var(--text-heading);
          background: transparent;
          border: none;
        }

        .faq-toggle {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .faq-answer {
          padding: 0 14px 12px;
          font-size: 0.9rem;
          color: var(--text-body);
        }

        /* Footer */
        .footer {
          background-color: #0A0A0A;
          border-top: 1px solid rgba(31,41,55,0.9);
          padding: 20px 16px 18px;
          font-size: 0.82rem;
        }

        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-logo {
          font-family: 'Space Grotesk', system-ui;
          font-weight: 600;
          color: #FFFFFF;
        }

        .footer-services {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.8rem;
          color: var(--text-body);
        }

        .footer-bottom {
          border-top: 1px solid rgba(31,41,55,0.9);
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: var(--text-muted);
        }

        .footer-credits {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.15);
        }

        .footer-credits a {
          text-decoration: underline;
        }


        @media (min-width: 720px) {
          .navbar-inner {
            padding-inline: 20px;
          }

          main {
            padding-inline: 20px;
          }

          .nav-links {
            display: flex;
          }

          .nav-cta {
            display: block;
          }

          .nav-toggle {
            display: none;
          }

          .nav-mobile-menu {
            display: none !important;
          }

          .hero {
            padding-top: 36px;
          }

          .hero-layout {
            grid-template-columns: minmax(0,1.5fr) minmax(0,1.15fr);
          }

          .bar-layout {
            display: grid;
            grid-template-columns: minmax(0,1.3fr) minmax(0,1.1fr);
          }

          .bar-image {
            order: 0;
          }

          .auto-services-grid {
            grid-template-columns: repeat(3, minmax(0,1fr));
          }

          .auto-card {
            padding: 20px 16px 18px;
          }

          .contacts-layout {
            grid-template-columns: minmax(0,1.4fr) minmax(0,1.1fr);
          }

          .section-inner {
            padding: 26px 22px 26px;
          }
        }

        @media (min-width: 980px) {
          .navbar-inner {
            padding-inline: 0;
          }

          main {
            padding-inline: 0;
          }

          .hero {
            padding-top: 44px;
          }

          .section {
            padding: 44px 0;
          }

          .section-inner {
            padding: 28px 26px 28px;
          }
        }
      `}</style>

      <div className="app-root">
        {/* Navbar */}
        <header className="navbar-wrapper">
          <nav className="navbar">
            <div className="navbar-inner">
              <div
                className="nav-logo"
                onClick={() => scrollToId("top")}
                style={{ cursor: "pointer" }}
              >
                SevenSeven <span>Ravenna</span>
              </div>

              <div className="nav-links">
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => scrollToId("bar")}
                >
                  Bar
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => scrollToId("autolavaggio")}
                >
                  Autolavaggio
                </button>
                <a
                  href="https://lattoneriaravennate.vercel.app"
                  className="nav-link nav-link-lattoneria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lattoneria Ravennate ↗
                </a>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => scrollToId("contatti")}
                >
                  Contatti
                </button>
              </div>

              <div className="nav-cta">
                <a href={telUrl} className="btn btn-primary">
                  Chiama Ora
                </a>
              </div>

              <button
                type="button"
                className={`nav-toggle ${navOpen ? "open" : ""}`}
                onClick={() => setNavOpen((prev) => !prev)}
                aria-label="Apri menù di navigazione"
              >
                <div className="nav-toggle-icon">
                  <div className="nav-toggle-line" />
                  <div className="nav-toggle-line" />
                  <div className="nav-toggle-line" />
                </div>
              </button>
            </div>

            <div className="nav-mobile-menu">
              <div className="nav-mobile-inner">
                <button
                  type="button"
                  className="nav-mobile-link"
                  onClick={() => scrollToId("bar")}
                >
                  <span>Bar</span>
                </button>
                <button
                  type="button"
                  className="nav-mobile-link"
                  onClick={() => scrollToId("autolavaggio")}
                >
                  <span>Autolavaggio</span>
                </button>
                <a
                  href="https://lattoneriaravennate.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-mobile-link nav-mobile-link-lattoneria"
                  onClick={() => setNavOpen(false)}
                >
                  Lattoneria Ravennate ↗
                  <span>Sito esterno</span>
                </a>
                <button
                  type="button"
                  className="nav-mobile-link"
                  onClick={() => scrollToId("contatti")}
                >
                  <span>Contatti</span>
                </button>
                <div className="nav-mobile-cta">
                  <a href={telUrl} className="btn btn-primary" style={{ width: "100%" }}>
                    Chiama Ora
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="hero" aria-label="Presentazione">
            <div className="hero-layout">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  <span>📍 Zona Naviglio · Ravenna</span>
                </div>
                <div className="hero-title">
                  <h1>
                    Bar. Autolavaggio.
                    <br />
                    <span>Lattoneria.</span>
                  </h1>
                </div>
                <p className="hero-sub">
                  Tre servizi, un unico punto di riferimento a Ravenna. Caffè al volo,
                  auto splendente, tetto sicuro. Tutto qui.
                </p>
                <div className="hero-ctas">
                  <a href={telUrl} className="btn btn-primary">
                    Chiama Ora
                  </a>
                  <a href={whatsappUrl} className="btn btn-whatsapp">
                    Scrivi su WhatsApp
                  </a>
                </div>
                <div className="hero-meta">
                  <span>
                    ☕ Bar: <strong>Lun–Sab 06:30–19:00 · Dom chiuso</strong>
                  </span>
                  <span>
                    🚗 Autolavaggio: <strong>Lavaggio automatico 24/7</strong>
                  </span>
                </div>

                <div className="hero-services-row">
                  <button
                    type="button"
                    className="pill-service pill-bar"
                    onClick={() => scrollToId("bar")}
                  >
                    <span>☕ Bar</span>
                  </button>
                  <button
                    type="button"
                    className="pill-service pill-auto"
                    onClick={() => scrollToId("autolavaggio")}
                  >
                    <span>🚗 Autolavaggio</span>
                  </button>
                  <a
                    href="https://lattoneriaravennate.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-service pill-latt"
                  >
                    <span>🔧 Lattoneria Ravennate ↗</span>
                  </a>
                </div>
              </div>

              <div className="hero-image">
              <div className="hero-image-label">Panoramica attività</div>
              <div className="hero-image-box" style={{ padding: 0 }}>
                  <img
                    src="/esterno-sevenseven.jpg"
                    alt="Vista esterna del Caffè SevenSeven con insegna e area benzinaio"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9px" }}
                  />
              </div>
                <div className="hero-image-tags">
                  <div className="hero-image-tag">Bar · Colazioni · Pranzi veloci</div>
                  <div className="hero-image-tag">Autolavaggio self, automatico, a mano</div>
                  <div className="hero-image-tag">Lattoneria Ravennate · Tetti & Grondaie</div>
                </div>
              </div>
            </div>
          </section>

          {/* Bar */}
          <section id="bar" className="section" aria-labelledby="bar-title">
            <div className="section-inner section-bar">
              <div className="section-label">☕ Il Bar</div>
              <div className="section-heading" id="bar-title">
                <h2>
                  Il Tuo Bar.
                  <span className="section-heading-accent-bar"> Di Fiducia.</span>
                </h2>
              </div>
              <p className="section-text">
                Un caffè come si deve, una brioche calda, un pranzo veloce. Il nostro bar
                è il punto di ritrovo della zona: aperto dalla mattina presto, con
                prodotti freschi e un ambiente dove stare bene. Che tu stia aspettando
                l&apos;auto al lavaggio o facendo una pausa dal lavoro, qui trovi sempre
                qualcosa di buono.
              </p>

              <div className="bar-layout">
                <ul className="bar-bullets" aria-label="Punti forti del bar">
                  <li>
                    <span className="bar-bullets-title">Caffetteria curata</span>
                    <span className="bar-bullets-text">
                      Espresso e cappuccino fatti come si deve, miscela selezionata.
                    </span>
                  </li>
                  <li>
                    <span className="bar-bullets-title">Colazioni fresche</span>
                    <span className="bar-bullets-text">
                      Brioche e dolci del giorno, perfetti per partire bene.
                    </span>
                  </li>
                  <li>
                    <span className="bar-bullets-title">Pranzi veloci</span>
                    <span className="bar-bullets-text">
                      Panini e piatti rapidi quando hai poco tempo.
                    </span>
                  </li>
                </ul>

                <div className="bar-image">
                  <div className="placeholder-img" style={{ padding: 0, borderStyle: "solid" }}>
                    <img
                      src="/bar-bancone.jpg"
                      alt="Bancone del bar Seven Seven con macchina del caffè e brioches"
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                  <div className="bar-cta">
                    <button
                      type="button"
                      className="btn btn-bar"
                      onClick={() => scrollToId("contatti")}
                    >
                      Vieni a Trovarci
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Autolavaggio */}
          <section
            id="autolavaggio"
            className="section"
            aria-labelledby="autolavaggio-title"
          >
            <div className="section-inner section-auto">
              <div className="section-label">🚗 Autolavaggio</div>
              <div className="section-heading" id="autolavaggio-title">
                <h2>
                  3 Modi per un&apos;Auto.
                  <span className="section-heading-accent-auto"> Splendente.</span>
                </h2>
              </div>
              <p className="section-text">
                Non un semplice autolavaggio. Tre servizi diversi per ogni esigenza: dal
                lavaggio rapido self-service alla pulizia completa professionale. La tua
                auto esce come nuova, ogni volta.
              </p>

              <div className="auto-services-grid">
                {/* Servizio 1 */}
                <article className="auto-card">
                  <div>
                    <div className="auto-card-header">
                      <div className="auto-badge">01</div>
                    </div>
                    <div className="auto-service-name">Lavaggio Automatico</div>
                    <p className="auto-desc">
                      Portale automatico con programmi di lavaggio, cera e asciugatura.
                      Perfetto quando hai poco tempo: entri, scegli il programma e in pochi
                      minuti l&apos;auto è pronta.
                    </p>
                  </div>
                  <div className="auto-placeholder" style={{ padding: 0, background: "none" }}>
                    <img
                      src="/autolavaggio-automatico.jpg"
                      alt="Lavaggio automatico SevenSeven con auto sotto il portale"
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9px" }}
                    />
                  </div>
                </article>

                {/* Servizio 2 */}
                <article className="auto-card">
                  <div>
                    <div className="auto-card-header">
                      <div className="auto-badge">02</div>
                    </div>
                    <div className="auto-service-name">Box Manuale</div>
                    <p className="auto-desc">
                      Area self-service con lancia ad alta pressione, spazzola e prodotti
                      dedicati. Scegli tu come lavare la macchina, con tutto il necessario
                      sempre disponibile.
                    </p>
                  </div>
                  <div className="auto-placeholder" style={{ padding: 0, background: "none" }}>
                    <img
                      src="/autolavaggio-manuale.jpg"
                      alt="Box manuale SevenSeven con auto e idropulitrice"
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9px" }}
                    />
                  </div>
                </article>

                {/* Servizio 3 */}
                <article className="auto-card">
                  <div>
                    <div className="auto-card-header">
                      <div className="auto-badge">03</div>
                      <div className="auto-tag-premium">Premium</div>
                    </div>
                    <div className="auto-service-name">Lavaggio su Richiesta</div>
                    <p className="auto-desc">
                      Lavaggio completo studiato sulle tue esigenze: esterni, interni,
                      cerchi, tappezzeria, trattamenti specifici. Ci scrivi cosa ti serve e
                      prepariamo un servizio su misura.
                    </p>
                  </div>
                  <div className="auto-placeholder" style={{ padding: 0, background: "none" }}>
                    <img
                      src="/autolavaggio-mano.png"
                      alt="Operatore che lava a mano e cura gli interni dell'auto"
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9px" }}
                    />
                  </div>
                </article>
              </div>

              <div className="auto-cta-row">
                <a href={whatsappLavaggioUrl} className="btn btn-auto">
                  Prenota Lavaggio su WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Lattoneria */}
          <section
            id="lattoneria"
            className="section"
            aria-labelledby="lattoneria-title"
          >
            <div className="section-inner section-lattoneria">
              <div className="lattoneria-card">
                <div className="section-label">🔧 Lattoneria Ravennate</div>
                <div className="section-heading" id="lattoneria-title">
                  <h2>
                    Coperture, Grondaie
                    <span className="section-heading-accent-auto">
                      {" "}
                      e Lattoneria Edile.
                    </span>
                  </h2>
                </div>
                <p className="section-text">
                  Lattoneria Ravennate è la nostra divisione specializzata in coperture,
                  grondaie, pluviali e lattoneria edile su misura. Lavoriamo su tutto il
                  territorio di Ravenna e provincia. Sopralluogo e preventivo gratuito.
                </p>

                <div className="lattoneria-points">
                  <div className="lattoneria-point">
                    <span>🔧</span>
                    <span>Coperture e Tetti</span>
                  </div>
                  <div className="lattoneria-point">
                    <span>🏠</span>
                    <span>Grondaie e Pluviali</span>
                  </div>
                  <div className="lattoneria-point">
                    <span>🛡️</span>
                    <span>Bonifica Amianto</span>
                  </div>
                  <div className="lattoneria-point">
                    <span>📋</span>
                    <span>Preventivo Gratuito</span>
                  </div>
                </div>

                <div className="lattoneria-cta">
                  <a
                    href="https://lattoneriaravennate.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-auto"
                  >
                    Vai al Sito Lattoneria Ravennate →
                  </a>
                  <div className="lattoneria-inline">
                    oppure chiama <a href={telUrl}>+39 {telefono}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recensioni */}
          <section className="section" aria-labelledby="reviews-title">
            <div className="section-inner">
              <div className="section-label">Cosa dicono di noi</div>
              <div className="section-heading" id="reviews-title">
                <h2>Recensioni</h2>
              </div>
              <div className="reviews-grid">
                {recensioni.map((recensione, idx) => (
                  <article key={idx} className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <p>{recensione.testo}</p>
                    <div className="review-meta">
                      <span>{recensione.nome}</span>
                      <span>{recensione.piattaforma}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Contatti / Mappa */}
          <section
            id="contatti"
            className="section"
            aria-labelledby="contatti-title"
          >
            <div className="section-inner section-contacts">
              <div className="section-label">Contatti &amp; Orari</div>
              <div className="section-heading" id="contatti-title">
                <h2>Dove Siamo</h2>
              </div>

              <div className="contacts-layout">
                <div className="contacts-list">
                  <div>
                    <div className="contacts-label">Indirizzo</div>
                    <div>Via Naviglio, 22, 48123 Ravenna (RA)</div>
                  </div>

                  <div>
                    <div className="contacts-label">Telefono</div>
                    <a href={telUrl} className="contacts-phone">
                      +39 {telefono}
                    </a>
                  </div>

                  <div>
                    <div className="contacts-label">WhatsApp</div>
                    <a href={whatsappUrl} className="contacts-whatsapp">
                      +39 {whatsappNumber}
                    </a>
                  </div>

                  <div className="contacts-hours">
                  <div className="contacts-hour-row">
                      <div className="contacts-hour-label">☕ Bar</div>
                      <div>Lun–Sab 06:30–19:00 · Dom chiuso</div>
                    </div>
                    <div className="contacts-hour-row">
                      <div className="contacts-hour-label">🚗 Autolavaggio automatico</div>
                      <div>24 ore su 24, 7 giorni su 7</div>
                    </div>
                  </div>
                </div>

                <div className="contacts-map">
                  <iframe
                    title="Mappa SevenSeven"
                    src="https://www.google.com/maps?q=Via+Naviglio,+22,+48123+Ravenna+RA&output=embed"
                    style={{ border: 0, width: "100%", height: "100%", borderRadius: "12px" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section" aria-labelledby="faq-title">
            <div className="section-inner">
              <div className="section-label">Domande frequenti</div>
              <div className="section-heading" id="faq-title">
                <h2>FAQ</h2>
              </div>

              <div className="faq-list">
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={item.q} className="faq-item">
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span className="faq-toggle">{isOpen ? "–" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
              <div className="footer-top">
              <div className="footer-logo">SevenSeven</div>
              <div className="footer-services">
                <span>Bar</span>·<span>Autolavaggio</span>·
                  <a
                    href="https://lattoneriaravennate.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lattoneria Ravennate ↗
                </a>
              </div>
              <div className="footer-contacts">
              <span>Via Naviglio, 22, 48123 Ravenna (RA)</span>
                <span>
                  Tel: <a href={telUrl}>+39 {telefono}</a>
                </span>
              </div>
            </div>

              <div className="footer-bottom">
              <div>
                © 2026 SevenSeven — Via Naviglio, 22, 48123 Ravenna (RA)
                <br />
                Questo sito non utilizza cookie di profilazione.
                <br />
                Vengono utilizzati esclusivamente cookie tecnici necessari al
                funzionamento del sito.
              </div>
              <div className="footer-credits">
                Sito realizzato da{" "}
                <a href="https://ecfmedia.it" target="_blank" rel="noopener noreferrer">
                  ECF Media
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;

