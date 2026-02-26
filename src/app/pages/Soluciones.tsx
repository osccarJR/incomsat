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
} from 'lucide-react';
import consultoriaDataCenterImg from '../../assets/soluciones-consultoria-data-center.png';
import solucionesEmpresarialesImg from '../../assets/soluciones-empresariales.png';
import redesNetworkingImg from '../../assets/soluciones-redes-networking.png';
import sistemasElectricosImg from '../../assets/soluciones-sistemas-electricos.png';
import seguridadElectronicaImg from '../../assets/soluciones-seguridad-electronica.png';
import helpDeskImg from '../../assets/soluciones-help-desk.png';
import disenoConstruccionImg from '../../assets/soluciones-diseno-construccion.png';
import equiposComputacionImg from '../../assets/soluciones-equipos-computacion.png';

export function Soluciones() {
  const soluciones = [
    {
      icon: Briefcase,
      title: 'Consultoría y Proyectos IT / Data Center',
      items: [
        'Asesoría estratégica en transformación digital',
        'Implementación de proyectos IT a medida',
        'Escalabilidad y sostenibilidad en infraestructuras tecnológicas',
      ],
      image: consultoriaDataCenterImg,
    },
    {
      icon: Server,
      title: 'Soluciones Empresariales',
      items: [
        'ERP, CRM y Business Intelligence',
        'Ciberseguridad avanzada con inteligencia artificial',
        'Optimización de procesos empresariales',
      ],
      image: solucionesEmpresarialesImg,
    },
    {
      icon: Network,
      title: 'Redes y Networking',
      items: [
        'Cableado estructurado cobre y fibra óptica',
        'Diseño e implementación LAN/WAN',
        'Infraestructura outdoor / planta externa',
      ],
      image: redesNetworkingImg,
    },
    {
      icon: Zap,
      title: 'Sistemas Eléctricos, Protecciones y Respaldo IT',
      items: [
        'UPS y generadores de respaldo',
        'Pararrayos y protecciones contra transientes',
        'Mallas a tierra y detección de incendios',
        'Climatización para cuartos fríos / centros de cómputo',
        'Iluminación LED industrial y para oficinas',
      ],
      image: sistemasElectricosImg,
    },
    {
      icon: Shield,
      title: 'Seguridad Electrónica',
      items: [
        'CCTV analógico/IP con grabación digital',
        'Cercas electrificadas y perímetro',
        'Control de acceso y monitoreo 24/7',
        'Integración con sistemas IT corporativos',
      ],
      image: seguridadElectronicaImg,
    },
    {
      icon: Headset,
      title: 'Help Desk y Asistencia Técnica IT',
      items: [
        'Mesa de ayuda 24/7',
        'Soporte remoto y presencial',
        'Mantenimiento preventivo/correctivo (por contrato o evento)',
        'Outsourcing de help desk (personal en sitio)',
      ],
      image: helpDeskImg,
    },
    {
      icon: Building2,
      title: 'Diseño, Construcción y Remodelación de Oficinas con IT',
      items: [
        'Diseño arquitectónico de planos',
        'Construcción/remodelación estilo moderno',
        'Integración eléctrico + IT + CCTV',
        'Implementación de data center/centros informáticos con obra civil y mobiliario',
      ],
      image: disenoConstruccionImg,
    },
    {
      icon: ShoppingCart,
      title: 'Equipos de Computación y Accesorios (Venta)',
      items: [
        'Equipos electrónicos y computación',
        'Accesorios de redes y computación',
        'Proveedores confiables con garantía extendida',
      ],
      image: equiposComputacionImg,
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
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Soluciones de Alta Tecnología</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Consultoría, infraestructura IT, seguridad, soporte y proyectos integrales para
            empresas y corporaciones.
          </p>
        </div>
      </section>

      {/* Soluciones Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="space-y-16">
            {soluciones.map((solucion, index) => {
              const Icon = solucion.icon;
              const isEven = index % 2 === 0;

              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-cyan-200 transition-all">
                  <div className={`grid grid-cols-2 ${isEven ? '' : 'grid-flow-dense'}`}>
                    <div className={`p-10 flex flex-col justify-center ${isEven ? '' : 'col-start-2'}`}>
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
                      <div className="flex gap-4">
                        <Link to="/contacto">
                          <Button className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500">
                            Pedir cotización
                          </Button>
                        </Link>
                        <Link to="/contacto">
                          <Button variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Hablar con especialista
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`h-full min-h-[400px] bg-cover bg-center ${isEven ? '' : 'col-start-1 row-start-1'}`}
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
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo trabajamos</h2>
            <p className="text-xl text-gray-600">
              Proceso estructurado para garantizar el éxito de su proyecto
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {pasos.map((paso, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-gray-100 hover:border-cyan-200 transition-all">
                  <div className="text-5xl font-bold text-cyan-600 mb-4 opacity-50">{paso.numero}</div>
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
        <div className="max-w-[1280px] mx-auto px-8 text-center">
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
