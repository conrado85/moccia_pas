
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import Cotizador from './pages/Cotizador';
import NotFound from './pages/NotFound ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre con el Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* index representa la página principal (/) */}
          <Route index element={<Home />} /> 
          
          {/* Rutas Hijas (ej: /cotizar) */}
          <Route path="cotizar" element={<Cotizador />} />
          
          {/* Ruta para manejar errores 404 dentro del mismo layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;