/**
 * NAVIGAZIONE — rotte e struttura del menu.
 * Le ROTTE (href) sono la struttura del sito e vanno mantenute in sync con
 * i file in src/pages/. Le LABEL sono testo: al riempimento si possono
 * personalizzare, ma qui restano i nomi di sezione neutri della base.
 */
export const mainNav = [
  { label: 'Lo studio', href: '/studio/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Come lavoriamo', href: '/come-lavoriamo/' },
  { label: 'Portfolio', href: '/portfolio/' },
  // "Contatti" porta in fondo alla landing (sezione contatti della home)
  { label: 'Contatti', href: '/#contatti' },
] as const;

/** Colonna "Naviga" del footer (include voci secondarie). */
export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Lo studio', href: '/studio/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Come lavoriamo', href: '/come-lavoriamo/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Contatti', href: '/contatti/' },
  { label: 'News e pubblicazioni', href: '/news/' },
  { label: 'Mappa del sito', href: '/mappa-del-sito/' },
] as const;
