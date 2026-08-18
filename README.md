# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.# 🛡️ Moccia PAS — Landing Page Web

Sitio web institucional moderno para **Moccia PAS (Productores y Asesores de Seguro)**. El objetivo principal del proyecto es brindar una presencia digital profesional, clara y de alta conversión que permita a los clientes conocer las distintas coberturas de seguros, acceder a herramientas útiles y solicitar cotizaciones personalizadas de forma ágil.

---

## 🚀 Tecnologías Utilizadas

* **Framework & Build Tool:** [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) (TypeScript)
* **Estilos & UI:** [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
* **Enrutamiento:** [React Router](https://reactrouter.com/) *(Enfoque Estructural / Rutas Anidadas)*
* **Iconos:** [Lucide React](https://lucide.dev/)
* **Gestor de Paquetes:** `pnpm`

---

## ✨ Características Principales

* 🎨 **Diseño Moderno & Elegante:** Combinación tipográfica institucional (*Montserrat* para lecturas generales y *Mea Culpa* para la identidad de marca).
* 📱 **Diseño 100% Responsive:** Adaptabilidad fluida a dispositivos móviles, tablets y computadoras de escritorio.
* 🧭 **Navegación Dinámica:** Cabecera adhesiva (`sticky navbar`) optimizada para ocultarse dinámicamente en scroll en pantallas móviles.
* 📋 **Cotizador Integrado:** Formulario y llamadas a la acción con redirección rápida a canales directos de atención.
* 🏛️ **Sección de Coberturas:** Tarjetas informativas para seguros automotores, hogar, vida, comercio y ART.

---

## 🛠️ Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/moccia-pas.git](https://github.com/tu-usuario/moccia-pas.git)
   cd moccia-pas

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
