import Card from "./Card";

export default function QuoteGenerator() {
  return (
    <div className=" bg-blue-100 pb-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue text-center pt-10"> 
        Cotizá tu auto o tu moto
      </h2>
      <p className="py-6 text-brand-blue text-center">
        Cargás los datos, comparamos contra  compañías y te mostramos las
        opciones en pantalla. Si te cierra el precio, contratás. Si querés
        revisar, te atiende un PAS.
      </p>
      <div className=" lg:w-3/4 mx-auto bg-blue-50 p-10  shadow-lg">
        <div className="lg:max-w-4xl mx-auto lg:text-center">
          <h2 className="text-4xl lg:text-4xl font-bold text-brand-blue mb-6">
            ¿Qué seguro querés Cotizar?
          </h2>
          <p className="py-6 text-brand-blue text-center">
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
