---
title: TradeWar
sidebar_position: 1
---

# TradeWar

## Overview

TradeWar is a unique plugin designed for EarthPol, enabling nations to implement protectionist trade policies that influence the flow of goods and resources across borders. Nations can use these mechanisms to strategically limit trade with foreign or hostile entities, thereby creating leverage in diplomatic and economic negotiations. These policies provide alternatives to direct conflict and offer a strategic tool for nations to exert economic influence. Below is a quick reference guide to what these policies are:

- **Tariffs**: A tax on all goods traded in the issuing nation, increasing the price of foreign goods.
- **Sanctions**: Measures to prevent specific towns or players from buying items at shops within your nation.
- **Embargoes**: A broad ban that stops an entire nation’s members from purchasing goods at any shop within your nation.

---

### Tariffs

A tariff is a percentage increase on all shop transactions within the nation applying the tariff. All players, regardless of their relationship to the issuing nation, must pay this extra percentage when buying items within the nation’s shops.

For example, if Nation A applies a 10% tariff on all goods in their shops, any player from Nation B would have to pay 10% more for items bought within Nation A’s shops. This creates an economic incentive for players to trade locally or avoid certain nations where goods are more expensive due to the tariff.

**Commands for Tariffs:**

- `/nation tariff add <item> <percentage> [time]`: Add a tariff on an item with a specified percentage increase.
- `/nation tariff remove <item>`: Remove a tariff from a specific item.
- `/nation tariff remove all`: Remove all tariffs imposed by your nation.
- `/nation tariff <target> list`: List all active tariffs on a specific target.
- `/nation tariff list`: List all active tariffs in your nation.

---

### Sanctions

Sanctions are measures used to block specific towns or players within a hostile nation from buying items at your nation’s shops. Unlike tariffs, which target imports broadly, sanctions specifically hinder a targeted player or town’s ability to engage in trade at your markets.

**Commands for Sanctions:**

- `/nation sanction add <town/player>`: Add a town or player to your sanction list.
- `/nation sanction remove <town/player>`: Remove a town or player from your sanction list.
- `/nation sanction list`: View the list of towns/players currently sanctioned by your nation.

---

### Embargoes

Embargoes are broader measures that apply exclusively to entire nations. By imposing an embargo, a nation effectively prevents any of its members from purchasing items from shops in the embargoed nation. This can severely limit the target nation’s access to resources and trade, often leading to diplomatic or economic pressure.

**Commands for Embargoes:**

- `/nation embargo add <nation>`: Add a nation to your embargo list.
- `/nation embargo remove <nation>`: Remove a nation from your embargo list.
- `/nation embargo list`: View the list of nations your country has embargoed.

---
