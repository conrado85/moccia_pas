import { type HeroCenteredCuerpo } from "../types/HeroCentered.types";
import { type CuerpoTarjetas } from "../types/heroSections.types";

export const presentacion: HeroCenteredCuerpo = {
  volanta: "SEGURO DE AUTO · 22 COMPAÑÍAS · COTIZÁ AL TOQUE",
  titulo: "Cotizá tu seguro de auto online y elegí entre 22 compañías.",
  bajada:
    "Cargás los datos de tu auto y vemos en pantalla las opciones de cada compañía. Si te cierra el precio, contratás. Si querés revisar, te atiende un productor.",
  copete: "6 años - 22 companias - Matricula SSN XXXXX",
  boton: "Cotizar ahora ->",
  boton2: "Hablemos por whatsapp",
  navegacion: "/seguros/car",
  navegacion2: "/cotizar",
};

export const companias: HeroCenteredCuerpo = {
  volanta: "02 · COMPAÑÍAS PARA AUTO",
  titulo: "Cotizamos en 22 compañías. Estas son las más fuertes en autos.",
  bajada:
    "Sancor, Federación Patronal, Allianz, Mapfre, Provincia, Nación, Galicia, La Meridional, La Mercantil Andina, SMG, San Cristóbal, ATM, Rivadavia, Berkley y más.",
  boton: "Var listado completo",
  navegacion: "/seguros/motorbike",
};

export const contacto: CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Llamanos al WhatsApp",
    bajada:
      "+54 9 11 3700 3744. Te respondemos en el día hábil y, si es urgente, antes.",
    icon: <span className="h-20 w-20 p-2  text-gray-400">1</span>,
  },
  {
    id: 2,
    subtitulo: "Te guiamos en la denuncia",
    bajada:
      "Te decimos qué papeles necesitás, qué fotos sacar y cómo redactar la denuncia para que la compañía no la rechace.",
    icon: <span className="h-20 w-20 p-2 rounded-xl text-gray-400">2</span>,
  },
  {
    id: 3,
    subtitulo: "Seguimos el siniestro hasta el cierre",
    bajada:
      "Le hacemos el seguimiento a la compañía. Si demoran o si ofrecen menos de lo que corresponde, peleamos por vos.",
    icon: <span className="h-20 w-20 p-2 rounded-xl text-gray-400">3</span>,
  },
];

export const saber: CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Qué cubre realmente el todo riesgo (y qué no).",
    bajada:"Es la cobertura más completa, pero tiene franquicia para el daño parcial. Si chocás vos solo contra un poste, pagás esa franquicia.",
    navegacion: "/seguros/motorbike",
    boton: "Leer la nota completa ->",
  },
  {
    id: 2,
    subtitulo: "Por qué pasar por un productor no te cuesta más.",
    bajada: "Cotizás contra 22 compañías y te quedás con asesoramiento real cuando pasa algo. El precio es el mismo que yendo directo.",  
    navegacion: "/seguros/motorbike",
    boton: "Productor vs 0800 ->",

},
  {
    id: 3,
    subtitulo: "Qué hacer en los primeros 30 minutos después de un siniestro.",
    bajada:
      "La denuncia mal hecha es la principal causa de rechazo. Hay tres cosas que tenés que hacer sí o sí antes de moverte del lugar.",
    navegacion: "/seguros/motorbike",
    boton: "Que hacer en un siniestro ->",

  },
];
