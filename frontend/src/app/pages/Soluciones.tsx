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
  Building2,
  ShoppingCart,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import consultoriaDataCenterImg from '../../assets/soluciones-consultoria-data-center.png';
import solucionesEmpresarialesImg from '../../assets/soluciones-empresariales.png';
import redesNetworkingImg from '../../assets/fibraoptica.png';
import sistemasElectricosImg from '../../assets/soluciones-sistemas-electricos.png';
import seguridadElectronicaImg from '../../assets/soluciones-seguridad-electronica.png';
import  alarmasImg from '../../assets/alarmas.jpg';
import helpDeskImg from '../../assets/soluciones-help-desk.png';
import disenoConstruccionImg from '../../assets/soluciones-diseno-construccion.png';
import solucionesHeroBg from '../../assets/soluciones.jpg';

export function Soluciones() {
  const soluciones = [
    {
      icon: Network,
      title: 'Soluciones de conectividad en cobre y fibra optica',
      items: [
        'Cableado estructurado en cobre',
        'Enlaces de fibra optica para alta velocidad',
        'Diseno e implementacion de conectividad empresarial',
      ],
      image: redesNetworkingImg,
    },
    {
      icon: Briefcase,
      title: 'Wifi empresarial',
      items: [
        'Cobertura wifi para oficinas y sedes',
        'Segmentacion segura por usuarios y dispositivos',
        'Monitoreo y optimizacion del rendimiento inalambrico',
      ],
      image: consultoriaDataCenterImg,
    },
    {
      icon: Zap,
      title: 'Sistemas electricos para IT',
      items: [
        'Respaldo y proteccion electrica para infraestructura IT',
        'Distribucion electrica para cuartos de equipos',
        'Continuidad operativa para plataformas criticas',
      ],
      image: sistemasElectricosImg,
    },
    {
      icon: Shield,
      title: 'CCTV',
      items: [
        'Videovigilancia para interiores y exteriores',
        'Grabacion y visualizacion remota',
        'Integracion con monitoreo centralizado',
      ],
      image: seguridadElectronicaImg,
    },
    {
      icon: Server,
      title: 'Alarmas',
      items: [
        'Alarmas de intrusion para entornos corporativos',
        'Sensores y notificaciones en tiempo real',
        'Respuesta rapida ante incidentes',
      ],
      image: alarmasImg,
    },
    {
      icon: Building2,
      title: 'Soluciones de iluminacion con disenos para oficinas modernas',
      items: [
        'Diseno luminico para espacios de trabajo modernos',
        'Soluciones LED de alta eficiencia',
        'Integracion funcional y estetica del entorno',
      ],
      image: disenoConstruccionImg,
    },
    {
      icon: ShoppingCart,
      title: 'CRM',
      items: [
        'Implementacion de plataformas CRM',
        'Automatizacion de procesos comerciales y de servicio',
        'Seguimiento de clientes y oportunidades',
      ],
      image: solucionesEmpresarialesImg,
    },
    {
      icon: Headset,
      title: 'Soporte a hardware y software',
      items: [
        'Diagnostico y mantenimiento de equipos',
        'Soporte tecnico remoto y en sitio',
        'Atencion de incidentes de software empresarial',
      ],
      image: helpDeskImg,
    },
  ];

  const pasos = [
    {
      numero: '01',
      title: 'Diagnóstico y levantamiento',
      description: 'Análisis detallado de su infraestructura actual y necesidades específicas',
    },
    {
      numero: '02',
      title: 'Diseño de solución y propuesta',
      description: 'Elaboración de propuesta técnica y económica personalizada',
    },
    {
      numero: '03',
      title: 'Implementación y puesta en marcha',
      description: 'Ejecución del proyecto con gestión profesional y tiempos definidos',
    },
    {
      numero: '04',
      title: 'Soporte y mejora continua',
      description: 'Acompañamiento post-implementación y optimización constante',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{
          backgroundImage: `url(${solucionesHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-cyan-900/75" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Soluciones de Alta Tecnología</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
           Soluciones de IT e infraestructura tecnológica para empresas. Conectividad, seguridad y soporte integral.
          </p>
        </div>
      </section>

      {/* Soluciones Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {soluciones.map((solucion, index) => {
              const Icon = solucion.icon;
              const isEven = index % 2 === 0;

              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-cyan-200 transition-all">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{solucion.title}</h3>
                      <ul className="space-y-3 mb-8">
                        {solucion.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contacto">
                          <Button className="h-11 rounded-md bg-gradient-to-r from-blue-900 to-cyan-600 px-5 font-semibold hover:from-blue-800 hover:to-cyan-500">
                            Pedir cotización
                          </Button>
                        </Link>
                        <a
                          href={`https://wa.me/+593994993430?text=${encodeURIComponent(
                            `Hola, estoy interesado en los servicios para ${solucion.title}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-green-600 px-5 font-semibold text-white transition-colors hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        >
                          <Phone className="h-4 w-4" />
                          Solicitar por WhatsApp
                          <ChevronRight size={18} />
                        </a>
                      </div>
                    </div>
                    <div
                      className={`h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] bg-cover bg-center ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                      style={{ backgroundImage: `url(${solucion.image})` }}
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cómo trabajamos</h2>
            <p className="text-xl text-gray-600">
              Proceso estructurado para garantizar el éxito de su proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((paso, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-gray-100 hover:border-cyan-200 transition-all">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600 mb-4 opacity-50">{paso.numero}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{paso.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{paso.description}</p>
                </div>
                {index < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-cyan-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesita una solución personalizada?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Nuestro equipo está listo para diseñar la solución que su empresa necesita
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Solicitar cotización
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
