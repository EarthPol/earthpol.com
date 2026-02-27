---
title: Optimizations
description: "Guide to Optimizations on EarthPol, including key mechanics, commands, and tips."
---

## Server Optimizations
- In order to accomodate as many players as reasonably possible while still ensuring a smooth experience, we must perform optimizations in order to boost server performance.
- The following are the currently applied optimizations that affect players.

## Farms

### Animal farms
Animal farm optimizations apply within a 5 block radius. Optimizations are not applied to animals currently being leashed by a player or named animals.
- Greater than 15 animals: Removal of mob AI.
- 20 animals: Breeding is disabled.
- Over 20 animals: Animalls will be culled and killed by the server.
- **Sparse animal farm optimization**: Limit of 50 animals of the same type within a 160 block radius; excess mobs are culled and killed by the server.

## Redstone
Redstone is being optimized and may work slightly differently than vanilla.
- PaperMC redstone setting: `redstone-implementation: ALTERNATE_CURRENT`
- If you would like to test redstone builds in a separate world for use in the server, you can host a Paper or Folia server and set the `redstone-implementation` setting to `ALTERNATE_CURRENT` in your `paper-world-defaults.yml`. Staff will not provide support for how to do this; this information is simply being provided for your convenience.

