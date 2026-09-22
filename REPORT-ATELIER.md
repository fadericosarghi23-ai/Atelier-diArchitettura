# Report riempimento — Atelier di Architettura (arch. Ivan Gentilini)

Clone di **base-interior** riempito dalla mappa `mappa-riempimento-atelier-gentilini-v2.md`
(fonte: pagina Facebook, 22/09/2026). Cartella: `atelier-gentilini/`, porta dev **4556**.

## Esito

- **Build:** verde — 16 pagine.
- **Segnaposto:** 234 di partenza → **46 rimasti**. Aggiunta una passata di **bozze editoriali** (da far approvare, stile RISCRITTO): descrizioni degli 8 servizi, 4 step del metodo, 10 FAQ, intro di tutte le pagine, paragrafi home/footer, sommario/intro del progetto reale, testi privacy/cookie (boilerplate GDPR da validare legalmente). NESSUN dato fattuale/legale inventato.
- I 46 segnaposto residui sono SOLO dati veri che ha il cliente: progetti 2-6 (identità+foto), REA/PEC/ordine+iscrizione, indirizzo Cotignola/orari/dominio/GA4, voci news, OG/favicon/logo SVG, mappa, superficie progetti.
- **Immagini reali inserite: 3** (estratte da Facebook via Chrome loggato, stopgap low-res):
  - `public/images/logo/atelier-logo.jpg` (540×540, monogramma raster) → header (mix-blend-multiply) e wordmark serif nel footer. **Serve comunque l'SVG dal cliente.**
  - `public/images/hero/copertina-legno.jpg` (1440×1800, soffitto in legno a vista) → hero della home.
  - `public/images/progetti/corte-cotignola.jpg` (1440×1920, corte/cantiere Cotignola) → progetto-01 (griglia home + portfolio + dettaglio).
  Le altre immagini (progetti 2-6, ritratto, step, servizi, news, OG) restano placeholder.

### Estrazione da Facebook — note
- Metodo: Chrome loggato (Claude in Chrome), foto aperte nel visore e scaricate come blob. Ha richiesto di **autorizzare i download automatici** da facebook.com.
- Limiti: gli URL/base64 fbcdn sono oscurati dall'estensione; risoluzione FB ricompressa (~1440px max); la **gran parte dei contenuti FB sono RENDER** o grafiche promozionali → non usati come "realizzato" (regola albo). Reali usabili trovati: copertina + corte Cotignola.
- **Palette cliente applicata via token** (`tailwind.config.mjs`, proposta da validare al Gate 0): ink `#1c1b19`, accent mattone `#b5654a`, sabbia `#e9e3da`, bianco caldo `#f7f4ef`, testo `#2e2b27`. Contrasto verificato.
- **Animazioni vive** (verificate a schermo): hero-slider (5 slide, autoplay), reveal allo scroll (32 elementi, 14 visibili dopo scroll), header sticky, menu mobile, filtro portfolio, cookie banner.
- **Sezione Recensioni rimossa** (nessuna testimonianza utilizzabile, come da mappa).
- **Form:** non spedisce (nessun endpoint) → fallback `mailto` verso archigentilini81@gmail.com.
- **Residuo base/studiodom:** zero.

## Riempito (contenuto reale dalla mappa)

- **Identità:** Atelier di Architettura · ragione sociale "…di Gentilini Ivan" · P.IVA 02359570393 (storica) · Ravenna · fondazione 2015.
- **Contatti:** tel 348 929 1092 · WhatsApp wa.me/393489291092 · email archigentilini81@gmail.com · sede Via di Roma 268, 48121 Ravenna · sede operativa Cotignola (RA) · Facebook.
- **Hero:** headline verbatim "Non progettiamo spazi. Diamo forma a visioni." + sottotitolo + CTA WhatsApp.
- **Studio:** testo "Il nostro approccio" (verbatim post 14) + bio arch. Ivan Gentilini (riscritta da dati storici).
- **Servizi:** 8 titoli (Progettazione, Ristrutturazioni, Interior, Direzione lavori, Render 3D, RTI, Perizie alluvione, Catasto/APE) + descrizione RTI (verbatim, ripulita).
- **Etichette UI / meta:** titoli di sezione, CTA, `<title>` e meta description di tutte le pagine.

## Slot ancora APERTI (96) — cosa serve

**Da chiedere al cliente (buchi dichiarati):**
1. **Logo in SVG** (manca del tutto) → header/footer restano "LOGO", favicon e OG segnaposto.
2. **Foto in alta** di tutti i progetti (nome, località, anno, e quali sono render vs realizzati) → `data/projects.ts`: 30 slot (6 nomi, 6 località, 6 anni, 6 sommari, 6 intro) + tutte le anteprime/cover/gallery restano placeholder.
3. **Ritratto** di Ivan Gentilini + foto studio → placeholder in /studio.
4. **Indirizzo legale corretto** (Via di Roma 151 o 268?) e indirizzo esatto di Cotignola (CAP + via).
5. **Ordine professionale e n. iscrizione** (obbligatorio per legge) · **PEC** · **REA** · conferma **P.IVA** e ragione sociale · titolare del trattamento per la privacy.
6. **Dominio** atelierdiarchitettura.com (offline: confermare/rinnovare o sceglierne uno nuovo) · **ID GA4**.
7. **Orari** o conferma "su appuntamento".
8. **Descrizioni servizi** (7 su 8, solo la RTI è fornita) → `data/services.ts`.
9. **Testi legali** privacy e cookie (corpo) → 7 slot.
10. **Email su dominio** (ora è gmail).

**Sezioni tenute a placeholder (tua scelta, contenuto non nella mappa):**
- **Come lavoriamo** (metodo, 4 step: titoli + descrizioni) — `data/process.ts` (8 slot).
- **News** (4 voci) — pagina news.
- **FAQ** (10 domande in home) — `data/faq.ts`.
- Paragrafi copy di raccordo (intro Servizi/Portfolio/Contatti, paragrafo servizi/dove siamo/racconto 2, paragrafo CTA footer, pay-off).

**Da validare al Gate 0 (non bloccanti):**
- Palette proposta (non sono HEX del cliente).
- Headline hero (usata la verbatim; alternativa "Dal progetto al cantiere, chiavi in mano.").
- Conferma elenco servizi (in particolare perizie alluvione e RTI) e testi riscritti.

## Note di conformità (dalla mappa)

- **Nessuna recensione pubblicata**: l'unica FB è di un familiare (stesso cognome), le altre non verificabili.
- **Copy promozionale escluso** ("Rogito Garantito", "Massimizza l'indennizzo", percentuali senza fonte, ecc.): lo studio è iscritto ad albo, la pubblicità dev'essere veritiera (DPR 137/2012).
