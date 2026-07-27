# Sito AID Mariano — Associazione Intercomunale Diabetici OdV

Sito web statico (HTML/CSS/JS, senza build) dell'Associazione Intercomunale Diabetici OdV di Mariano Comense.

## Struttura
```
index.html                → Home
pages/eventi.html         → Eventi e iniziative
pages/galleria.html       → Galleria fotografica
pages/giornalino.html     → Archivio "La Nostra Voce" (collegato alle cartelle Drive pubbliche)
pages/ricette.html        → "Le ricette di una volta" (+ disclaimer)
pages/direttivo.html      → L'Associazione, Direttivo 2026–2028, info societarie, trasparenza
pages/contatti.html       → Contatti + modulo (Netlify Forms)
pages/messaggio-direttivo.html → Messaggio completo del nuovo Direttivo
pages/area-soci.html      → Area riservata (login, predisposta per Supabase — Fase 2)
css/style.css             → Design system (palette e font del sito attuale)
js/layout.js              → Header e footer condivisi + menu mobile
assets/logo.png           → Logo ufficiale
```

## Come pubblicarlo gratis su Netlify
1. Crea un repository su GitHub e carica questa cartella.
2. Su Netlify: "Add new site" → "Import from GitHub" → seleziona il repo. Nessun comando di build; publish directory = `.`.
3. Collega il dominio `aidmariano.it` (DNS presso il registrar) — gratuito su Netlify, si paga solo la registrazione del dominio.
4. Il modulo Contatti funziona automaticamente (Netlify Forms) una volta pubblicato.

## Da completare (prossimi passi)
- Foto reali del Direttivo (Executive) e foto di gruppo (al posto degli avatar con iniziali).
- Galleria eventi con fotografie.
- Locandina PDF del convegno ECM.
- Area Soci: autenticazione e database soci con Supabase; verbali riservati; rinnovo tessera.
- Donazioni (PayPal/Stripe).

## Palette (identica al sito attuale)
- Blu primario: `oklch(32% .11 260)`
- Azzurro: `oklch(68% .13 240)`
- Rosso accento: `oklch(55% .22 27)`
- Font: Source Sans 3 (testo), Poppins (titoli)
