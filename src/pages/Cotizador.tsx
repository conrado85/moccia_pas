import { CotizadorWhatsApp } from "../components/CotizadorWhatsApp";
import  imagen  from "../assets/Hero-principal.png";
export default function Cotizador() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${imagen})`,
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-neutral-content lg:pr-130 lg:pt-20 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-brand-blue font-bold">Cotizá tu auto o  moto </h1>
          <p className="mb-5 text-brand-blue">
            Carga los mínimos datos y a la brevedad te enviamos tu presupuesto.
          </p>
          <CotizadorWhatsApp />
        </div>
      </div>
    </div>
  );
}
