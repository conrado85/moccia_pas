import Hero from "../components/Hero";
import HeroSections from "../components/HeroSections";
import QuoteGenerator from "../components/QuoteGenerator";
import { porque } from "../data/landingpage";

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
    </div>
  );
}
