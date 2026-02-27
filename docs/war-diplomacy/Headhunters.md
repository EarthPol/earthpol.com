---
title: Bounty System
description: "Guide to Bounty System on EarthPol, including key mechanics, commands, and tips."
sidebar_position: 5
---
# 🏹 Bounty System

![Bounty Hunter](/img/BountyHunter.avif)

## 💭 What is the Bounty System
The Bounty System is a feature that lets you set a price on a targets head for their immediate dispatch. The person to successfully eliminate the bounty target will receive the posted price in gold immediately upon success. The higher the price, the more competition and likeliness that target will be eliminated.

## ✍️ How the Bounty System works

### 🏆 1. Placing a Bounty
You must be a member of a nation. You cannot target players in your own nation or your allies. 
```
/bounty set <player> <amount>
```
- `player` – the name of the target
- `amount` – gold to escrow (min/max set by server)
You'll see a confirmation message and your gold will be held until the bounty is claimed or removed.

### 📜 2. Viewing Active Bounties
List all current bounties, with clickable names and details:
```
/bounty list
```
- Click a target's name to run `/res <target>`
- Click the requester's name to run `/res <requester>`
- If you set a bounty, a red `x` appears next to it for quick removal.

### ❌ 3. Removing Your Bounty
Withdraw your own bounty at any time and get a full refund:
```
/bounty remove <player>
```
- Only the issuer may remove their own bounties
- Refund happens instantly

### 🏅 4. Claiming Your Rewards
When you kill a valid target, the reward goes into your balance. To collect:
```
/bounty claim
```
- Payouts accumulate until you claim
- You only need to run the command once to receive the balance

### 📝 5. Important things to consider
- Valid Targets include:
  - Players without a town
  - Players in a town with no nation
  - Players in a nation that is neither yours nor allied with yours
- Excluded Areas:
  - Arenas

:::warning

If you log out while in combat anywhere on the server, you will automatically be eliminated. To stay safe, wait at least 60 seconds after your last hit before logging out. Logging during combat is treated as combat logging and will result in your death.

:::
