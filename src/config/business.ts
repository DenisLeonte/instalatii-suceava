/**
 * Single source of truth for business identity.
 *
 * Nothing about the business is hard-coded anywhere else — not in a component,
 * not in a <head> tag, not in the JSON-LD. Changing the public name means
 * editing `name` below and nothing else.
 *
 * Fields that are genuinely unknown are left empty or omitted rather than
 * filled with placeholder text. Consumers must handle absence (the types are
 * optional, so the compiler enforces it), and absent data renders nothing.
 * Never invent a value here to make a page look finished.
 */

export interface Credential {
  /** Issuing authority, exactly as printed on the document. e.g. "ANRE", "ISCIR" */
  authority: string;
  /** e.g. "Instalator autorizat gaze naturale" */
  title: string;
  /** Document number, exactly as printed */
  number: string;
  /** ISO date. An expired credential must never be displayed. */
  expires?: string;
}

export interface SocialProfile {
  name: string;
  url: string;
}

export interface OpeningHours {
  /** schema.org day names */
  days: string[];
  /** 24h "HH:MM" */
  opens: string;
  closes: string;
  /** Romanian label for display */
  label: string;
}

export interface Business {
  /** Public trading name. Provisional — this is the one line to change. */
  name: string;
  /** Registered legal name, shown in the footer. */
  legalName: string;
  /** Romanian fiscal code. A verifiable registration is a real trust signal. */
  vatId: string;
  /** The person who does the work and attends every job. */
  owner: string;
  yearsExperience: number;
  tagline: string;

  phone: {
    /** Human-readable, for display only. */
    display: string;
    /** RFC 3966 — no spaces, or in-app browsers mishandle the tel: link. */
    href: string;
  };
  /** Digits only, for wa.me links. */
  whatsapp: string;
  email: string;
  url: string;

  /** No public premises: this is a service-area business, so no street address
   *  and no geo coordinates are published. */
  serviceArea: {
    base: string;
    radiusKm: number;
    /** Only localities where work has genuinely been done. Empty is honest. */
    localities: string[];
  };

  hours: OpeningHours[];
  /** Shown alongside hours. Prevents the midnight call that becomes a 1-star review. */
  hoursNote: string;

  warranty: {
    months: number;
    /** Verbal today. Flip to true only when it is printed on the invoice. */
    written: boolean;
  };
  providesEstimate: boolean;
  providesInvoice: boolean;

  /** Empty until the exact documents are confirmed. While empty, no page may
   *  use the word "autorizat" — the components render nothing. */
  credentials: Credential[];
  /** Empty → `sameAs` is omitted from JSON-LD rather than emitted empty. */
  socials: SocialProfile[];
  /** Null until the Google Business Profile exists. */
  googleBusinessProfile: string | null;
}

export const business: Business = {
  // ─── Change the public name here, and only here ───────────────────────────
  name: 'Leonte Install',
  // ──────────────────────────────────────────────────────────────────────────
  legalName: 'PFA Leonte GH Cătălin',
  vatId: '37412949',
  owner: 'Cătălin Leonte',
  yearsExperience: 15,
  tagline: 'Confort pentru casa ta',

  phone: {
    display: '0742 634 550',
    href: '+40742634550',
  },
  whatsapp: '40742634550',
  email: 'catalin@instalatiisuceava.ro',
  url: 'https://instalatiisuceava.ro',

  serviceArea: {
    base: 'Suceava',
    radiusKm: 100,
    localities: [],
  },

  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
      label: 'Luni – Vineri',
    },
    {
      days: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
      label: 'Sâmbătă',
    },
  ],
  hoursNote:
    'Programul poate varia în funcție de lucrările în desfășurare. Nu preiau intervenții pe timp de noapte.',

  warranty: { months: 12, written: false },
  providesEstimate: true,
  providesInvoice: true,

  credentials: [],
  socials: [],
  googleBusinessProfile: null,
};

/** `tel:` href, guaranteed space-free. */
export const telHref = `tel:${business.phone.href}`;

/** WhatsApp deep link. */
export const whatsappHref = `https://wa.me/${business.whatsapp}`;

export const mailtoHref = `mailto:${business.email}`;

/**
 * Warranty phrasing. Only claims "scrisă" when it genuinely is — a verbal
 * warranty described as written is the kind of small lie that costs a review.
 */
export function warrantyLabel(): string {
  const { months, written } = business.warranty;
  return written ? `Garanție scrisă ${months} luni` : `Garanție ${months} luni`;
}

/** True only when a valid, unexpired credential exists. */
export function hasValidCredentials(now = new Date()): boolean {
  return business.credentials.some(
    (c) => !c.expires || new Date(c.expires) > now,
  );
}
