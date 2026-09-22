# Atelier di Architettura — Palette & Interventi

Documento di sintesi del sito (arch. Ivan Gentilini, Ravenna): palette,
errori corretti e migliorie. Stack: Astro 5 + Tailwind. Build verde, 16 pagine.

---

## 1. Palette del sito

Base **sabbia calda** + accento **terracotta acceso**. Centralizzata nei token
(`tailwind.config.mjs`): cambiando qui i valori si aggiorna tutto il sito.

| Token | HEX | Uso |
|---|---|---|
| `accent` | **#e4572e** | bottoni, link, eyebrow, icone, riga intro, bottone WhatsApp |
| `accent.dark` | **#c8441f** | hover degli elementi accento |
| `ink` | **#1c1b19** | testo forte, header/footer scuri, sezioni scure |
| `body` | **#2e2a24** | testo corrente (caldo, alto contrasto) |
| `paper` | **#f5eee1** | fondo pagina (sabbia chiarissima) |
| `sand.light` | **#ede3d2** | fondo sezioni alternate |
| `sand` | **#e4d7c3** | corsivi/accenti su fondo scuro (es. hero) |
| `grey` | **#94856f** | testo secondario (sabbia-grigio) |

Tipografia: **Newsreader** (titoli, serif) + **Inter** (testo). Font locali,
nessuna richiesta esterna.

> Nota: la palette è una **proposta da validare** (il cliente non ha colori di
> brand); derivata da logo monocromatico + copertina legno/mattone/toni caldi.

---

## 2. Errori corretti

- **Palette non aggiornata nell'anteprima.** Il dev server aveva in cache la
  vecchia config Tailwind e mostrava un terracotta spento (`#b5654a`). Riavviato:
  ora mostra il colore corretto `#e4572e`. Il build era già giusto.
- **Build che falliva** su `export interface Props` nei componenti `.astro`
  (crash esbuild con Node 24): rimosso `export`, build verde.
- **Indirizzo in conflitto** (Via di Roma 151 vs 268): **confermato 268** dal
  cartello di cantiere e dal link Maps fornito.
- **Render spacciati per realizzati** (rischio deontologico, DPR 137/2012): i
  render sono etichettati **"Render di progetto"** e taggati `RENDER`, separati
  dal lavoro reale (Recupero corte a Cotignola).
- **Copy promozionale ingannevole escluso** ("Rogito Garantito", "Massimizza
  l'indennizzo", percentuali senza fonte, "Altri ti vendono sogni"): non usato.
- **Recensioni rimosse**: l'unica su Facebook è di un familiare (stesso cognome),
  le altre non verificabili → sezione tolta per non esporre lo studio.
- **Form neutralizzato**: non spedisce a nessun servizio (nessun endpoint) →
  fallback `mailto` verso la gmail; nessun tracker/analytics caricato.
- **Grafiche con refusi** dei post FB ("subitodanni", "Romagana"): scartate.

---

## 3. Migliorie effettuate

**Identità & immagini**
- **Logo** estratto in PNG trasparente (versione scura + chiara): nitido su
  header chiaro, sull'hero scuro e nel footer.
- **Foto reali da Facebook** nel portfolio: progetto **"Recupero corte a
  Cotignola"** (reale, con galleria di cantiere) + 5 render di progetto.
- **Mappa Google** reale su Contatti (Via di Roma 268, senza API key).

**Animazioni & UI**
- **Intro animata** all'apertura (logo + riga terracotta), 1 volta a sessione.
- **Hero a slider**: le immagini cambiano in dissolvenza + Ken Burns (autoplay).
- **Icone servizi** vettoriali su misura (pianta, cazzuola, poltrona, casco…).
- **Foto dei 4 step** del metodo (Ascolto/Progetto/Scelte reale-cantiere).
- **Bottone WhatsApp** flottante in basso a destra, nella palette del sito.

**Contenuti & navigazione**
- Testi editoriali (servizi, metodo, FAQ, intro pagine, privacy/cookie) scritti
  come **bozza da approvare**, senza promesse.
- Nav **"Contatti"** → in fondo alla landing; bottone **"Contattaci"** → pagina.

---

## 4. Da completare prima del go-live (dati del cliente)

Alcuni segnaposto `[[DA COMPILARE]]` sono **ancora visibili** a schermo:

- **Orari** (pagina Contatti) e **superfici** dei progetti.
- **Pagina News**: 4 schede segnaposto (o si rimuove la pagina se non serve).
- **Dati legali/fiscali**: ordine + n° iscrizione (obbligatorio), PEC, REA,
  indirizzo esatto sede Cotignola.

Tecnici (non visibili):
- **Dominio**: impostare `SITE_URL` su Netlify per canonical/OG/sitemap
  (ora è un dominio segnaposto).
- **Logo SVG**, **favicon** e **immagine Open Graph** definitivi dal cliente.
- **ID GA4** se si vuole l'analytics.

> Il sito è pronto per un **deploy di anteprima/staging**; prima del go-live
> pubblico conviene riempire i punti visibili qui sopra.
