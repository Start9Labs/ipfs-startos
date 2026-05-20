# Updating the upstream version

IPFS for StartOS wraps a single upstream — the official Kubo container image. The image tag is the only pin to update.

## Determining the upstream version

- **Kubo** ([ipfs/kubo](https://github.com/ipfs/kubo)) — latest release:

  ```
  gh release view -R ipfs/kubo --json tagName -q .tagName
  ```

  Cross-check the Docker tag is published on Docker Hub ([ipfs/kubo](https://hub.docker.com/r/ipfs/kubo)):

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/ipfs/kubo/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  Pinned in `startos/manifest/index.ts` as `images.ipfs.source.dockerTag`.

## Applying the bump

- **`startos/manifest/index.ts`** — set `images.ipfs.source.dockerTag` to `ipfs/kubo:v<new version>`.
