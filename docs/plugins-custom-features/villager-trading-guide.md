---
title: Villager Trading Guide
description: How villager trade limits, shared stock, personal cooldowns, and prices work on this server.
sidebar_position: 3
---

This page explains how villager trading works on this server, what limits are shared, and what limits are personal.

> Important: all cooldowns on this page use real-world time, not Minecraft days. They continue counting down while you are offline.

## Quick Answer

| Rule | Current setting | Is it shared or personal? |
| --- | --- | --- |
| Shared villager trade stock | `8` uses by default | Shared per villager trade |
| Personal trade limit before cooldown | `8` uses by default | Personal per player, shared across all villagers for the same trade type |
| Personal trade cooldown | `4h` by default | Personal per player, shared across all villagers for the same trade type |
| Villager restock cooldown | `2h` | Shared per villager, per trade |
| Reputation and cure discounts | `20%` max discount | Personal pricing |
| Hero of the Village cap | `-1` | Vanilla HotV levels are allowed |
| Demand increase cap | `6` | Shared per villager trade |
| Disabled professions | none | Global |
| Disabled trade items | none | Global |
| Trading-disabled worlds | `world_nether`, `world_the_end` | Global |

## How Trading Works

When you open a villager, the plugin applies three main checks:

1. **Price rules** decide whether the trade is discounted or increased.
2. **Stock rules** decide how many times that villager can offer the trade before it sells out.
3. **Cooldown rules** decide whether you or the villager must wait before the trade becomes available again.

In practice, the flow looks like this:

1. A villager offers a trade.
2. That villager can usually sell that trade up to **8 times** before it is out of stock.
3. You can usually complete that trade type up to **8 times** before your personal cooldown starts.
4. Once a villager's shared stock is exhausted, that villager cannot restock that trade for **2 hours**.
5. Once your personal limit is exhausted, you cannot use that trade type from any villager until your cooldown ends.

## Shared vs Personal Limits

### Shared per villager

These limits belong to the villager, not to you:

- **Trade stock (`MaxUses`)**: if a villager has already sold a trade 5 times, the next player only gets the remaining stock.
- **Restock timer (`Restock`)**: once that villager's trade is exhausted, that villager must wait 2 real hours before restocking it.
- **Demand (`MaxDemand`)**: demand-based price increases belong to the villager's trade and are capped at 6.

### Personal per player

These limits belong to your account:

- **Trade limit and cooldown (`MaxUses` + `Cooldown`)**: you can usually make the same trade type **8 times** before you are put on a **4 hour** personal cooldown for that trade type.
- That personal timer follows **you**, not the villager.
- If another villager offers the same trade, it is still blocked for you until your cooldown expires.

### What this means in real play

- If someone else exhausts a villager's trade, you are blocked by that villager's **2 hour restock**, but your own personal limit does **not** change.
- If **you** hit your personal limit on a trade type, that same trade is blocked for you everywhere until your personal cooldown ends, even if another villager still has stock.
- These two systems can overlap: a villager can be resting while your own personal counter is still available, or the reverse.

## What Counts As "The Same Trade"

The plugin tracks cooldowns by trade type, not by villager name or workstation.

That means:

- `mending_1` means any **Mending I enchanted book** trade.
- `efficiency_5` means any **Efficiency V enchanted book** trade.
- `diamond_sword` means any villager trade that sells a diamond sword.
- `wheat`, `carrot`, `paper`, `string`, and similar entries mean the trade is grouped by that item, even if different villagers offer different prices.

So if you hit your cooldown on one villager for `mending_1`, you should expect **all** Mending I book trades to be blocked for you until the timer ends.

## Prices, Discounts, and Demand

### Discounts

This setup still allows discounts, but it limits one major source of them:

- **Trading reputation and curing zombie villagers can lower prices, but that reputation/cure discount is capped at `20%`.**
- **Hero of the Village is not capped by the plugin (`MaxHeroLevel: -1`), so normal vanilla HotV levels still apply.**
- **Because HotV is separate from the reputation/cure cap, some prices can still go below base price.**

