import { VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_41_0_1 = VersionInfo.of({
  version: '0.41.0:1',
  releaseNotes: {
    en_US: `**Bumps**

- Kubo → 0.41.0
- start-sdk → 1.5.2`,
    es_ES: `**Actualizaciones**

- Kubo → 0.41.0
- start-sdk → 1.5.2`,
    de_DE: `**Aktualisierungen**

- Kubo → 0.41.0
- start-sdk → 1.5.2`,
    pl_PL: `**Aktualizacje**

- Kubo → 0.41.0
- start-sdk → 1.5.2`,
    fr_FR: `**Mises à jour**

- Kubo → 0.41.0
- start-sdk → 1.5.2`,
  },
  migrations: {
    up: async ({ effects }) => {
      // remove old start9 dir
      await rm('/media/startos/volumes/main/start9', { recursive: true }).catch(
        console.error,
      )
    },
    down: async ({ effects }) => {},
  },
})
