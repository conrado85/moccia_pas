import { useState } from "react";
import parse from "html-react-parser";
import QuoteForm from "./components/QuoteForm.jsx";

const template = document.getElementById("page-template");
const page = new DOMParser().parseFromString(template.innerHTML, "text/html");
const sections = Array.from(page.querySelectorAll("main > div > section"));
const footerMarkup = page.querySelector("footer").outerHTML;

const navigation = [
  { label: "Coberturas", href: "#coberturas" },
  { label: "Cotizar Seguro", href: "#cotizador-section" },
  { label: "Testimonios", href: "#testimonials-section" },
  { label: "Contacto", href: "#cotizador-section" },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Moccia Pas, inicio">
      moccia pas
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href + item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="quote-link" href="#cotizador-section">
            Cotizar ahora <span aria-hidden="true">→</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Navegación móvil"
        >
          {navigation.map((item) => (
            <a key={item.href + item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionContent({ markup }) {
  return parse(markup, {
    replace(node) {
      if (
        node.type === "tag" &&
        node.name === "form" &&
        node.attribs.id === "insuranceForm"
      ) {
        return <QuoteForm className={node.attribs.class} />;
      }
    },
  });
}

function PageSection({ markup }) {
  return <SectionContent markup={markup} />;
}

function Footer() {
  return <SectionContent markup={footerMarkup} />;
}

export default function App() {
  return (
    <>
      <Header />
      <main className="page-content" id="inicio">
        <PageSection markup={sections[0].outerHTML} />
        <PageSection markup={sections[1].outerHTML} />
        <PageSection markup={sections[2].outerHTML} />
        <PageSection markup={sections[3].outerHTML} />
        <PageSection markup={sections[4].outerHTML} />
        <PageSection markup={sections[5].outerHTML} />
        <PageSection markup={sections[6].outerHTML} />
      </main>
      <Footer />
    </>
  );
}