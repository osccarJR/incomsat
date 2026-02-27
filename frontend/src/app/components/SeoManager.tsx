import { useEffect } from 'react';
import { useLocation } from 'react-router';

type SeoEntry = {
  title: string;
  description: string;
};

const SITE_URL = 'https://incomsat.net';
const SITE_NAME = 'INCOMSAT';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO_BY_PATH: Record<string, SeoEntry> = {
  '/': {
    title: 'INCOMSAT | Soluciones Integrales IT para Empresas',
    description:
      'Soluciones IT empresariales en Ecuador: infraestructura, data center, redes, seguridad, soporte y transformacion digital.',
  },
  '/soluciones': {
    title: 'Soluciones IT Empresariales | INCOMSAT',
    description:
      'Consultoria IT, data center, redes, seguridad electronica, help desk y proyectos tecnologicos end-to-end para empresas.',
  },
  '/casos-exito': {
    title: 'Casos de Exito | INCOMSAT',
    description:
      'Empresas lideres en Ecuador confian en INCOMSAT. Conozca casos reales por sector y resultados de implementacion.',
  },
  '/marcas': {
    title: 'Marcas que Distribuimos | INCOMSAT',
    description:
      'Distribuidores de marcas globales como HP, Cisco, Dell, Lenovo, Microsoft, APC, Vertiv y mas.',
  },
  '/nosotros': {
    title: 'Nosotros | INCOMSAT',
    description:
      'Conozca a INCOMSAT: experiencia, valores, trayectoria y enfoque en soluciones IT seguras, escalables y sostenibles.',
  },
  '/contacto': {
    title: 'Contacto | INCOMSAT',
    description:
      'Solicite una cotizacion o diagnostico IT. Contacte a INCOMSAT en Quito y Guayaquil.',
  },
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function upsertJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const entry = SEO_BY_PATH[path] ?? SEO_BY_PATH['/'];
    const url = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = entry.title;
    upsertMeta('name', 'description', entry.description);
    upsertMeta('name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    upsertCanonical(url);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'es_EC');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', entry.title);
    upsertMeta('property', 'og:description', entry.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', DEFAULT_IMAGE);
    upsertMeta('property', 'og:image:alt', `${SITE_NAME} - Soluciones IT`);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', entry.title);
    upsertMeta('name', 'twitter:description', entry.description);
    upsertMeta('name', 'twitter:image', DEFAULT_IMAGE);

    upsertJsonLd('ld-org', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.png`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'info@incomsat.net',
          areaServed: 'EC',
          availableLanguage: ['es'],
        },
      ],
    });

    upsertJsonLd('ld-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: entry.title,
      url,
      description: entry.description,
      inLanguage: 'es-EC',
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }, [location.pathname]);

  return null;
}
