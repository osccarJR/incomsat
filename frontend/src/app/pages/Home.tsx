import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
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
import { motion } from 'motion/react';
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
import heroVideo from '../../assets/hero.mp4';
import buildingsBg from '../../assets/buildings.jpg';

export function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.38, ease: 'easeOut' as const },
  };

  const fadeItem = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.3, ease: 'easeOut' as const },
  };

  const servicios = [
    {
      icon: Network,
      title: 'Conectividad en cobre y fibra optica',
      description: 'Cableado estructurado, enlaces de fibra optica y conectividad empresarial de alto rendimiento.',
      link: '/soluciones',
    },
    {
      icon: Briefcase,
      title: 'Wifi empresarial',
      description: 'Cobertura wifi corporativa, segmentacion segura y optimizacion de rendimiento inalambrico.',
      link: '/soluciones',
    },
    {
      icon: Zap,
      title: 'Sistemas electricos para IT',
      description: 'Proteccion y respaldo electrico para infraestructura IT y continuidad operativa.',
      link: '/soluciones',
    },
    {
      icon: Shield,
      title: 'CCTV',
      description: 'Videovigilancia, grabacion y monitoreo remoto para seguridad de instalaciones.',
      link: '/soluciones',
    },
    {
      icon: Server,
      title: 'Alarmas',
      description: 'Alarmas corporativas con sensores y alertas en tiempo real para respuesta inmediata.',
      link: '/soluciones',
    },
    {
      icon: Building2,
      title: 'Iluminacion para oficinas modernas',
      description: 'Soluciones LED y diseno luminico funcional para espacios corporativos actuales.',
      link: '/soluciones',
    },
    {
      icon: Briefcase,
      title: 'CRM',
      description: 'Implementacion de CRM para seguimiento de clientes y automatizacion comercial.',
      link: '/soluciones',
    },
    {
      icon: Headset,
      title: 'Soporte a hardware y software',
      description: 'Soporte tecnico remoto y en sitio para equipos, plataformas y aplicaciones empresariales.',
      link: '/soluciones',
    },
  ];

  const diferenciadores = [
    {
      icon: Award,
      title: 'Experiencia comprobada',
      description: '25 anos brindando soluciones IT a empresas lideres en Ecuador',
    },
    {
      icon: Building2,
      title: 'Soluciones integrales',
      description: 'IT + electrico + seguridad + obra. Todo bajo una misma gestion',
    },
    {
      icon: Users,
      title: 'Implementacion y soporte',
      description: 'Equipo especializado, atencion remota y presencial',
    },
    {
      icon: CheckCircle2,
      title: 'Alianzas estrategicas',
      description: 'Distribuidores certificados de las marcas tecnologicas lideres',
    },
    {
      icon: TrendingUp,
      title: 'Enfoque en continuidad',
      description: 'Disenamos pensando en seguridad, escalabilidad y operacion 24/7',
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
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative min-h-[80vh] overflow-hidden lg:h-screen flex items-center justify-center text-white"
      >
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 to-cyan-900/65" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Soluciones integrales IT para
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Empresas y Corporaciones
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-xl">
            Impulsamos centros de datos, infraestructura IT, digitalizacion y automatizacion para operar con seguridad, continuidad y escalabilidad.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5 text-base hover:from-cyan-600 hover:to-blue-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                Solicitar diagnostico
              </Button>
            </Link>
            <Link to="/soluciones" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-white/30 bg-white/10 px-6 py-5 text-base text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                Ver soluciones
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Que hacemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Soluciones tecnologicas integrales para impulsar su negocio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <motion.div key={index} {...fadeItem}>
                  <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{servicio.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{servicio.description}</p>
                    <Link to={servicio.link} className="text-cyan-600 font-medium hover:text-cyan-700 inline-flex items-center gap-2">
                      Explorar
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Por que INCOMSAT</h2>
            <p className="text-xl text-gray-600">Su socio estrategico en transformacion digital</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciadores.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} {...fadeItem} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="relative overflow-hidden py-24 text-white"
        style={{
          backgroundImage: `url(${buildingsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-cyan-900/75" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Casos de Exito</h2>
            <p className="text-xl text-gray-200">Mas de 40 empresas lideres confian en INCOMSAT</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {sectores.map((sector, index) => (
              <motion.div key={index} {...fadeItem}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{sector.count}</div>
                  <div className="text-white font-medium">{sector.name}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/casos-exito">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Ver casos de exito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Empresas con las que trabajamos</h2>
            <p className="text-xl text-gray-600">Aliados estrategicos con las mejores marcas tecnologicas</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {marcasPreview.map((marca, index) => (
              <motion.div key={index} {...fadeItem} className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-28">
                <div className="w-full h-14 flex items-center justify-center overflow-hidden">
                  <img
                    src={marca.logo}
                    alt={marca.name}
                    className={`h-auto max-h-12 w-auto object-contain transform-gpu ${marca.logoClass}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Listo para transformar su infraestructura IT?</h2>
          <p className="text-xl text-gray-100 mb-8">Solicite un diagnostico gratuito y descubra como podemos impulsar su negocio</p>
          <Link to="/contacto" className="w-full sm:w-auto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Solicitar diagnostico gratuito
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
