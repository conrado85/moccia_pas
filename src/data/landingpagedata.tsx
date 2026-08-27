import { type CuerpoTarjetas } from "../types/heroSections.types";
import { Shield, Car, Umbrella } from "lucide-react";


export const porque : CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Cotizá al toque",
    bajada: "Auto y moto contra 22 compañías en pantalla. Sin esperar mail, sin tener que llamar primero.",
    icon: <Shield  className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    
  },
  {
    id: 2,
    subtitulo: "Te respondemos en el día",
    bajada: "Hogar, comercio, ART, caución y todo el resto: cotización por WhatsApp el mismo día hábil.",
    icon: <Car className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
  },
  {
    id: 3,
    subtitulo: "Te atiende un moccia pas",
    bajada: "Cuando pasa algo, no te atiende un robot ni un comercial rotativo. Te atendemos con un personal matriculado.",
    icon: <Umbrella className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
  },
];

export const queaseguramos : CuerpoTarjetas[] =[
  {
    id: 1,
    subtitulo: "Auto",
    bajada: "Resposabilidad civil, tercero completo o todo riesgo. comparado contra otras companias.",
    icon: <Shield  className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    navegacion: "/seguros/car",
    cotizar: "Cotiza online",
  },
  {
    id: 2,
    subtitulo: "Moto",
    bajada: "Cualquier cilindrada, cualquier uso. Cotizas desde el celular y cerras con el seguro que mejor se ajuste a tus necesidades.",
    icon: <Car className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    navegacion: "/seguros/motorbike",
    cotizar: "Cotiza online",
  },
  {
    id: 3,
    subtitulo: "Hogar",
    bajada: "Incendio, robo, daños electricos y RC. Cotizacion por WhatsApp el mismo dia habil.",
    icon: <Umbrella className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    navegacion: "/seguros/homeInsurance",
  },
  {
    id: 4,
    subtitulo: "Comercio",
    bajada: "Para tu local: incendio, robo, daños electricos y RC frente a clientes y cristales.",
    icon: <Umbrella className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    navegacion: "/seguros/commerce",
  },
  {
    id: 5,
    subtitulo: "Caucion alquiles",
    bajada: "Alquila sin garantia propietaria. Emitimos por companias con la garantia propietaria.",
    icon: <Umbrella className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />,
    navegacion: "/seguros/rental",
  },
]

