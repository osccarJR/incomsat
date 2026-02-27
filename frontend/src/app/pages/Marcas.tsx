import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Award, CheckCircle2 } from 'lucide-react';
import apcLogo from '../../assets/apc.png';
import arubaLogo from '../../assets/aruba.png';
import ciscoLogo from '../../assets/cisco.png';
import dellLogo from '../../assets/dell.png';
import epsonLogo from '../../assets/epson.png';
import hikvisionLogo from '../../assets/Hikvision-Logo.png';
import hpLogo from '../../assets/hp.png';
import ibmLogo from '../../assets/IBM.png';
import lenovoLogo from '../../assets/lenovo.png';
import microsoftLogo from '../../assets/microsoft.png';
import panduitLogo from '../../assets/PANDUIT.png';
import ruckusLogo from '../../assets/ruckus.png';
import siemonLogo from '../../assets/siemon.png';
import vertivLogo from '../../assets/vertiv.png';

export function Marcas() {
  const marcas = [
    { name: 'HP', logo: hpLogo, logoClass: 'max-w-[74px]' },
    { name: 'Aruba', logo: arubaLogo, logoClass: 'max-w-[132px]' },
    { name: 'Cisco', logo: ciscoLogo, logoClass: 'max-w-[146px]' },
    { name: 'Siemon', logo: siemonLogo, logoClass: 'max-w-[130px]' },
    { name: 'Panduit', logo: panduitLogo, logoClass: 'max-w-[120px] scale-[1.9]' },
    { name: 'Vertiv', logo: vertivLogo, logoClass: 'max-w-[112px] scale-[1.3]' },
    { name: 'APC', logo: apcLogo, logoClass: 'max-w-[104px] scale-[1.15]' },
    { name: 'Lenovo', logo: lenovoLogo, logoClass: 'max-w-[114px]' },
    { name: 'Microsoft', logo: microsoftLogo, logoClass: 'max-w-[120px] scale-[1.45]' },
    { name: 'IBM', logo: ibmLogo, logoClass: 'max-w-[112px]' },
    { name: 'Ruckus', logo: ruckusLogo, logoClass: 'max-w-[136px]' },
    { name: 'Hikvision', logo: hikvisionLogo, logoClass: 'max-w-[138px]' },
    { name: 'Dell', logo: dellLogo, logoClass: 'max-w-[100px]' },
    { name: 'Epson', logo: epsonLogo, logoClass: 'max-w-[110px]' },
  ];

  const categorias = [
    {
      title: 'Infraestructura IT',
      marcas: ['HP', 'Dell', 'Lenovo', 'IBM', 'Cisco'],
    },
    {
      title: 'Redes y Conectividad',
      marcas: ['Cisco', 'Aruba', 'Ruckus', 'Siemon', 'Panduit'],
    },
    {
      title: 'Protección Eléctrica',
      marcas: ['APC', 'Vertiv'],
    },
    {
      title: 'Seguridad Electrónica',
      marcas: ['Hikvision'],
    },
    {
      title: 'Software y Aplicaciones',
      marcas: ['Microsoft'],
    },
  ];

  const beneficios = [
    'Productos originales con garantía del fabricante',
    'Soporte técnico especializado',
    'Certificaciones oficiales de los fabricantes',
    'Precios competitivos para corporaciones',
    'Stock disponible para entregas inmediatas',
    'Servicio post-venta y mantenimiento',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Marcas que distribuimos</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Aliados estratégicos con las mejores marcas tecnológicas del mundo para garantizar
            soluciones de clase empresarial
          </p>
        </div>
      </section>

      {/* Grid de marcas */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Distribuidores oficiales de tecnología de clase mundial
            </h2>
            <p className="text-lg text-gray-600">
              Trabajamos con los líderes globales en tecnología empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {marcas.map((marca, index) => (
              <Card
                key={index}
                className="aspect-square flex items-center justify-center p-8 hover:shadow-lg transition-all border-2 hover:border-cyan-200 group"
              >
                {marca.logo ? (
                  <div className="w-full h-20 flex items-center justify-center overflow-hidden">
                    <img
                      src={marca.logo}
                      alt={marca.name}
                      className={`h-auto max-h-16 w-auto object-contain transform-gpu ${marca.logoClass ?? 'max-w-[128px]'}`}
                    />
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                    {marca.name}
                  </span>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marcas por categoría</h2>
            <p className="text-lg text-gray-600">
              Soluciones especializadas para cada necesidad tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <Card key={index} className="p-8 border-2 hover:border-cyan-200 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{categoria.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {categoria.marcas.map((marca, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-full text-sm font-medium"
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por qué comprar con INCOMSAT
            </h2>
            <p className="text-lg text-gray-600">
              Más allá de la venta, un compromiso con su éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-sm border-2 border-gray-200">
            <Award className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificaciones y Partners Oficiales
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              INCOMSAT cuenta con certificaciones oficiales de los principales fabricantes,
              garantizando expertise técnico y soporte directo para nuestros clientes corporativos.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500">
                Solicitar información técnica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesita equipos o soluciones específicas?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Cotice con nosotros y acceda a la mejor tecnología con soporte profesional
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


