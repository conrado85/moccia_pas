import { CotizadorWhatsApp } from "../components/CotizadorWhatsApp";

export default function Cotizador() {
  return (
    <div className="hero  flex flex-col pb-20 bg-blue-100 min-h-screen">
     
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 m-3">
        Cotizador de seguros <span className="text-blue-600">Moccia PAS</span>
      </h2>
      <p className="py-6 text-gray-600">
        Cargás los datos, comparamos contra 22 compañías y te mostramos las
        opciones en pantalla. Si te cierra el precio, contratás. Si querés
        revisar, te atiende un PAS.
      </p>
      <div className="hero-content text-center bg-blue-50 p-5 rounded-lg shadow-lg">
        <CotizadorWhatsApp />
      </div>
    </div>
  );
}
