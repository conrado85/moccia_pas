import TableCar from "../components/TableCar";
import HeroCentered from "../components/HeroCentered";
import { presentacion , companias, contacto , saber } from "../data/cardata";
import HeroSections from "../components/HeroSections";


export default function Car() {
  return (
    <section className="bg-base-primario">
      <HeroCentered cuerpo={presentacion}  />
      <div className="max-w-7xl flex flex-col mx-auto pt-10 pb-5 px-4 ">
        <TableCar />
        <p>
          La franquicia es lo que pagás vos cuando hay un daño parcial (como por
          ejemplo un choque): tengas o no la culpa, tu compañía te paga el
          arreglo y vos la franquicia. Cuanto más alta, más barata la póliza.
        </p>
      </div>
      <HeroCentered cuerpo={companias} />
       <HeroSections
              cabecera={{
                volanta: "03 · CUANDO PASA ALGO",
                titulo: "Atencion personalizada, no un 0800.",
                copete:"La denuncia y el seguimiento del siniestro los hacemos con vos. Tres pasos:",
              }}
              tarjetas={contacto}
            />
             <HeroSections
              cabecera={{
                volanta: "04 · ANTES DE COTIZAR TE CONVIENE SABER",
                titulo: "Tres cosas que te van a ahorrar plata.",
                copete:"No es FAQ. Son cosas que aprendimos con los años y que casi nadie te explica antes de firmar.",
              }}
              tarjetas={saber}
            />
    </section>
  );
}

          
