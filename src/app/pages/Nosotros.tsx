import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Target,
  Eye,
  Award,
  Building2,
  Users,
  CheckCircle2,
  TrendingUp,
  Shield,
  Calendar,
} from 'lucide-react';

export function Nosotros() {
  const diferenciadores = [
    {
      icon: Calendar,
      title: '25 años de experiencia',
      description:
        'Más de dos décadas brindando soluciones IT a empresas líderes en Ecuador, con proyectos exitosos en todos los sectores',
    },
    {
      icon: Building2,
      title: 'Soluciones integrales',
      description:
        'Única empresa que integra IT + sistemas eléctricos + seguridad electrónica + obra civil bajo una misma gestión',
    },
    {
      icon: Users,
      title: 'Implementación y soporte especializado',
      description:
        'Equipo técnico certificado, atención remota y presencial, mesa de ayuda 24/7 para garantizar la continuidad de su operación',
    },
    {
      icon: Shield,
      title: 'Enfoque en seguridad y continuidad',
      description:
        'Diseñamos cada solución pensando en la disponibilidad 24/7, protección de datos y escalabilidad futura',
    },
  ];

  const valores = [
    {
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para mantener a nuestros clientes a la vanguardia',
    },
    {
      title: 'Confianza',
      description: 'Construimos relaciones de largo plazo basadas en resultados y transparencia',
    },
    {
      title: 'Excelencia',
      description: 'Compromiso con la calidad en cada proyecto, desde el diseño hasta el soporte',
    },
    {
      title: 'Sostenibilidad',
      description: 'Soluciones que optimizan recursos y minimizan el impacto ambiental',
    },
  ];

  const cifras = [
    { numero: '25', texto: 'Años de experiencia', icon: Award },
    { numero: '40+', texto: 'Clientes corporativos', icon: Building2 },
    { numero: '100+', texto: 'Proyectos implementados', icon: CheckCircle2 },
    { numero: '24/7', texto: 'Soporte disponible', icon: Users },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            INCOMSAT, su socio estratégico en soluciones IT
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Desde 1999, transformando la infraestructura tecnológica de empresas y corporaciones en
            Ecuador
          </p>
        </div>
      </section>

      {/* Cifras */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {cifras.map((cifra, index) => {
              const Icon = cifra.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-gray-900 mb-2">{cifra.numero}</div>
                  <div className="text-gray-600">{cifra.texto}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Misión */}
            <Card className="p-10 border-2 hover:border-cyan-200 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Brindar soluciones integrales en tecnología de la información que impulsen la
                transformación digital de empresas y corporaciones, ofreciendo consultoría,
                infraestructura IT, sistemas de seguridad y soporte especializado, con{' '}
                <span className="font-semibold text-cyan-600">
                  innovación, confianza y sostenibilidad
                </span>{' '}
                como pilares fundamentales.
              </p>
            </Card>

            {/* Visión */}
            <Card className="p-10 border-2 hover:border-cyan-200 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser el socio estratégico liderando soluciones IT, reconocido por nuestra innovación,
                excelencia en el servicio y compromiso con un futuro digital sostenible, impulsando a
                nuestros clientes a{' '}
                <span className="font-semibold text-cyan-600">
                  escalar más rápido, conectarse mejor y crecer de manera inteligente
                </span>
                .
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Qué nos diferencia</h2>
            <p className="text-xl text-gray-600">
              Atributos que nos convierten en su mejor aliado tecnológico
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {diferenciadores.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 border-2 hover:border-cyan-200 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros valores</h2>
            <p className="text-xl text-gray-600">Los principios que guían cada proyecto</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-100 hover:border-cyan-200 transition-all">
                <CheckCircle2 className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{valor.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Historia */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra trayectoria</h2>
            <p className="text-xl text-gray-600">
              25 años construyendo el futuro digital de Ecuador
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 via-cyan-600 to-blue-900"></div>

            <div className="space-y-16">
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 inline-block">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">1999</div>
                    <p className="text-gray-700">
                      Fundación de INCOMSAT, pioneros en soluciones IT empresariales
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-6 h-6 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 inline-block">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">2005-2010</div>
                    <p className="text-gray-700">
                      Expansión de servicios: Data Center, seguridad electrónica y redes empresariales
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 inline-block">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">2015-2020</div>
                    <p className="text-gray-700">
                      Certificaciones oficiales de marcas globales y proyectos en sectores críticos
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-6 h-6 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 inline-block">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">2024</div>
                    <p className="text-gray-700">
                      Más de 40 clientes corporativos, líder en soluciones IT integrales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para iniciar su transformación digital?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Agende una reunión con nuestro equipo y descubra cómo podemos impulsar su negocio
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Agendar una reunión
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
