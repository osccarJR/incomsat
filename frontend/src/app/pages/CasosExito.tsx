import { Link } from 'react-router';
import { Building2 } from 'lucide-react';
import agaLogo from '../../assets/aga.png';
import arcaLogo from '../../assets/arca.jpg';
import automotoresyAnexosLogo from '../../assets/automotoresyanexos.jpg';
import bancoCentralLogo from '../../assets/bancocentral.png';
import bancoDeMachalaLogo from '../../assets/bancodemachala.png';
import bancoPichinchaLogo from '../../assets/bancopichincha.png';
import celecLogo from '../../assets/celec.png';
import cerveceriaNacionalLogo from '../../assets/cervecerianacional.png';
import cocacolaLogo from '../../assets/cocacola.png';
import condorLogo from '../../assets/condor.png';
import espolLogo from '../../assets/espol.png';
import grupoCalderonLogo from '../../assets/grupocalderon.png';
import grupoCarvajalLogo from '../../assets/grupocarvajal.jpg';
import grupoEcuacopiaLogo from '../../assets/grupoecuacopia.png';
import grupoSuperiorLogo from '../../assets/gruposuperior.jpg';
import humanaLogo from '../../assets/HUMANA.png';
import ibmLogo from '../../assets/IBM.png';
import lanEcuadorLogo from '../../assets/lanecuador.png';
import libertySegurosLogo from '../../assets/libertyseguros.png';
import lifeLogo from '../../assets/life.png';
import metropolitantouringLogo from '../../assets/metropolitantouring.jpg';
import modernaAlimentosLogo from '../../assets/modernaalimentos.png';
import novasegurosLogo from '../../assets/novaseguros.png';
import normaLogo from '../../assets/norma.png';
import offsetecLogo from '../../assets/offsetec.jpg';
import panamericangroupLogo from '../../assets/panamericangroup.png';
import pepsicoLogo from '../../assets/pepsico.png';
import pronacaLogo from '../../assets/pronaca.png';
import qsiLogo from '../../assets/qsi.png';
import quifatexLogo from '../../assets/quifatex.png';
import reybanpacLogo from '../../assets/reybanpac.png';
import saludsaLogo from '../../assets/saludsa.png';
import tecnisegurosLogo from '../../assets/tecniseguros.jpeg';
import teleamazonasLogo from '../../assets/teleamazonas.jpg';
import universidadDelMilagroLogo from '../../assets/universidaddelmilagro.jpg';
import unileverLogo from '../../assets/unilever.png';
import buildingsBg from '../../assets/buildings.jpg';
import { Button } from '../components/ui/button';

export function CasosExito() {
  const casos = [
    { nombre: 'Salud S.A.', sector: 'seguros', logo: saludsaLogo },
    { nombre: 'Tecniseguros', sector: 'seguros', logo: tecnisegurosLogo },
    { nombre: 'Nova Seguros', sector: 'seguros', logo: novasegurosLogo },
    { nombre: 'Panamerica Seguros', sector: 'seguros', logo: panamericangroupLogo },
    { nombre: 'Humana', sector: 'seguros', logo: humanaLogo },
    { nombre: 'Liberty Seguros', sector: 'seguros', logo: libertySegurosLogo },
    { nombre: 'Quifatex', sector: 'comercio', logo: quifatexLogo },
    { nombre: 'QSI Ecuador', sector: 'comercio', logo: qsiLogo },
    { nombre: 'Grupo Ecuacopia', sector: 'comercio', logo: grupoEcuacopiaLogo },
    { nombre: 'Metropolitan Touring', sector: 'comercio', logo: metropolitantouringLogo },
    { nombre: 'Lan Ecuador', sector: 'comercio', logo: lanEcuadorLogo },
    { nombre: 'Automotors y Anexos', sector: 'comercio', logo: automotoresyAnexosLogo },
    { nombre: 'Grupo Calderón', sector: 'comercio', logo: grupoCalderonLogo },
    { nombre: 'IBM', sector: 'comercio', logo: ibmLogo },
    { nombre: 'Teleamazonas', sector: 'comercio', logo: teleamazonasLogo },
    { nombre: 'Bico Internacional', sector: 'comercio' },
    { nombre: 'Banco Central', sector: 'bancos', logo: bancoCentralLogo },
    { nombre: 'Banco de Machala', sector: 'bancos', logo: bancoDeMachalaLogo },
    { nombre: 'Banco Pichincha', sector: 'bancos', logo: bancoPichinchaLogo },
    { nombre: 'Grupo Superior', sector: 'industria', logo: grupoSuperiorLogo },
    { nombre: 'Moderna Alimentos', sector: 'industria', logo: modernaAlimentosLogo },
    { nombre: 'Arca', sector: 'industria', logo: arcaLogo },
    { nombre: 'AGA', sector: 'industria', logo: agaLogo },
    { nombre: 'Refreshment Coca Cola', sector: 'industria', logo: cocacolaLogo },
    { nombre: 'Cervecería Nacional', sector: 'industria', logo: cerveceriaNacionalLogo },
    { nombre: 'Unilever', sector: 'industria', logo: unileverLogo },
    { nombre: 'Laboratorios Life', sector: 'industria', logo: lifeLogo },
    { nombre: 'Pronaca', sector: 'industria', logo: pronacaLogo },
    { nombre: 'Reybanpac', sector: 'industria', logo: reybanpacLogo },
    { nombre: 'Pinturas Cóndor', sector: 'industria', logo: condorLogo },
    { nombre: 'Pepsico', sector: 'industria', logo: pepsicoLogo },
    { nombre: 'Grupo Carvajal', sector: 'industria', logo: grupoCarvajalLogo },
    { nombre: 'Norma', sector: 'industria', logo: normaLogo },
    { nombre: 'Offsetec', sector: 'industria', logo: offsetecLogo },
    { nombre: 'Universidad de Milagro', sector: 'gobierno', logo: universidadDelMilagroLogo },
    { nombre: 'Registro de la Propiedad Manta', sector: 'gobierno' },
    { nombre: 'Celec Manta', sector: 'gobierno', logo: celecLogo },
    { nombre: 'ESPOL Gye', sector: 'gobierno', logo: espolLogo },
  ];

  const casosFiltrados = casos;

  return (
    <div className="w-full">
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{
          backgroundImage: `url(${buildingsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-cyan-900/75" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">Casos de Éxito</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-200">
            Más de 40 empresas líderes en Ecuador confían en INCOMSAT para sus soluciones IT
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600">40+</div>
              <div className="text-gray-600">Clientes corporativos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600">25</div>
              <div className="text-gray-600">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600">5</div>
              <div className="text-gray-600">Sectores industriales</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600">100+</div>
              <div className="text-gray-600">Proyectos implementados</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {casosFiltrados.map((caso, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center rounded-lg border-2 border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-cyan-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-24 w-full items-center justify-center">
                  <div
                    className={`flex items-center justify-center overflow-hidden rounded-lg ${
                      caso.logo ? 'h-full w-full' : 'h-16 w-16 bg-gradient-to-br from-blue-900 to-cyan-600'
                    }`}
                  >
                    {caso.logo ? (
                      <img src={caso.logo} alt={caso.nombre} className="h-full w-full object-contain" />
                    ) : (
                      <Building2 className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-cyan-600">
                  {caso.nombre}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">¿Quieres ser nuestro próximo caso de Éxito?</h2>
          <p className="mb-8 text-xl text-gray-100">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Cuéntanos tu proyecto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

