import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Soluciones } from "./pages/Soluciones";
import { CasosExito } from "./pages/CasosExito";
import { Marcas } from "./pages/Marcas";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "soluciones", Component: Soluciones },
      { path: "casos-exito", Component: CasosExito },
      { path: "marcas", Component: Marcas },
      { path: "nosotros", Component: Nosotros },
      { path: "contacto", Component: Contacto },
    ],
  },
]);
