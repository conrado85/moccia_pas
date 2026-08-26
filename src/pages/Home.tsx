import Hero from '../components/Hero'
import HeroSections from '../components/HeroSections'
import QuoteGenerator from '../components/QuoteGenerator'
//import {type CuerpoTarjetas , type CuerpoCabeceras} from '../components/HeroSections'

const tarjetas = [
 {
   id: 1,
   subtitulo: 'subtitulo1',
   bajada: 'bajada1',
   icon: 'icon1'
 },{  
  id: 2,
  subtitulo: 'subtitulo2',
  bajada: 'bajada2',
  icon: 'icon2'
 },{
  id: 3,
  subtitulo: 'subtitulo3',
  bajada: 'bajada3',
  icon: 'icon3'
 },{
  id: 4,
  subtitulo: 'subtitulo4',
  bajada: 'bajada4',
  icon: 'icon4'
 }
] ; 





export default function Home() {
  return (
    <div>
      <Hero />
      <QuoteGenerator />
      <HeroSections
  cabecera={{
    volanta: "Seguros",
    titulo: "Elegí la cobertura que necesitás",
  }}
  tarjetas={tarjetas}
/>

    </div>
  )
}
