
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import Cotizador from './pages/Cotizador';
import NotFound from './pages/NotFound ';
import About from './pages/About';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import Car from './pages/Car';
import Motorbike from './pages/Motorbike';
import HomeInsurance from './pages/HomeInsurance';
import Rental from './pages/Rental';
import Personal from './pages/Personal';
import Consortium from './pages/Consortium';
import Commerce from './pages/commerce';
import Art from './pages/Art';
import Flotas from './pages/Flotas';
import ResponsabilidadCivil from './pages/ResponsabilidadCivil';
import CaucionObras from './pages/CaucionObras';
import Trasporte from './pages/Trasporte';
import Incendio from './pages/Incendio';
import Proxis from './pages/Proxis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre con el Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* index representa la página principal (/) */}
          <Route index element={<Home />} /> 
          
          {/* Rutas Hijas */}
          <Route path="cotizar" element={<Cotizador />} />
          <Route path="about" element={<About />} />
          <Route path="learn" element={<Learn />} />
          <Route path="contact" element={<Contact />} />
          {/* Rutas para la sección de seguros */}
          <Route path="seguros/car" element={<Car />} />
          <Route path="seguros/motorbike" element={<Motorbike />} />
          <Route path="seguros/homeInsurance" element={<HomeInsurance />} />
          <Route path="seguros/rental" element={<Rental />} />
          <Route path="seguros/personal" element={<Personal />} />
          <Route path="seguros/consortium" element={<Consortium />} />
          <Route path="seguros/commerce" element={<Commerce />} />
          {/* Rutas para la sección de empresa */}
          <Route path="empresa/art" element={<Art />} />
          <Route path="empresa/flotas" element={<Flotas />} />
          <Route path="empresa/responsabilidad-civil" element={<ResponsabilidadCivil />} />
          <Route path="empresa/caucion-obras" element={<CaucionObras />} />
          <Route path="empresa/trasporte" element={<Trasporte />} />
          <Route path="empresa/incendio" element={<Incendio />} />
          <Route path="empresa/proxis" element={<Proxis />} />

          {/* Ruta para manejar errores 404 dentro del mismo layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;