import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import incomsatLogo from '../../assets/a98b4a391ec1523e228782f615f8992c0c2b51aa.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={incomsatLogo} alt="INCOMSAT" className="mb-4 h-12 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-gray-300">
              Soluciones integrales IT para Empresas y Corporaciones. 25 anos impulsando la
              transformacion digital.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Soluciones</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Consultoria IT
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Redes y Networking
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Data Center
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Seguridad Electronica
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Help Desk 24/7
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/nosotros" className="transition-colors hover:text-cyan-400">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/casos-exito" className="transition-colors hover:text-cyan-400">
                  Casos de Exito
                </Link>
              </li>
              <li>
                <Link to="/marcas" className="transition-colors hover:text-cyan-400">
                  Marcas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="transition-colors hover:text-cyan-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Quito</div>
                  <a href="mailto:info@incomsat.net" className="transition-colors hover:text-cyan-400">
                    info@incomsat.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Guayaquil</div>
                  <a href="mailto:infosas@incomsat.net" className="transition-colors hover:text-cyan-400">
                    infosas@incomsat.net
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col gap-2 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 INCOMSAT - Information Technology Services. Todos los derechos reservados.</p>
            <p>25 anos de experiencia en soluciones IT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
