
import { Link } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    { name: "Aprender", path: "/learn" },
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ];
  const navSecure = [
    { name: "Auto", path: "/seguros/car" },
    { name: "Moto", path: "/seguros/motorbike" },
    { name: "Hogar", path: "/seguros/homeInsurance" },
    { name: "Comercio", path: "/seguros/commerce" },
    { name: "Caucion Alquiler", path: "/seguros/rental" },
    { name: "Accidentes Personales", path: "/seguros/personal" },
    { name: "Consorcio", path: "/seguros/consortium" },
  ];
  const navCompany = [
    { name: "ART", path: "/empresa/art" },
    { name: "Flotas", path: "/empresa/flotas" },
    { name: "Responsabilidad Civil", path: "/empresa/responsabilidad-civil" },
    { name: "Caucion Obras", path: "/empresa/caucion-obras" },
    { name: "Trasporte", path: "/empresa/trasporte" },
    { name: "Incendio", path: "/empresa/incendio" },
    { name: "Proxis", path: "/empresa/proxis" },
  ];


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Moccia Pas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Seguros</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                {navSecure.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
           <li>
            <details>
              <summary>Empresa</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                {navCompany.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {navItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Cotizar</a>
      </div>
    </div>
  );
}
