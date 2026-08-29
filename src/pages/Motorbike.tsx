import TableMotorbike from "../components/TableMotorbike";
import HeroCentered from "../components/HeroCentered";
import { presentacion, companias, contacto, saber } from "../data/cardata";
import HeroSections from "../components/HeroSections";

export default function Motorbike() {
  return (
    <section className="bg-base-primario">
      <HeroCentered cuerpo={presentacion} />
      <div className="lg:max-w-3/4 flex flex-col mx-auto pt-10 pb-5 px-4 ">
        <TableMotorbike />
        <p>
          Totales cubre RC, Robo Total, Incendio Total y Daño Total. Terceros Completos suma el resto de coberturas adicionales.
        </p>
      </div>
      <HeroCentered cuerpo={companias} />
      <HeroSections
        cabecera={{
          volanta: "03 · CUANDO PASA ALGO",
          titulo: "Atencion personalizada, no un 0800.",
          copete:
            "La denuncia y el seguimiento del siniestro los hacemos con vos. Tres pasos:",
        }}
        tarjetas={contacto}
      />
      <HeroSections
        cabecera={{
          volanta: "04 · ANTES DE COTIZAR TE CONVIENE SABER",
          titulo: "Tres cosas que te van a ahorrar plata.",
          copete:
            "No es FAQ. Son cosas que aprendimos en 30 años y que casi nadie te explica antes de firmar.",
        }}
        tarjetas={saber}
      />
    </section>
  );
}
