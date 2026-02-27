import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Server,
  Network,
  Shield,
  Headset,
  Zap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Building2,
  TrendingUp,
} from 'lucide-react';
import apcLogo from '../../assets/apc.png';
import arubaLogo from '../../assets/aruba.png';
import ciscoLogo from '../../assets/cisco.png';
import dellLogo from '../../assets/dell.png';
import hikvisionLogo from '../../assets/Hikvision-Logo.png';
import hpLogo from '../../assets/hp.png';
import ibmLogo from '../../assets/IBM.png';
import lenovoLogo from '../../assets/lenovo.png';
import microsoftLogo from '../../assets/microsoft.png';
import panduitLogo from '../../assets/PANDUIT.png';
import siemonLogo from '../../assets/siemon.png';
import vertivLogo from '../../assets/vertiv.png';

export function Home() {
  const servicios = [
    {
      icon: Server,
      title: 'Infraestructura & Data Center',
      description: 'Diseño, implementación y gestión de centros de datos con los más altos estándares',
      link: '/soluciones',
    },
    {
      icon: Network,
      title: 'Redes & Conectividad',
      description: 'Soluciones LAN/WAN, cableado estructurado cobre y fibra óptica',
      link: '/soluciones',
    },
    {
      icon: Shield,
      title: 'Seguridad Electrónica',
      description: 'CCTV, control de acceso, alarmas y monitoreo integrado',
      link: '/soluciones',
    },
    {
      icon: Headset,
      title: 'Soporte & Help Desk',
      description: 'Mesa de ayuda 24/7, mantenimiento preventivo y correctivo',
      link: '/soluciones',
    },
    {
      icon: Zap,
      title: 'Sistemas Eléctricos & Respaldo',
      description: 'UPS, generadores, protecciones y sistemas de continuidad',
      link: '/soluciones',
    },
    {
      icon: Briefcase,
      title: 'Soluciones Empresariales',
      description: 'ERP, CRM, BI, Ciberseguridad con IA y optimización de procesos',
      link: '/soluciones',
    },
  ];

  const requerimientos = [
    'Sistemas eléctricos de protección para IT, UPS, pararrayos',
    'Soluciones LAN campus cobre y fibra óptica',
    'Data Center, climatización, contra incendios',
    'ERP, Business Intelligence',
    'Auditoría y mantenimiento de infraestructura IT, LAN/WAN/Wifi',
    'Help desk, PCs y servidores, hardware y software',
    'CCTV, alarmas, control de acceso',
    'Iluminación LED para oficinas e industrias',
    'Diseño/construcción de oficinas integrando IT, CCTV y eléctrico',
    'Networking/Wifi con altos estándares de seguridad',
  ];

  const diferenciadores = [
    {
      icon: Award,
      title: 'Experiencia comprobada',
      description: '25 años brindando soluciones IT a empresas líderes en Ecuador',
    },
    {
      icon: Building2,
      title: 'Soluciones integrales',
      description: 'IT + eléctrico + seguridad + obra. Todo bajo una misma gestión',
    },
    {
      icon: Users,
      title: 'Implementación y soporte',
      description: 'Equipo especializado, atención remota y presencial',
    },
    {
      icon: CheckCircle2,
      title: 'Alianzas estratégicas',
      description: 'Distribuidores certificados de las marcas tecnológicas líderes',
    },
    {
      icon: TrendingUp,
      title: 'Enfoque en continuidad',
      description: 'Diseñamos pensando en seguridad, escalabilidad y operación 24/7',
    },
  ];

  const sectores = [
    { name: 'Seguros', count: '6+' },
    { name: 'Banca', count: '3+' },
    { name: 'Industria', count: '15+' },
    { name: 'Gobierno', count: '4+' },
    { name: 'Comercio', count: '10+' },
  ];

  const marcasPreview = [
    { name: 'HP', logo: hpLogo, logoClass: 'max-w-[64px]' },
    { name: 'Cisco', logo: ciscoLogo, logoClass: 'max-w-[140px]' },
    { name: 'Lenovo', logo: lenovoLogo, logoClass: 'max-w-[112px]' },
    { name: 'Microsoft', logo: microsoftLogo, logoClass: 'max-w-[112px] scale-[1.55]' },
    { name: 'Dell', logo: dellLogo, logoClass: 'max-w-[108px]' },
    { name: 'IBM', logo: ibmLogo, logoClass: 'max-w-[108px]' },
    { name: 'APC', logo: apcLogo, logoClass: 'max-w-[104px] scale-[1.2]' },
    { name: 'Vertiv', logo: vertivLogo, logoClass: 'max-w-[108px] scale-[1.35]' },
    { name: 'Siemon', logo: siemonLogo, logoClass: 'max-w-[122px]' },
    { name: 'Panduit', logo: panduitLogo, logoClass: 'max-w-[112px] scale-[2]' },
    { name: 'Aruba', logo: arubaLogo, logoClass: 'max-w-[124px]' },
    { name: 'Hikvision', logo: hikvisionLogo, logoClass: 'max-w-[134px]' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] lg:h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15, 23, 42, 0.85), rgba(6, 78, 118, 0.75)), url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxOTk4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Soluciones integrales IT para
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Empresas y Corporaciones
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-xl">
            Impulsamos centros de datos, infraestructura IT, digitalización y automatización para
            operar con seguridad, continuidad y escalabilidad.
          </p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
              25 años de experiencia
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
              Proyectos end-to-end
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
              Soporte especializado
            </Badge>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5 text-base hover:from-cyan-600 hover:to-blue-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                Solicitar diagnóstico
              </Button>
            </Link>
            <Link to="/soluciones" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-white/30 bg-white/10 px-6 py-5 text-base text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                Ver soluciones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Qué hacemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones tecnológicas integrales para impulsar su negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{servicio.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{servicio.description}</p>
                  <Link
                    to={servicio.link}
                    className="text-cyan-600 font-medium hover:text-cyan-700 inline-flex items-center gap-2"
                  >
                    Explorar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requerimientos frecuentes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Requerimientos frecuentes</h2>
            <p className="text-xl text-gray-600">
              Soluciones que nuestros clientes corporativos necesitan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {requerimientos.map((req, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué INCOMSAT */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Por qué INCOMSAT</h2>
            <p className="text-xl text-gray-600">
              Su socio estratégico en transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciadores.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Casos de éxito preview */}
      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-200">
              Más de 40 empresas líderes confían en INCOMSAT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {sectores.map((sector, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{sector.count}</div>
                <div className="text-white font-medium">{sector.name}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/casos-exito">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Ver casos de éxito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marcas que distribuimos preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Marcas que distribuimos</h2>
            <p className="text-xl text-gray-600">
              Aliados estratégicos con las mejores marcas tecnológicas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {marcasPreview.map((marca, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-28">
                <div className="w-full h-14 flex items-center justify-center overflow-hidden">
                  <img
                    src={marca.logo}
                    alt={marca.name}
                    className={`h-auto max-h-12 w-auto object-contain transform-gpu ${marca.logoClass}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/marcas">
              <Button variant="outline" className="border-gray-300">
                Ver todas las marcas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar su infraestructura IT?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Solicite un diagnóstico gratuito y descubra cómo podemos impulsar su negocio
          </p>
          <Link to="/contacto" className="w-full sm:w-auto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Solicitar diagnóstico gratuito
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



