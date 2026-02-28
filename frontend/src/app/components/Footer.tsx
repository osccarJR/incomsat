import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import incomsatLogo from '../../assets/a98b4a391ec1523e228782f615f8992c0c2b51aa.png';
import logoNube from '../../assets/logo_nube.png';

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
                  Conectividad en cobre y fibra optica
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Wifi empresarial
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Sistemas electricos para IT
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  CCTV y alarmas
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Iluminacion para oficinas modernas
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  CRM
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="transition-colors hover:text-cyan-400">
                  Soporte a hardware y software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="transition-colors hover:text-cyan-400">
                  Inicio
                </Link>
              </li>
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
                  <div className="text-gray-300">+593 0999104889</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Guayaquil</div>
                  <a href="mailto:info@incomsat.net" className="transition-colors hover:text-cyan-400">
                    info@incomsat.net
                  </a>
                  <div className="text-gray-300">+593 0999104889</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex justify-center text-center text-sm text-gray-400">
            <p>&copy; 2026 INCOMSAT - Information Technology Services. Todos los derechos reservados.</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 border-t border-blue-800/40 pt-4 text-sm text-gray-300">
            <img src={logoNube} alt="Nube Nivusoftware" className="h-4 w-4 object-contain" />
            <span>Desarrollado por</span>
            <a
              href="https://www.nivusoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-cyan-300"
            >
              Nivusoftware
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
