import Hero from "../components/Hero";
import HeroSections from "../components/HeroSections";
import QuoteGenerator from "../components/QuoteGenerator";
import { porque, queaseguramos , empresa } from "../data/landingpagedata";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <QuoteGenerator />
      <HeroSections
        cabecera={{
          volanta: "Por que Moccia pas?",
          titulo: "Tres cosas que no encontrás en un 0800.",
        }}
        tarjetas={porque}
      />
      <div className="bg-blue-100">
        <HeroSections
          cabecera={{
            volanta: "QUÉ ASEGURAMOS?",
            titulo: "Lo que querés cubrir, lo cotizamos.",
          }}
          tarjetas={queaseguramos}
        />
      </div>
      <div className="max-w-3/4 flex flex-col mx-auto pt-10 pb-5 px-4 ">
        <p className="py-2 text-xs text-gray-500">companias</p>
        <h2 className="text-4xl lg:text-5xl  text-gray-800 mb-3">
          Trabajamos con las 22 compañías más serias del mercado.
        </h2>
        <p className="py-3 text-gray-600">
          Cotizamos contra todas en cada consulta. Sancor, Federación Patronal,
          Allianz, Mapfre, Galicia, Provincia, Nación y catorce más.
        </p>
        <button className="btn btn-primary w-56 bg-brand-blue mb-5 rounded-full">
          ver las companias
        </button>
      </div>
      <div className="max-w-3/4 flex flex-col mx-auto pt-10 pb-5 px-4 ">
        <p className="py-2 text-xs text-gray-500">nuestra historia</p>
        <h2 className="text-4xl lg:text-5xl  text-gray-800 mb-3">
          Por qué hacemos lo que hacemos.
        </h2>
        <p className="py-3 text-gray-600">
          Hace más de 30 años, los abuelos de Tomás sufrieron el incendio de su casa en Mar del Plata. Estaba asegurada, pero la póliza estaba mal hecha: la indemnización no alcanzó ni para reconstruir un 20%. A partir de eso, el padre de Victorio decidió estudiar seguros para que a nadie más le pasara lo mismo. Así nació este estudio que hoy sigue Tomás, con el mismo trato cercano y la misma obsesión: explicarte la póliza antes de que la firmes.
        </p>
        <button className="btn btn-primary w-56 bg-brand-blue mb-5 rounded-full">
          Conoce Moccia PAS
        </button>
      </div>
      <div className="bg-blue-100">
        <HeroSections
          cabecera={{
            volanta: "para tu empresa",
            titulo: "Tu ART, tu flota y tu galpón con un solo mensaje.",
            copete: "6 años acompañando pymes del AMBA con ramos pesados. Te atiende un PAS, no un comercial rotativo.",
          }}
          tarjetas={empresa}
        />
      </div>

      
    </div>
  );
}
