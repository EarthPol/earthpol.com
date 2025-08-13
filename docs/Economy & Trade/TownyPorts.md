---
title: TownyPorts
description: Empower your non-capital towns with strategic port teleportation.
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Admonition from '@theme/Admonition'

<div style={{ textAlign: 'center' }}>
  <img src="/img/townyports-thumbnail.png" alt="Towny Ports" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Towny Ports and how to use it!</em></p>
</div>

# TownyPorts 🌊

**TownyPorts** unlocks the economic and geopolitical power of waterways by letting non-capital towns set **port plots** that visitors can teleport to—for a configurable fee. Perfect for boosting trade, tourism, and strategic depth in your Towny world.

<Admonition type="note">
Port plots are only valid in **Ocean**, **River**, and **Beach** biomes. Players must stand on a port plot to initiate travel.
</Admonition>

---


## 👩‍💻 Quick Start

<Tabs defaultValue="setup" values={[
{label: 'Setup', value: 'setup'},
{label: 'Travel', value: 'travel'},
{label: 'Info',   value: 'info'},
]}>
<TabItem value="setup">

```shell
/plot set port
```
Mark your current plot as the town’s official port plot.

```shell
/t port price <town>
```
View the Port Fee of that Town.

```shell
/t set port price <amount>
```
Set the fee of your own Port.

```shell
/t set port spawn
```
Set the spawn location of your Port.
</TabItem>

  <TabItem value="travel">

```shell
/t port <townName>
```
Teleport to another town’s port—provided you’re standing on your town’s port plot.
</TabItem>

<TabItem value="info">

```shell
/distance <townA> <townB>
```
Compute the chunk-distance between two towns’ homeblocks.
</TabItem>
</Tabs>

---

## ⚙️ Configuration

<details>
<summary><strong>Default <code>settings.yml</code></strong></summary>

```yaml
uses-economy: true
minimum-port-fee: 10
maximum-port-fee: 100
currency-sign: "$"
maximum-port-distance-in-chunks: 2750
port-travel-cooldown-in-seconds: 60
port-travel-warmup-in-ticks: 100
port-travel-denies-for-enemies: true
```
</details>

---

## 🔒 Permissions

| Permission                     | Description                                            |
|--------------------------------|--------------------------------------------------------|
| `townyports.port.set`          | Allow the resident to adjust port settings.            |
| `townyports.port.price`        | Allows the resident to see port prices of other towns. |
| `townyports.bypass.wilderness` | Allows the resident to use ports from the wilderness.  |
| `townyports.bypass.distance`   | Allows the resident to use ports from any distance.    |
| `townyports.bypass.biome`      | Allows the resident to set a port in any biome.        |

---

## 🛠️ Behind the Scenes

1. **Port Plot Creation**  
   Use `/plot set port` in an eligible biome to claim your town’s port.

2. **Spawn Point**  
   Town mayors can call `/t set port spawn` to record their exact location as the teleport target.

3. **Teleportation**  
   Visitors standing on a port plot use `/t port <town>` to pay the configured fee and teleport directly to the saved spawn location.

4. **Enforcement**
    - **Biome checks** (oceans, rivers, beaches)
    - **Nation relations** (enemy nations are blocked)
    - **Distance limits** (configurable maximum chunk range)
    - **Cooldown & Warmup** (prevent spam and allow dramatic departures)

---





