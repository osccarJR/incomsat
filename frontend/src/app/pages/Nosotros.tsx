import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Target, Eye, Award, Building2, Users, CheckCircle2, Shield, Calendar, ArrowRight } from 'lucide-react';
import nosotrosBg from '../../assets/us.jpg';

export function Nosotros() {
  const diferenciadores = [
    {
      icon: Calendar,
      title: '25 años de experiencia',
      description:
        'Mas de dos decadas brindando soluciones IT a empresas lideres en Ecuador, con proyectos exitosos en distintos sectores.',
    },
    {
      icon: Building2,
      title: 'Soluciones integrales',
      description:
        'Integramos IT, sistemas electricos, seguridad electronica y obra civil bajo una gestion unificada.',
    },
    {
      icon: Users,
      title: 'Soporte especializado',
      description:
        'Equipo tecnico certificado con atencion remota y presencial, incluida mesa de ayuda 24/7.',
    },
    {
      icon: Shield,
      title: 'Continuidad y seguridad',
      description:
        'Cada solucion se diseña para alta disponibilidad, proteccion de datos y escalabilidad futura.',
    },
  ];

  const valores = [
    { title: 'Innovacion', description: 'Adoptamos tecnologia actual para mantener a nuestros clientes a la vanguardia.' },
    { title: 'Confianza', description: 'Construimos relaciones de largo plazo con resultados y transparencia.' },
    { title: 'Excelencia', description: 'Compromiso con calidad en cada etapa, desde diseño hasta soporte.' },
    { title: 'Sostenibilidad', description: 'Optimizamos recursos para reducir impacto y costo operativo.' },
  ];

  const cifras = [
    { numero: '25', texto: 'años de experiencia', icon: Award },
    { numero: '40+', texto: 'Clientes corporativos', icon: Building2 },
    { numero: '100+', texto: 'Proyectos implementados', icon: CheckCircle2 },
    { numero: '24/7', texto: 'Soporte disponible', icon: Users },
  ];

  const hitos = [
    { anio: '1999', texto: 'Fundacion de INCOMSAT y primeros proyectos IT corporativos.' },
    {
      anio: '2005-2010',
      texto:
        'Expansion hacia redes empresariales, data center y seguridad electronica. Certificaciones con fabricantes globales y escalamiento en sectores criticos.',
    },
    { anio: '2011-2026', texto: 'Mas de 40 clientes corporativos y liderazgo en soluciones IT integrales.' },
  ];

  return (
    <div className="w-full">
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{
          backgroundImage: `url(${nosotrosBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-cyan-900/75" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">INCOMSAT</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl">
            Desde 1999, transformando la infraestructura tecnologica de empresas y corporaciones en Ecuador.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:gap-12">
          <Card className="border-2 p-8 transition-all hover:border-cyan-200 sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-cyan-600">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Mision</h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Brindar soluciones integrales en tecnologia de la informacion para impulsar la transformacion digital con innovacion, confianza y sostenibilidad.
            </p>
          </Card>

          <Card className="border-2 p-8 transition-all hover:border-cyan-200 sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-blue-500">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Vision</h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Ser el socio estrategico lider en soluciones IT, reconocido por excelencia operativa y compromiso con un futuro digital sostenible.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Que nos diferencia</h2>
            <p className="text-lg text-gray-600 sm:text-xl">Atributos que nos convierten en su mejor aliado tecnologico.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {diferenciadores.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 p-6 transition-all hover:border-cyan-200 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-cyan-600 sm:h-16 sm:w-16">
                      <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="leading-relaxed text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Nuestros valores</h2>
            <p className="text-lg text-gray-600 sm:text-xl">Principios que guian cada proyecto.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor, index) => (
              <div key={index} className="rounded-lg border-2 border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-cyan-200">
                <CheckCircle2 className="mb-4 h-10 w-10 text-cyan-600" />
                <h3 className="mb-3 text-lg font-bold text-gray-900">{valor.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Nuestra trayectoria</h2>
            <p className="text-lg text-gray-600 sm:text-xl">25 años construyendo el futuro digital de Ecuador.</p>
          </div>

          <div className="mx-auto max-w-5xl lg:hidden">
            <div className="space-y-8">
              {hitos.map((hito, index) => (
                <div key={index} className="relative pl-10">
                  {index < hitos.length - 1 && <div className="absolute left-[15px] top-8 h-[calc(100%+1.5rem)] w-0.5 bg-cyan-200" />}
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full border-2 border-cyan-600 bg-white" />
                  <div className="rounded-lg border-2 border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-2 text-2xl font-bold text-cyan-600">{hito.anio}</div>
                    <p className="text-gray-700">{hito.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto hidden max-w-5xl lg:block">
            <div className="grid grid-cols-3 items-start gap-6">
              {hitos.map((hito, index) => (
                <div key={index} className="relative">
                  <div className="mb-5 flex items-center">
                    <div className="h-9 w-9 rounded-full border-2 border-cyan-600 bg-white" />
                    {index < hitos.length - 1 && <ArrowRight className="ml-3 h-5 w-5 text-cyan-600" />}
                  </div>
                  <div className="rounded-lg border-2 border-gray-100 bg-white p-5 shadow-sm">
                    <div className="mb-2 text-2xl font-bold text-cyan-600">{hito.anio}</div>
                    <p className="text-gray-700">{hito.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Listo para iniciar su transformacion digital?</h2>
          <p className="mb-8 text-lg text-gray-100 sm:text-xl">
            Agende una reunion con nuestro equipo y descubra como impulsar su negocio.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Agendar una reunion
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
