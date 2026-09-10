import { type HeroCenteredCuerpo } from "../types/HeroCentered.types";
import { type CuerpoTarjetas } from "../types/heroSections.types";
import { type TableRow, type TableColumn } from "../types/table.types";




export const presentacion: HeroCenteredCuerpo = {
  volanta: "SEGURO DE AUTO · COTIZÁ AL TOQUE",
  titulo: "Cotizá tu seguro de auto online y elegí entre compañías.",
  bajada:
    "Cargás los datos de tu auto y vemos en pantalla las opciones de cada compañía. Si te cierra el precio, contratás. Si querés revisar, te atiende un productor.",
  copete: "Desde 2019 con oficina en Zona Oeste  - MATRICULA SSN 82379",
  boton2: "Hablemos por whatsapp",
  navegacion2: "/cotizar",
};

export const companias: HeroCenteredCuerpo = {
  volanta: "02 · COMPAÑÍAS PARA AUTO",
  titulo: "Cotizamos en  compañías. Estas son las más fuertes en autos.",
  bajada:
    "Sancor, Federación Patronal, Allianz, Mapfre, Provincia, Nación, Galicia, La Meridional, La Mercantil Andina, SMG, San Cristóbal, ATM, Rivadavia, Berkley y más.",
  boton: "Var listado completo",
  navegacion: "/cotizar",
};

export const contacto: CuerpoTarjetas[] = [
  {
    id: 1,
    subtitulo: "Llamanos al WhatsApp",
    bajada:
      " 11 5835-8414. Te respondemos en el día hábil y, si es urgente, antes.",
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
    navegacion: "/cotizar",
    boton: "Leer la nota completa ->",
  },
  {
    id: 2,
    subtitulo: "Por qué pasar por un productor no te cuesta más.",
    bajada: "Cotizás contra  compañías y te quedás con asesoramiento real cuando pasa algo. El precio es el mismo que yendo directo.",  
    navegacion: "/cotizar",
    boton: "Productor vs 0800 ->",

},
  {
    id: 3,
    subtitulo: "Qué hacer en los primeros 30 minutos después de un siniestro.",
    bajada:
      "La denuncia mal hecha es la principal causa de rechazo. Hay tres cosas que tenés que hacer sí o sí antes de moverte del lugar.",
    navegacion: "/cotizar",
    boton: "Que hacer en un siniestro ->",

  },
];

export const rows : TableRow[] = [
  {
    id: 1,
    cobertura: "Daños a terceros (autos, personas, cosas)",
    responsabilidadCivil: "included",
    terceroCompleto:"included" ,
    todoRiesgo: "included",
  },
  {
    id: 2,
    cobertura: "Robo total",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 3,
    cobertura: "Robo parcial (rueda y batería)",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 4,
    cobertura: "Incendio total",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 5,
    cobertura: "Incendio parcial",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included" ,
    todoRiesgo: "included",
  },
  {
    id: 6,
    cobertura: "Destrucción total por choque",
    responsabilidadCivil: "excluded",
    terceroCompleto: "plan",
    todoRiesgo: "included",
  },
  {
    id: 7,
    cobertura: "Daño parcial a tu auto (con franquicia)",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "included",
  },
  {
    id: 8,
    cobertura: "Cristales y cerraduras",
    responsabilidadCivil: "excluded",
    terceroCompleto: "plan",
    todoRiesgo: "included",
  },
  {
    id: 9,
    cobertura: "Granizo",
    responsabilidadCivil: "excluded",
    terceroCompleto: "plan",
    todoRiesgo: "included",
  },
  {
    id: 10,
    cobertura: "Servicio de grúa",
    responsabilidadCivil: "included",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
];

export const columns: TableColumn<TableRow>[] = [
  {
    key: "cobertura",
    label: "Cobertura",
  },
  {
    key: "responsabilidadCivil",
    label: "Responsabilidad civil",
  },
  {
    key: "terceroCompleto",
    label: "Terceros completo",
  },
  {
    key: "todoRiesgo",
    label: "Todo riesgo",
  },
];
