/**
 * The services actually offered, confirmed with the owner on 2026-08-11.
 *
 * `slug: null` means the service is genuinely offered and is listed on the
 * homepage, but has no dedicated page yet because there is no real photography
 * or first-hand content to fill one. A thin page would compete with the pages
 * that do have substance — so it stays a list item until it earns a URL.
 */

export interface Service {
  key: string;
  /** URL slug, or null while the service has no page of its own yet. */
  slug: string | null;
  /** Display title, as a person would say it. */
  title: string;
  /** schema.org Service name — natural, not "… Suceava" keyword-stuffed. */
  schemaName: string;
  /** One line for the homepage card. */
  short: string;
  items: string[];
  accent: 'navy' | 'orange' | 'blue';
}

export const services: Service[] = [
  {
    key: 'sanitare',
    slug: 'instalatii-sanitare-suceava',
    title: 'Instalații sanitare',
    schemaName: 'Instalații sanitare',
    short:
      'Montaj și reparații pentru instalații de alimentare cu apă și canalizare, precum și pentru obiecte sanitare.',
    items: [
      'Alimentare cu apă rece și caldă',
      'Canalizare și scurgeri',
      'Montaj de obiecte sanitare',
      'Reparații și depanări',
    ],
    accent: 'blue',
  },
  {
    key: 'termice',
    slug: 'instalatii-termice-suceava',
    title: 'Instalații termice',
    schemaName: 'Instalații termice',
    short:
      'Calorifere, încălzire în pardoseală, montaj de centrale și verificări cu cameră termică.',
    items: [
      'Montaj de calorifere',
      'Încălzire în pardoseală',
      'Montaj de centrale',
      'Distribuție și echilibrare',
      'Verificarea pierderilor de căldură',
    ],
    accent: 'orange',
  },
  {
    key: 'climatizare',
    slug: 'montaj-aer-conditionat-suceava',
    title: 'Aer condiționat',
    schemaName: 'Montaj aer condiționat',
    short:
      'Montaj, întreținere și reparații pentru aparatele de aer condiționat din locuințe și spații comerciale.',
    items: [
      'Montaj de aparate de aer condiționat',
      'Întreținere periodică',
      'Reparații și încărcare cu agent frigorific',
      'Sisteme de ventilație',
    ],
    accent: 'blue',
  },
  {
    key: 'piscine',
    slug: null, // waiting on photographs of a completed installation
    title: 'Instalații pentru piscine',
    schemaName: 'Instalații pentru piscine',
    short:
      'Instalații hidraulice pentru piscine: circuite, filtrare și racorduri.',
    items: [
      'Circuite de apă și filtrare',
      'Racorduri și distribuție',
      'Punere în funcțiune',
    ],
    accent: 'blue',
  },
  {
    key: 'dedurizare',
    slug: null, // waiting on photographs and the equipment brands fitted
    title: 'Dedurizare a apei',
    schemaName: 'Sisteme de dedurizare a apei',
    short:
      'Sisteme de dedurizare a apei care protejează instalația și centrala de calcar.',
    items: [
      'Montaj de sisteme de dedurizare',
      'Racordare la instalația existentă',
      'Verificare și reglaj',
    ],
    accent: 'navy',
  },
];

/** Services that have a real page, for navigation and internal linking. */
export const servicesWithPages = services.filter(
  (s): s is Service & { slug: string } => s.slug !== null,
);
