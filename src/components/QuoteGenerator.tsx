import Card from "./ui/Card";

export default function QuoteGenerator() {
  return (
    <div className=" bg-blue-100 min-h-screen">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center pt-10"> 
        Cotizá tu auto o tu moto
      </h2>
      <p className="py-6 text-gray-600 text-center">
        Cargás los datos, comparamos contra 22 compañías y te mostramos las
        opciones en pantalla. Si te cierra el precio, contratás. Si querés
        revisar, te atiende un PAS.
      </p>
      <div className=" w-3/4 mx-auto bg-blue-50 p-10 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ¿Qué seguro querés <span className="text-blue-600">Cotizar?</span>
          </h2>
          <p className="py-6 text-gray-600">
            Elegí el tipo de vehículo para obtener tu cotización personalizada
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
