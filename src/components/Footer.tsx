import { Link } from "react-router-dom";
import { FaInstagram , FaLinkedin , FaWhatsapp } from "react-icons/fa";

export default function Footer() {


  const navSecure = [
    { name: "Auto", path: "/seguros/car" },
    { name: "Moto", path: "/seguros/motorbike" },
    { name: "Hogar", path: "/seguros/homeInsurance" },
    { name: "Comercio", path: "/seguros/commerce" },
    { name: "Caucion Alquiler", path: "/seguros/rental" },
    { name: "Accidentes Personales", path: "/seguros/personal" },
    { name: "Consorcio", path: "/seguros/consortium" },
  ];
  // const navCompany = [
  //   { name: "ART", path: "/empresa/art" },
  //   { name: "Flotas", path: "/empresa/flotas" },
  //   { name: "Responsabilidad Civil", path: "/empresa/responsabilidad-civil" },
  //   { name: "Caucion Obras", path: "/empresa/caucion-obras" },
  //   { name: "Trasporte", path: "/empresa/trasporte" },
  //   { name: "Incendio", path: "/empresa/incendio" },
  //   { name: "Proxis", path: "/empresa/proxis" },
  // ];


  return (
    <footer className="footer sm:footer-horizontal bg-brand-blue text-white p-10">
      <aside>
        <p className="font-mea-culpa m-6 text-2xl text-white leading-none">
          <span className="font-mea-culpa text-5xl leading-none pb-32">
          Moccia Pas
        </span><br />
          Productor Asesor de Seguros <br />
        </p>
        <p className="text-xs text-white leading-none">
          Productores Asesores de Seguros con 6 años<br /> en William C. Morris.
          <br />
         MATRICULA SSN 82379
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Seguros</h6>
        {navSecure.map((item) => (
          <Link key={item.path} to={item.path} className="link link-hover">
            {item.name}
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Contacto</h6>
        <a href="mailto:mocciapasmorris@mocciapas.com" className="hover:text-primary transition-colors break-all">mocciapasmorris@mocciapas.com</a>
        <li className="menu hover:text-primary transition-colors p-0">Lunes a viernes de 10:30 a 17:00</li>
        <li className="menu hover:text-primary transition-colors p-0">Sabado 10:30 a 13:00</li>
      </nav>
       <nav className="flex flex-col items-center">
        <h6 className="footer-title">Seguinos</h6>
        <div className="flex flex-row gap-4">
        <a href="https://www.instagram.com/mocciapas/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaInstagram className="w-10 h-10" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaLinkedin className="w-10 h-10" /></a>
        <a href="https://wa.me/5491158358414" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaWhatsapp className="w-10 h-10" /></a>

        </div>
      </nav>
     

    </footer>
  );
}
        
