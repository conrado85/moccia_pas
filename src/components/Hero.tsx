import imagen from "../assets/Hero-principal.png";
export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${imagen})`,
      }}
    >
      <div className="hero-content md:pr-50 lg:pr-130 text-neutral-content">
        <div className="max-w-2xl ">
          <p className="py-2 text-xs text-brand-blue ">
            PRODUCTOR ASESOR DE SEGUROS · MATRICULA SSN 82379
          </p>
          <h1 className="mb-5 text-5xl text-brand-blue font-bold">
            Cotizá el seguro de auto o moto con nosotros.
          </h1>
          <p className="mb-5 text-brand-blue">
            Comparamos las mejores compañías para encontrar una cobertura que se
            adapte a vos, a tu vehículo y a tu bolsillo. Atención personalizada,
            respuesta rápida, con minimos datos. Pedí tu cotización hoy y manejá
            tranquilo. Desde 2019 con oficina en Zona Oeste, Aseguramos en todo
            el pais.
          </p>
          <button className="btn btn-success rounded-full">
            Hablemos de tu seguro
          </button>
        </div>
      </div>
    </div>
  );
}
