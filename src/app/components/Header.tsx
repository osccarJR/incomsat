import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import incomsatLogo from '../../assets/a98b4a391ec1523e228782f615f8992c0c2b51aa.png';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={incomsatLogo} alt="INCOMSAT" className="h-12" />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/soluciones"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
              isActive('/soluciones') ? 'text-cyan-600' : 'text-gray-700'
            }`}
          >
            Soluciones
          </Link>
          <Link
            to="/casos-exito"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
              isActive('/casos-exito') ? 'text-cyan-600' : 'text-gray-700'
            }`}
          >
            Casos de Éxito
          </Link>
          <Link
            to="/marcas"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
              isActive('/marcas') ? 'text-cyan-600' : 'text-gray-700'
            }`}
          >
            Marcas
          </Link>
          <Link
            to="/nosotros"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
              isActive('/nosotros') ? 'text-cyan-600' : 'text-gray-700'
            }`}
          >
            Nosotros
          </Link>
          <Link
            to="/contacto"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
              isActive('/contacto') ? 'text-cyan-600' : 'text-gray-700'
            }`}
          >
            Contacto
          </Link>
          <Link to="/contacto">
            <Button className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500">
              Solicitar diagnóstico
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
