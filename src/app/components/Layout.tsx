import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { SeoManager } from './SeoManager';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SeoManager />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
