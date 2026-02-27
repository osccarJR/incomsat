import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SeoManager } from './SeoManager';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, [location.key]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SeoManager />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
