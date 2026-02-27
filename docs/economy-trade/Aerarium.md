---
title: Aerarium
description: "Guide to Aerarium on EarthPol, including shared town vaults, upgrades, and commands."
---

# Aerarium

Aerarium is a **town wide shared vault system** that lets your town store items safely in multiple upgradeable vaults that can be accessed from anywhere.  
Each vault behaves like a normal Minecraft inventory, meaning no custom item behavior and no duplication tricks.

Aerarium is fully integrated with **Towny** and respects town membership and management roles.

---

## What is Aerarium

Aerarium gives each town access to **multiple shared storage vaults**.

Key ideas:
- Vaults are **shared by the entire town**
- Vaults are **unique per town**
- Vaults can be **expanded over time**
- Multiple players can use the same vault at the same time
- Storage behaves like a normal chest inventory

---

## Commands

### Open the Town Vault Menu
```
/tv
/townvault
/tvault
```


All commands do the same thing.

Running this command opens the **Town Vault Menu**, where you can see all available vaults for your town.

---

## Town Vault Menu

When you open Aerarium, you will see a menu with **7 vault slots**:

- Vault #1
- Vault #2
- Vault #3
- Vault #4
- Vault #5
- Vault #6
- Vault #7

### Locked Vaults
- Locked vaults cannot be opened
- The cost to unlock them is shown in the menu
- Only town managers can unlock vaults

### Owned Vaults
- Owned vaults can be opened by permitted town members
- Each vault shows how many rows it currently has
- Vault size can be expanded by town managers

---

## Opening a Vault

To open a vault:
- Left click an owned vault in the menu

Once opened, the vault works like a **normal chest**:
- Items can be moved freely
- Shift clicking works normally
- Multiple players can access it at the same time

---

## Vault Size and Expansion

### Starting Size
- Each vault starts with **1 row** of storage

### Maximum Size
- Vaults can be expanded up to a **full double chest size**

### Expanding a Vault
- Vault expansion costs money
- Each additional row has a fixed price
- Only town managers can expand vaults

Important rule:
- **Vaults cannot be expanded while anyone has the vault open**
- All players must close the vault before it can be upgraded

This rule exists to keep vaults safe and duplication free.

---

## Permissions and Access

### General Access
- You must be a member of a town to use Aerarium
- You must have permission to open the vault menu
- Access is granted to you by a mayor or co-mayor who can run `/t rank add <user> vaultuser`

### Management Actions
Only town managers can:
- Unlock new vaults
- Expand vault storage rows

Management permissions are typically limited to:
- Mayors & Co Mayors
- Designated Vault Managers using `/t rank add <user> vaultmanager`

---

## Economy

Aerarium supports server economy systems.

- Unlocking vaults costs money
- Expanding vault rows costs money
- Prices are set by the server configuration

If the economy is unavailable, vault upgrades will be blocked.

---

## Summary

Aerarium provides:
- Shared town storage
- Multiple upgradeable vaults
- Safe and familiar inventory behavior
- Full Towny integration

If you are in a town, Aerarium becomes your town's central storehouse.

Store smart. Coordinate well. Grow your town.
