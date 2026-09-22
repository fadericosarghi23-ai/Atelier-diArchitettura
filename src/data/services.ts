/**
 * SERVIZI — titoli dai post FB; descrizioni = BOZZA BD Media da far approvare
 * al cliente (testo veritiero, senza promesse di risultato). La RTI è testo
 * del cliente ripulito.
 */
export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  home?: boolean;
}

export const services: Service[] = [
  {
    slug: 'progettazione-architettonica',
    title: 'Progettazione architettonica',
    excerpt: 'Dal concept al progetto esecutivo, per nuove costruzioni e recuperi.',
    body: 'Sviluppiamo il progetto architettonico in ogni fase, dal concept preliminare al progetto esecutivo, curando distribuzione, luce naturale e rapporto con il contesto. Coordiniamo i consulenti tecnici fino al deposito delle pratiche necessarie.',
    home: true,
  },
  {
    slug: 'ristrutturazioni',
    title: 'Ristrutturazioni',
    excerpt: 'Ristrutturazioni complete, seguite dal progetto al cantiere.',
    body: 'Seguiamo la ristrutturazione della casa in ogni passaggio: rilievo, progetto, scelta di materiali e finiture, coordinamento di imprese e artigiani. Un unico riferimento fino alla consegna degli spazi.',
    home: true,
  },
  {
    slug: 'interior-design',
    title: 'Interior design',
    excerpt: "Progetto d'interni su misura: materiali, colori e arredi.",
    body: 'Progettiamo gli interni su misura di chi li vive: layout, palette di materiali e colori, illuminazione e selezione degli arredi. Restituiamo il progetto con moodboard e viste tridimensionali per scegliere con consapevolezza.',
    home: true,
  },
  {
    slug: 'direzione-lavori',
    title: 'Direzione lavori',
    excerpt: 'Direzione dei lavori e coordinamento del cantiere.',
    body: 'Seguiamo il cantiere come direzione dei lavori, coordinando imprese e fornitori e verificando qualità, tempi e costi. Il cliente ha un interlocutore unico a tutela del progetto e del budget concordato.',
    home: true,
  },
  {
    slug: 'render-3d',
    title: 'Render e visualizzazione 3D',
    excerpt: 'Render fotorealistici e viste 3D del progetto.',
    body: 'Realizziamo modellazioni tridimensionali e render fotorealistici per visualizzare il risultato prima dei lavori. Le simulazioni di materiali e abbinamenti aiutano a decidere con serenità.',
  },
  {
    slug: 'rti',
    title: 'Relazione Tecnica Integrata (RTI)',
    excerpt: 'Verifica di conformità urbanistica e catastale per le compravendite.',
    body: 'La RTI verifica la conformità urbanistica — la casa corrisponde al progetto depositato in Comune — e la conformità catastale, ovvero l’esattezza della planimetria.',
  },
  {
    slug: 'perizie-alluvione',
    title: 'Perizie danni alluvione e assistenza rimborso Sfinge',
    excerpt: 'Perizia dei danni da alluvione e assistenza alla pratica di rimborso.',
    body: 'Redigiamo la perizia tecnica dei danni causati dall’alluvione e assistiamo nella predisposizione della pratica di rimborso, seguendo la documentazione richiesta dalle procedure competenti.',
  },
  {
    slug: 'pratiche-catastali',
    title: 'Pratiche catastali e certificazioni energetiche',
    excerpt: 'Pratiche catastali, APE e adempimenti tecnici sull’immobile.',
    body: 'Curiamo le pratiche catastali, gli attestati di prestazione energetica (APE) e i principali adempimenti tecnico-amministrativi legati all’immobile, sollevando il cliente dalla gestione burocratica.',
  },
];
