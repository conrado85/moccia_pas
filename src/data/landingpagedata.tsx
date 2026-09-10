import { type CuerpoTarjetas } from "../types/heroSections.types";
import { Shield,
         Car,
         Truck,
         FileText,
         Store,
         Scale,
         Forklift,
         MessageSquare,
         Zap,
         UserRoundCheck,
         Bike,
         House,
         Package2,
         Flame,

         } from "lucide-react";


export const porque : CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Cotizá al toque",
    bajada: "Auto y moto contra compañías en pantalla. Sin esperar mail, sin tener que llamar primero.",
    icon: <Zap  className="h-20 w-20 p-2 rounded-xl text-gray-400" />,
    
  },
  {
    id: 2,
    subtitulo: "Te respondemos en el día",
    bajada: "Hogar, comercio, ART, caución y todo el resto: cotización por WhatsApp el mismo día hábil.",
    icon: <MessageSquare className="h-20 w-20 p-2 rounded-xl text-gray-400" />,
  },
  {
    id: 3,
    subtitulo: "Te atiende un moccia pas",
    bajada: "Cuando pasa algo, no te atiende un robot ni un comercial rotativo. Te atendemos con un personal matriculado.",
    icon: <UserRoundCheck className="h-20 w-20 p-2 rounded-xl text-gray-400  " />,
  },
];

export const queaseguramos : CuerpoTarjetas[] =[
  {
    id: 1,
    subtitulo: "Auto",
    bajada: "Resposabilidad civil, tercero completo o todo riesgo. comparado contra otras companias.",
    icon: <Car  className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    cotizar: "Cotiza online",
    boton:"ver mas",
  },
  {
    id: 2,
    subtitulo: "Moto",
    bajada: "Cualquier cilindrada, cualquier uso. Cotizas desde el celular y cerras con el seguro que mejor se ajuste a tus necesidades.",
    icon: <Bike className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    cotizar: "Cotiza online",
    boton:"ver mas",
  },
  {
    id: 3,
    subtitulo: "Hogar",
    bajada: "Incendio, robo, daños electricos y RC. Cotizacion por WhatsApp el mismo dia habil.",
    icon: <House className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver mas",
  },
  {
    id: 4,
    subtitulo: "Comercio",
    bajada: "Para tu local: incendio, robo, daños electricos y RC frente a clientes y cristales.",
    icon: <Store className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver mas",
  },
  {
    id: 5,
    subtitulo: "Caucion alquiles",
    bajada: "Alquila sin garantia propietaria. Emitimos por companias con la garantia propietaria.",
    icon: <FileText className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver mas",
  },
]


export const empresa : CuerpoTarjetas[] =[
  {
    id: 1,
    subtitulo: "ART",
    bajada: "Asociart, Experta, Provincia ART, SMG ART y mas.",
    icon: <Shield  className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
  {
    id: 2,
    subtitulo: "FLOTAS",
    bajada: "Desde 3 vehiculos en adelante, con descuentos por volumen.",
    icon: <Truck className="h-12 w-12 p-2 rounded-xl text-blue-600 " />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
  {
    id: 3,
    subtitulo: "Responsabilidad Civil",
    bajada: "RC empresas,RC profecionales, RC contractual.",
    icon: <Scale className="h-12 w-12 p-2 rounded-xl text-blue-600 " />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
  {
    id: 4,
    subtitulo: "Caución obras",
    bajada: "Garantias de licitacion, anticipo, ejecucion.",
    icon: <Forklift className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
  {
    id: 5,
    subtitulo: "Transporte",
    bajada: "Mercaderia en transito nacional e internacional.",
    icon: <Package2  className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
  {
    id: 6,
    subtitulo: "Incendio",
    bajada: "Galpones, depositos y comercios grandes.",
    icon: <Flame className="h-12 w-12 p-2 rounded-xl text-blue-600" />,
    navegacion: "/cotizar",
    boton:"ver ramo ->"
  },
]

