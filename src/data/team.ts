/**
 * TEAM — solo il titolare (unico dato disponibile). La bio è RISCRITTA da dati
 * storici, da far confermare al cliente. Ritratto: buco (foto da chiedere).
 */
export interface Member {
  name: string;
  role: string;
  bio: string;
  img: { w: number; h: number; label: string };
  founder?: boolean;
}

export const team: Member[] = [
  {
    founder: true,
    name: 'Ivan Gentilini',
    role: 'Architetto',
    bio: 'Architetto Ivan Gentilini. Laurea in Architettura a Ferrara nel 2007, esperienza in Archlabo a Ravenna e attività di certificatore energetico. Nel 2015 fonda Atelier di Architettura.',
    img: { w: 1000, h: 1250, label: 'Ritratto Ivan Gentilini (foto da fornire)' },
  },
];