Short version: prices can still move up or down, but reputation-based discounts stop scaling once they reach **20%**.

### Demand

Demand can still increase prices if a trade is used heavily, but it is capped at **6**. This prevents extreme price inflation while still allowing villagers to react to heavy use.

## World and Interaction Exceptions

- Villager trading is disabled entirely in `world_nether` and `world_the_end`.
- Citizens NPCs and Shopkeepers NPCs are ignored by this plugin.
- If you are holding `name_tag` or `ghast_spawn_egg`, the interaction is ignored so vanilla behavior or other plugins can handle it.

## Item-Specific Limits

Unless listed below, trades use the default rules:

- **8 shared uses per villager**
- **8 personal uses before cooldown**
- **4 hour personal cooldown**
- **2 hour villager restock cooldown**

### Highest-value enchanted books

These are limited to **2 shared uses**, **2 personal uses before cooldown**, and a **24 hour personal cooldown**:

- `mending_1`
- `efficiency_5`
- `unbreaking_3`
- `fortune_3`
- `silk_touch_1`
- `sharpness_5`
- `looting_3`
- `sweeping_edge_3`
- `breach_4`
- `density_5`

### Protection IV

`protection_4` is limited to:

- **3 shared uses**
- **3 personal uses before cooldown**
- **12 hour personal cooldown**

### Diamond gear

These are limited to **2 shared uses**, **2 personal uses before cooldown**, and a **24 hour personal cooldown**:

- `diamond_pickaxe`
- `diamond_sword`
- `diamond_chestplate`

### Utility and farming trades

These keep the default **8-use limits**, but have longer personal cooldowns:

**12 hour personal cooldown**

- `melon`
- `pumpkin`
- `paper`
- `stick`
- `string`
- `rotten_flesh`
- `coal`
- `iron_ingot`

**6 hour personal cooldown**

- `wheat`
- `potato`
- `beetroot`

## What Is Not Disabled

With the current settings:

- No villager professions are globally disabled.
- No trade items are globally removed from villager trade pools.

If those lists are changed later, villagers may stop taking certain professions or stop generating certain trades entirely.

## Examples

### Example 1: Mending books

If you buy a Mending book twice from one librarian:

1. That librarian's Mending trade is sold out.
2. That librarian cannot restock that trade for **2 hours**.
3. You hit the personal limit for `mending_1`, so you cannot buy it from any villager for **24 hours**.
4. Other players can still buy Mending from other librarians if they still have stock and do not have their own cooldown.

### Example 2: Wheat trades

If you personally complete 8 wheat trades:

1. You get a **6 hour** personal cooldown on `wheat`.
2. You cannot use another wheat trade anywhere else until the 6 hours expire.
3. Any farmer whose wheat trade you individually emptied must also wait **2 hours** to restock it.

### Example 3: Shared stock

If a trade has 8 shared uses total and another player has already used it 6 times:

1. Only 2 uses remain on that villager.
2. If you use both remaining trades, that villager enters its restock cooldown for that trade.
3. You only get a personal cooldown if those 2 trades also bring **you** to your own 8-use limit for that trade type.

## Why A Trade Might Be Unavailable

If a trade looks blocked or sold out, the reason is usually one of these:

- The villager is in `world_nether` or `world_the_end`, where trading is disabled.
- The villager's shared stock for that trade is already exhausted.
- The villager is still inside its **2 hour** restock timer.
- Your personal limit or cooldown for that trade type is still active.
- You are holding `name_tag` or `ghast_spawn_egg`, so the plugin intentionally ignores the interaction.
- The trade was never generated in the first place.

If you are unsure which case it is, check these three things:

1. Is the problem only happening on one villager? That usually means **shared stock or villager restock**.
2. Is the same item blocked on multiple villagers, but only for you? That usually means **your personal cooldown**.
3. Does it only happen in the Nether, the End, or while holding a `name_tag`? That usually means **a world or interaction exception**, not a stock issue.
