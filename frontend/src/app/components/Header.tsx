import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import incomsatLogo from '../../assets/a98b4a391ec1523e228782f615f8992c0c2b51aa.png';

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleNavigate = () => {
    scrollToTop();
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/soluciones', label: 'Soluciones' },
    { to: '/casos-exito', label: 'Casos de Exito' },
    { to: '/marcas', label: 'Marcas' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={handleNavigate}>
          <img src={incomsatLogo} alt="INCOMSAT" className="h-10 sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleNavigate}
              className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
                isActive(item.to) ? 'text-cyan-600' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" onClick={handleNavigate}>
            <Button className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500">
              Solicitar diagnostico
            </Button>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleNavigate}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-cyan-50 hover:text-cyan-700 ${
                  isActive(item.to) ? 'bg-cyan-50 text-cyan-700' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contacto" onClick={handleNavigate} className="pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500">
                Solicitar diagnostico
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
