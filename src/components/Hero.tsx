import imagen from "../assets/hero-illustration.avif";
export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imagen} className="max-w-1/2 rounded-lg " />
        <div>
          <p className="py-2 text-xs text-gray-500">
            PRODUCTOR ASESOR DE SEGUROS · MATRÍCULA SSN xxxxx
          </p>

          <h1 className="text-5xl font-bold">
            Cotizá tu auto o tu moto al toque contra otras compañías.
          </h1>
          <p className="py-6">
            6 años en William C.Morris, asegurando AMBA. Te respondemos en el
            día todo lo demás.
          </p>
          <button className="btn btn-primary bg-brand-blue mr-3 rounded-full">Cotizar ahora</button>
          <button className="btn btn-success rounded-full">Hablemos de tu seguro</button>

        </div>
      </div>
    </div>
  );
}
