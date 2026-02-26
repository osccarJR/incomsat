import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import incomsatLogo from '../../assets/a98b4a391ec1523e228782f615f8992c0c2b51aa.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <img src={incomsatLogo} alt="INCOMSAT" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Soluciones integrales IT para Empresas y Corporaciones. 25 años impulsando la transformación digital.
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soluciones</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/soluciones" className="hover:text-cyan-400 transition-colors">Consultoría IT</Link></li>
              <li><Link to="/soluciones" className="hover:text-cyan-400 transition-colors">Redes y Networking</Link></li>
              <li><Link to="/soluciones" className="hover:text-cyan-400 transition-colors">Data Center</Link></li>
              <li><Link to="/soluciones" className="hover:text-cyan-400 transition-colors">Seguridad Electrónica</Link></li>
              <li><Link to="/soluciones" className="hover:text-cyan-400 transition-colors">Help Desk 24/7</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/nosotros" className="hover:text-cyan-400 transition-colors">Nosotros</Link></li>
              <li><Link to="/casos-exito" className="hover:text-cyan-400 transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/marcas" className="hover:text-cyan-400 transition-colors">Marcas</Link></li>
              <li><Link to="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Quito</div>
                  <a href="mailto:info@incomsat.net" className="hover:text-cyan-400 transition-colors">info@incomsat.net</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Guayaquil</div>
                  <a href="mailto:infosas@incomsat.net" className="hover:text-cyan-400 transition-colors">infosas@incomsat.net</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-blue-800/50">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>&copy; 2026 INCOMSAT - Information Technology Services. Todos los derechos reservados.</p>
            <p>25 años de experiencia en soluciones IT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
