/**
 * PORTFOLIO — progetti. Immagini reali estratte dalla pagina Facebook.
 * - progetto-01: intervento REALE (cantiere Cotignola), con galleria.
 * - progetto-02..06: RENDER di progetto (marcati `render: true`), NON presentati
 *   come lavori realizzati (regola albo). Titoli descrittivi, dati da confermare.
 */
export interface ProjectImage { src?: string; w: number; h: number; label: string; }
export interface Project {
  slug: string;
  title: string;
  place: string;
  year: string;
  tags: string[];
  render?: boolean; // immagine = render, non foto di realizzato
  hero?: boolean;
  home?: boolean;
  img?: string;     // cover reale
  preview: ProjectImage;
  cover: ProjectImage;
  summary: string;
  intro: string;
  gallery: ProjectImage[];
}

export const categories = [
  { slug: 'residenziale', label: 'Residenziale' },
  { slug: 'interior-design', label: 'Interior design' },
  { slug: 'recupero', label: 'Recupero' },
  { slug: 'render', label: 'Render' },
] as const;

export const projects: Project[] = [
  {
    slug: 'recupero-corte-cotignola', home: true,
    title: 'Recupero corte a Cotignola',
    place: 'Cotignola (RA)',
    year: '',
    tags: ['residenziale', 'recupero'],
    img: '/images/progetti/corte-cotignola.jpg',
    preview: { src: '/images/progetti/corte-cotignola.jpg', w: 1440, h: 1920, label: 'Corte a Cotignola' },
    cover: { src: '/images/progetti/corte-cotignola.jpg', w: 1440, h: 1920, label: 'Corte a Cotignola' },
    summary: 'Recupero di una corte a Cotignola, seguito con progetto e direzione lavori.',
    intro: 'Progetto e direzione dei lavori per il recupero di una corte a Cotignola (RA), seguito in cantiere passo dopo passo nel rispetto del carattere dell’edificio esistente. [Bozza: dati del progetto da confermare col cliente.]',
    gallery: [
      { src: '/images/progetti/cotignola-01.jpg', w: 1440, h: 1440, label: 'Cantiere — demolizioni' },
      { src: '/images/progetti/cotignola-02.jpg', w: 1440, h: 1440, label: 'Cantiere — interni' },
      { src: '/images/progetti/cotignola-03.jpg', w: 1440, h: 1440, label: 'Cantiere — tavole di progetto' },
      { src: '/images/progetti/cotignola-04.jpg', w: 1440, h: 1440, label: 'Cantiere — ingresso' },
    ],
  },
  {
    slug: 'render-villa-giardino', home: true, render: true,
    title: 'Villa con giardino',
    place: 'Render di progetto', year: '',
    tags: ['residenziale', 'render'],
    img: '/images/progetti/render-01.jpg',
    preview: { src: '/images/progetti/render-01.jpg', w: 1065, h: 710, label: 'Render villa con giardino' },
    cover: { src: '/images/progetti/render-01.jpg', w: 1065, h: 710, label: 'Render villa con giardino' },
    summary: 'Render di progetto di una villa unifamiliare con giardino.',
    intro: 'Visualizzazione 3D di progetto (render) di una villa unifamiliare con giardino. [Immagine di progetto, non realizzato.]',
    gallery: [{ src: '/images/progetti/render-01.jpg', w: 1065, h: 710, label: 'Render — esterno' }],
  },
  {
    slug: 'render-terrazza-pergolato', home: true, render: true,
    title: 'Terrazza e pergolato',
    place: 'Render di progetto', year: '',
    tags: ['residenziale', 'render'],
    img: '/images/progetti/render-02.jpg',
    preview: { src: '/images/progetti/render-02.jpg', w: 1064, h: 707, label: 'Render terrazza e pergolato' },
    cover: { src: '/images/progetti/render-02.jpg', w: 1064, h: 707, label: 'Render terrazza e pergolato' },
    summary: 'Render di progetto di una zona esterna con pergolato.',
    intro: 'Visualizzazione 3D di progetto (render) di una terrazza con pergolato. [Immagine di progetto, non realizzato.]',
    gallery: [{ src: '/images/progetti/render-02.jpg', w: 1064, h: 707, label: 'Render — terrazza' }],
  },
  {
    slug: 'render-interni-living', home: true, render: true,
    title: 'Interni living',
    place: 'Render di progetto', year: '',
    tags: ['interior-design', 'render'],
    img: '/images/progetti/render-interni.jpg',
    preview: { src: '/images/progetti/render-interni.jpg', w: 1440, h: 959, label: 'Render interni living' },
    cover: { src: '/images/progetti/render-interni.jpg', w: 1440, h: 959, label: 'Render interni living' },
    summary: 'Render di progetto di una zona living con cucina a vista.',
    intro: 'Visualizzazione 3D di progetto (render) di una zona giorno. [Immagine di progetto, non realizzato.]',
    gallery: [{ src: '/images/progetti/render-interni.jpg', w: 1440, h: 959, label: 'Render — living' }],
  },
  {
    slug: 'render-villa-contemporanea', home: true, render: true,
    title: 'Villa contemporanea',
    place: 'Render di progetto', year: '',
    tags: ['residenziale', 'render'],
    img: '/images/progetti/render-03.jpg',
    preview: { src: '/images/progetti/render-03.jpg', w: 1440, h: 959, label: 'Render villa contemporanea' },
    cover: { src: '/images/progetti/render-03.jpg', w: 1440, h: 959, label: 'Render villa contemporanea' },
    summary: 'Render di progetto di una villa contemporanea.',
    intro: 'Visualizzazione 3D di progetto (render) di una villa contemporanea. [Immagine di progetto, non realizzato.]',
    gallery: [{ src: '/images/progetti/render-03.jpg', w: 1440, h: 959, label: 'Render — esterno' }],
  },
  {
    slug: 'render-villa-moderna', home: true, render: true,
    title: 'Villa moderna',
    place: 'Render di progetto', year: '',
    tags: ['residenziale', 'render'],
    img: '/images/progetti/render-04.jpg',
    preview: { src: '/images/progetti/render-04.jpg', w: 1440, h: 958, label: 'Render villa moderna' },
    cover: { src: '/images/progetti/render-04.jpg', w: 1440, h: 958, label: 'Render villa moderna' },
    summary: 'Render di progetto di una villa moderna.',
    intro: 'Visualizzazione 3D di progetto (render) di una villa moderna. [Immagine di progetto, non realizzato.]',
    gallery: [{ src: '/images/progetti/render-04.jpg', w: 1440, h: 958, label: 'Render — esterno' }],
  },
];

export const catLabel = (slug: string): string =>
  categories.find((c) => c.slug === slug)?.label ?? slug;
