import { type CuerpoTarjetas } from "../types/heroSections.types";
import { Shield, Car, Umbrella } from "lucide-react";

export const porque : CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Cotizá al toque",
    bajada: "Auto y moto contra 22 compañías en pantalla. Sin esperar mail, sin tener que llamar primero.",
    icon: <Shield  className="h-12 w-12 p-2 rounded-xl text-blue-600  bg-blue-50 " />
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