import Hero from "../components/Hero";
import HeroSections from "../components/HeroSections";
import QuoteGenerator from "../components/QuoteGenerator";
import { porque, queaseguramos } from "../data/landingpagedata";

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
    </div>
  );
}
