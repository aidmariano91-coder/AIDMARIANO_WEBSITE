# Area Soci — user flow (v1, anteprima)

Stato attuale: **UX/UI completa, login volutamente DISATTIVATO** in attesa di approvazione del Direttivo. Nessun collegamento a database o autenticazione; nessun dato reale dei soci (solo dati di esempio fittizi).

## Flusso del socio

```
Socio
  └─→ pages/area-soci.html          (gate di accesso)
        ├─ banner "Area in fase di attivazione"
        ├─ form email + password     → DISATTIVATO (campi disabled,
        │                              il pulsante mostra solo
        │                              "Area non ancora attiva")
        ├─ link a Contatti           (richiesta credenziali)
        └─→ pages/area-soci-dashboard.html   (solo come ANTEPRIMA)
              ├─ banner "Anteprima — dati di esempio"
              ├─ La tua tessera      (numero, anno, scadenza, stato)
              ├─ I tuoi dati         (anagrafica + "Aggiorna" demo)
              ├─ Verbali riservati   (elenco + download demo)
              ├─ Rinnovo tessera     (pulsante demo, futuro pagamento)
              └─ Esci                (demo: torna al gate)
```

## Passi futuri previsti (Fase 2, dopo approvazione del Direttivo)

1. **Autenticazione** email/password con Supabase Auth — progetto `AIDMariano_Soci` (`ptodzduxegtkngyrcymo`). Lato client andrà **solo la anon key pubblica**, mai la service_role.
2. **Policy RLS** sulla tabella `public.soci`: "ogni socio vede solo i propri dati". Oggi la RLS è attiva **senza alcuna policy** (tabella bloccata): va lasciata così finché l'area non viene attivata.
3. **Collegamento** `soci.user_id` → `auth.users` per associare ogni riga anagrafica al relativo account.
4. Dashboard collegata ai dati reali (tessera, anagrafica, verbali su storage riservato) e, in seguito, rinnovo tessera con pagamento online.

## Vincoli di sicurezza rispettati in questa versione

- Nessuna chiamata di autenticazione o query verso Supabase.
- Nessun dato reale: la dashboard mostra esclusivamente valori fittizi ("Mario Rossi", tessera AID-0000, ecc.).
- RLS della tabella `soci` invariata (attiva, senza policy).
- Nessuna chiave o segreto nel repository.
