/**
 * IDENTITÀ DEL SITO — Atelier di Architettura (arch. Ivan Gentilini), Ravenna.
 * Fonte dati: pagina Facebook (raccolta 22/09/2026) + dati storici da riconfermare.
 * I valori mancanti (buchi dichiarati nella mappa) restano [[DA COMPILARE]].
 */
export const site = {
  name: 'Atelier di Architettura',
  legalName: 'Atelier di Architettura di Gentilini Ivan',
  brandLong: 'Dal progetto al cantiere', // pay-off BOZZA da approvare
  role: 'Studio di architettura a Ravenna',
  city: 'Ravenna',
  foundingYear: '2015',

  // Dominio atelierdiarchitettura.com OFFLINE (non risolve): resta finto finché non
  // confermato/rinnovato. Serve un URL valido per canonical/OG/sitemap.
  domain: 'https://esempio-dominio.it',

  email: 'archigentilini81@gmail.com', // gmail — valutare indirizzo su dominio
  phoneDisplay: '348 929 1092',
  phoneE164: '+393489291092',
  whatsapp: 'https://wa.me/393489291092',

  vat: '02359570393', // STORICO — da riconfermare
  rea: '[[DA COMPILARE: numero REA]]',
  pec: '[[DA COMPILARE: indirizzo PEC]]',
  // Obbligatori per legge (D.Lgs. 70/2003): ordine e numero di iscrizione.
  ordine: '[[DA COMPILARE: ordine professionale e n. iscrizione]]',

  hours: '[[DA COMPILARE: orari o "su appuntamento"]]',
  hoursNote: '[[DA COMPILARE: nota orari]]',

  addresses: [
    {
      label: 'Sede',
      full: 'Via di Roma 268, 48121 Ravenna (RA)', // in conflitto con dato storico (civico 151)
      street: 'Via di Roma 268',
      zip: '48121',
      city: 'Ravenna',
      province: 'RA',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20di%20Roma%20268%2C%2048121%20Ravenna',
    },
    {
      label: 'Sede operativa',
      full: 'Cotignola (RA)', // indirizzo esatto da confermare (storico: Via Roma 42)
      street: '[[DA COMPILARE: via e numero sede Cotignola]]',
      zip: '[[DA COMPILARE: CAP]]',
      city: 'Cotignola',
      province: 'RA',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cotignola%20RA',
    },
  ],

  geo: { region: 'IT-RA', lat: 0, lng: 0 },

  socials: [
    { label: 'Facebook', url: 'https://www.facebook.com/architettogentilini/' },
  ],

  // Tecnici — neutralizzati.
  formEndpoint: '', // VUOTO = il form non spedisce (fallback mailto verso la gmail).
  ga4Id: '[[DA COMPILARE: ID GA4 — nessun tracker caricato finché è placeholder]]',
} as const;
