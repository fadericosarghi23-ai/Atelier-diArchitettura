/**
 * METODO — 4 step "Come lavoriamo" (home + pagina come-lavoriamo).
 * Testi = BOZZA BD Media da far approvare. Le immagini restano placeholder.
 */
export interface Step {
  n: string;
  title: string;
  text: string;
  img: { w: number; h: number; label: string };
  src?: string; // illustrazione on-brand (SVG) — sostituibile con foto verticale reale
}

export const steps: Step[] = [
  {
    n: '01',
    title: 'Ascolto',
    text: 'Partiamo dalle tue esigenze e da come immagini gli spazi. Un primo confronto e un sopralluogo ci permettono di capire desideri, vincoli e potenzialità dell’immobile.',
    img: { w: 1067, h: 1600, label: 'Step 01 — foto verticale' },
    src: '/images/metodo/step-01-ascolto.jpg',
  },
  {
    n: '02',
    title: 'Progetto',
    text: 'Traduciamo le tue parole in un progetto su misura, con proposte distributive, materiali e viste 3D. Le valutiamo e le affiniamo insieme, passo dopo passo.',
    img: { w: 1067, h: 1600, label: 'Step 02 — foto verticale' },
    src: '/images/metodo/step-02-progetto.jpg',
  },
  {
    n: '03',
    title: 'Scelte',
    text: 'Scegliamo insieme materiali, finiture, colori e arredi, con moodboard e material board, per ambienti coerenti e su misura del tuo stile.',
    img: { w: 1067, h: 1600, label: 'Step 03 — foto verticale' },
    src: '/images/metodo/step-03-scelte.jpg',
  },
  {
    n: '04',
    title: 'Cantiere',
    text: 'Diamo forma al progetto seguendo il cantiere: coordiniamo imprese e fornitori e curiamo i dettagli fino alla consegna degli spazi finiti.',
    img: { w: 1067, h: 1600, label: 'Step 04 — foto verticale' },
    src: '/images/metodo/step-04-cantiere.jpg',
  },
];
