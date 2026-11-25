import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.43.2:0',
  releaseNotes: {
    en_US: `Updated Kubo (IPFS) to 0.43.2.

**Security**

- Fixes several ways a remote peer could exhaust the node's memory or crash it.

**Fixes**

- The node no longer stops accepting new peers after running for a while.
- Files in the Admin Portal's Files view no longer hang when garbage collection runs at the same time.

**Changes**

- \`ipfs://\` and \`ipns://\` links are accepted wherever a CID or path is.
- Kubo collects and sends no telemetry.
- Gateway responses carry an \`Ipfs-Uri\` header in place of \`X-Ipfs-Path\`; tools that read the old header need updating.

Release notes: https://github.com/ipfs/kubo/blob/v0.43.2/docs/changelogs/v0.43.md`,
    es_ES: `Kubo (IPFS) actualizado a 0.43.2.

**Seguridad**

- Corrige varias formas en que un par remoto podía agotar la memoria del nodo o hacerlo fallar.

**Correcciones**

- El nodo ya no deja de aceptar nuevos pares tras funcionar un tiempo.
- La vista Archivos del Portal de administración ya no se bloquea cuando la recolección de basura se ejecuta al mismo tiempo.

**Cambios**

- Se aceptan enlaces \`ipfs://\` e \`ipns://\` en cualquier lugar donde se acepta un CID o una ruta.
- Kubo no recopila ni envía telemetría.
- Las respuestas de la puerta de enlace incluyen la cabecera \`Ipfs-Uri\` en lugar de \`X-Ipfs-Path\`; las herramientas que leen la cabecera antigua deben actualizarse.

Notas de la versión: https://github.com/ipfs/kubo/blob/v0.43.2/docs/changelogs/v0.43.md`,
    de_DE: `Kubo (IPFS) auf 0.43.2 aktualisiert.

**Sicherheit**

- Behebt mehrere Wege, auf denen ein entfernter Peer den Speicher des Nodes erschöpfen oder ihn abstürzen lassen konnte.

**Korrekturen**

- Der Node nimmt nach längerer Laufzeit weiterhin neue Peers an.
- Die Dateiansicht im Admin-Portal hängt nicht mehr, wenn gleichzeitig die Garbage Collection läuft.

**Änderungen**

- \`ipfs://\`- und \`ipns://\`-Links werden überall angenommen, wo eine CID oder ein Pfad erwartet wird.
- Kubo erhebt und sendet keine Telemetrie.
- Gateway-Antworten enthalten den Header \`Ipfs-Uri\` statt \`X-Ipfs-Path\`; Werkzeuge, die den alten Header lesen, müssen aktualisiert werden.

Versionshinweise: https://github.com/ipfs/kubo/blob/v0.43.2/docs/changelogs/v0.43.md`,
    pl_PL: `Zaktualizowano Kubo (IPFS) do 0.43.2.

**Bezpieczeństwo**

- Naprawia kilka sposobów, w jakie zdalny węzeł mógł wyczerpać pamięć węzła lub doprowadzić do jego awarii.

**Poprawki**

- Węzeł nie przestaje przyjmować nowych węzłów po dłuższym działaniu.
- Widok Pliki w Portalu administracyjnym nie zawiesza się już, gdy jednocześnie działa odśmiecanie.

**Zmiany**

- Linki \`ipfs://\` i \`ipns://\` są akceptowane wszędzie tam, gdzie CID lub ścieżka.
- Kubo nie zbiera ani nie wysyła telemetrii.
- Odpowiedzi bramy zawierają nagłówek \`Ipfs-Uri\` zamiast \`X-Ipfs-Path\`; narzędzia odczytujące stary nagłówek wymagają aktualizacji.

Informacje o wydaniu: https://github.com/ipfs/kubo/blob/v0.43.2/docs/changelogs/v0.43.md`,
    fr_FR: `Kubo (IPFS) mis à jour vers 0.43.2.

**Sécurité**

- Corrige plusieurs moyens par lesquels un pair distant pouvait épuiser la mémoire du nœud ou le faire planter.

**Correctifs**

- Le nœud n'arrête plus d'accepter de nouveaux pairs après avoir fonctionné un certain temps.
- La vue Fichiers du Portail d'administration ne se bloque plus lorsque le ramasse-miettes s'exécute en même temps.

**Changements**

- Les liens \`ipfs://\` et \`ipns://\` sont acceptés partout où un CID ou un chemin l'est.
- Kubo ne collecte ni n'envoie aucune télémétrie.
- Les réponses de la passerelle portent l'en-tête \`Ipfs-Uri\` à la place de \`X-Ipfs-Path\` ; les outils qui lisent l'ancien en-tête doivent être mis à jour.

Notes de version : https://github.com/ipfs/kubo/blob/v0.43.2/docs/changelogs/v0.43.md`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
