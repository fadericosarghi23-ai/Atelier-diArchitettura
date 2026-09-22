/**
 * FAQ — 10 domande frequenti (home, due colonne, + JSON-LD FAQPage).
 * Testi = BOZZA BD Media da far approvare (veritieri, senza promesse).
 */
export interface Faq { q: string; a: string; }

export const faqs: Faq[] = [
  {
    q: 'Di cosa si occupa Atelier di Architettura?',
    a: 'Ci occupiamo di progettazione architettonica, interior design, ristrutturazioni e direzione dei lavori, oltre a render 3D, pratiche catastali e certificazioni energetiche. Seguiamo il progetto dal concept fino alla realizzazione.',
  },
  {
    q: 'Dove ha sede lo studio?',
    a: 'Lo studio ha sede a Ravenna e opera anche a Cotignola (RA) e nel territorio circostante. Per la sede esatta e gli orari puoi contattarci.',
  },
  {
    q: 'Seguite ristrutturazioni complete?',
    a: 'Sì. Seguiamo la ristrutturazione in ogni fase, dal progetto alla direzione dei lavori, coordinando imprese e artigiani fino alla consegna degli spazi.',
  },
  {
    q: 'Come si svolge il primo incontro?',
    a: 'Iniziamo con un incontro conoscitivo e, quando utile, un sopralluogo, per analizzare esigenze, budget e caratteristiche dell’immobile. Puoi scriverci anche su WhatsApp.',
  },
  {
    q: 'Realizzate render 3D del progetto?',
    a: 'Sì. Utilizziamo modellazione 3D e render fotorealistici, con simulazioni di materiali e colori, per farti vedere il risultato prima dei lavori.',
  },
  {
    q: 'Vi occupate anche delle pratiche tecniche?',
    a: 'Sì. Curiamo pratiche catastali, attestati di prestazione energetica (APE) e i principali adempimenti tecnico-amministrativi legati all’immobile.',
  },
  {
    q: 'Che cos’è la Relazione Tecnica Integrata (RTI)?',
    a: 'È il documento che verifica la conformità urbanistica e catastale di un immobile prima di una compravendita: che la casa corrisponda al progetto depositato in Comune e che la planimetria sia esatta.',
  },
  {
    q: 'Offrite assistenza per i danni da alluvione?',
    a: 'Sì. Redigiamo la perizia tecnica dei danni e assistiamo nella predisposizione della pratica di rimborso.',
  },
  {
    q: 'In quali zone lavorate?',
    a: 'Operiamo principalmente a Ravenna, a Cotignola e nel territorio della provincia. Per interventi in altre zone puoi contattarci.',
  },
  {
    q: 'Come posso contattarvi?',
    a: 'Puoi scriverci su WhatsApp, chiamarci o inviarci un messaggio dal modulo contatti: ti rispondiamo per fissare un primo confronto.',
  },
];
