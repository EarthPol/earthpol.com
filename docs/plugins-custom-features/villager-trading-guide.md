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
| Global trade stock | `6` uses by default | Shared per villager trade |
| Personal trade cooldown | `6h` by default | Personal per player, shared across all villagers for the same trade type |
| Villager restock cooldown | `2h` | Shared per villager, per trade |
| Reputation and cure discounts | `0%` max discount | Personal pricing, but effectively disabled |
| Hero of the Village cap | `-1` | No separate cap, but overall discounts are still prevented by the `0%` discount cap |
| Demand increase cap | `3` | Shared per villager trade |
| Disabled professions | none | Global |
| Disabled trade items | none | Global |

## How Trading Works

When you open a villager, the plugin applies three main checks:

1. **Price rules** decide whether the trade is discounted or increased.
2. **Stock rules** decide how many times that villager can offer the trade before it sells out.
3. **Cooldown rules** decide whether you or the villager must wait before the trade becomes available again.

In practice, the flow looks like this:

1. A villager offers a trade.
2. That trade can usually be used up to **6 times** before it is out of stock.
3. Once the final allowed use is taken, the villager cannot restock that trade for **2 hours**.
4. The player who exhausted that trade also gets a **personal cooldown** for that trade type.
5. While that personal cooldown is active, that player cannot use the same trade type from any villager.

## Shared vs Personal Limits

### Shared per villager

These limits belong to the villager, not to you:

- **Trade stock (`MaxUses`)**: if a villager has already sold a trade 5 times, the next player only gets the remaining stock.
- **Restock timer (`Restock`)**: once that villager's trade is exhausted, that villager must wait 2 real hours before restocking it.
- **Demand (`MaxDemand`)**: demand-based price increases belong to the villager's trade and are capped at 3.

### Personal per player

These limits belong to your account:

- **Trade cooldown (`Cooldown`)**: once you are the player who pushes a trade to its limit, you get a personal timer for that trade type.
- That personal timer follows **you**, not the villager.
- If another villager offers the same trade, it is still blocked for you until your cooldown expires.

### What this means in real play

- If someone else exhausts a villager's trade, you are blocked by that villager's **2 hour restock**, but you do **not** get a personal cooldown from it.
- If **you** exhaust the trade, the villager is blocked for 2 hours, and **you** are also blocked from using that same trade type anywhere else until your personal cooldown ends.

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

This setup is very strict on price reductions:

- **Curing zombie villagers does not give you lower prices beyond base price.**
- **Trading reputation does not give you lower prices beyond base price.**
- **Hero of the Village is not separately capped, but the overall discount cap is `0%`, so you should not expect lower-than-base prices from it either.**

Short version: expect villagers to charge **base price or higher**, not lower.

### Demand

Demand can still increase prices if a trade is used heavily, but it is capped at **3**. This prevents extreme price inflation while still allowing villagers to react to heavy use.

## Item-Specific Limits

Unless listed below, trades use the default rules:

- **6 shared uses**
- **6 hour personal cooldown**
- **2 hour villager restock cooldown**

### Highest-value enchanted books

These are limited to **2 shared uses** and a **24 hour personal cooldown**:

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
- **12 hour personal cooldown**

### Diamond gear

These are limited to **2 shared uses** and a **24 hour personal cooldown**:

- `diamond_pickaxe`
- `diamond_sword`
- `diamond_chestplate`

### Utility and farming trades

These keep the default **6 shared uses**, but have longer personal cooldowns:

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
- `carrot`
- `potato`
- `beetroot`

### Limited utility items

These are limited to **3 shared uses** and a **12 hour personal cooldown**:

- `name_tag`
- `ender_pearl`
- `bottle_o_enchanting`

> Note: none of the item-specific overrides change the villager restock timer, so the normal **2 hour villager restock** still applies to all of them.

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
3. You cannot buy `mending_1` from any villager for **24 hours**.
4. Other players can still buy Mending from other librarians if they do not have their own cooldown.

### Example 2: Wheat trades

If a farmer's wheat trade is used up:

1. That farmer must wait **2 hours** to restock the wheat trade.
2. The player who made the final allowed wheat trade gets a **6 hour** personal cooldown on `wheat`.
3. That player cannot use another wheat trade elsewhere until the 6 hours expire.

### Example 3: Shared stock

If a trade has 6 uses total and another player has already used it 4 times:

1. Only 2 uses remain on that villager.
2. If you use both remaining trades, you are the one who triggers the personal cooldown.
3. The villager then enters its restock cooldown for that trade.

## Why A Trade Might Be Unavailable

If a trade looks blocked or sold out, the reason is usually one of these:

- The villager's shared stock for that trade is already exhausted.
- The villager is still inside its **2 hour** restock timer.
- Your personal cooldown for that trade type is still active.
- The trade was never generated in the first place.

If you are unsure which case it is, check two things:

1. Is the problem only happening on one villager? That usually means **shared stock or villager restock**.
2. Is the same item blocked on multiple villagers, but only for you? That usually means **your personal cooldown**.
