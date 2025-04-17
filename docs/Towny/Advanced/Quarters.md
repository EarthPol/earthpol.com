---
title: Quarters
---
# Quarters Plugin Guide

## Overview

The **Quarters** plugin allows players to claim and manage private areas within towns. These areas, known as **quarters**, can be used for various purposes like building, setting spawn points, or customizing private spaces. Below is a detailed guide on how to create and manage quarters, including the essential commands and permissions required.

---

## Creating a Quarter

To create a quarter, you must first define the boundaries using a **wand** item, which can be obtained using the `/q wand` command. The default item for the wand is Flint.

If the wand is unavailable, you can manually set positions using the following commands:

- `/q pos one [x] [y] [z]` — Set the first position.
- `/q pos two [x] [y] [z]` — Set the second position.

You can also omit the coordinates, and the positions will be set relative to your current location.

### Steps to Create a Quarter:

1. **Select the Boundaries:**
   - Use the wand to click on two opposing corners: left-click for the first corner and right-click for the second corner.
   - Make sure the area is within a single town and does not overlap with wilderness or other quarters.

2. **Highlight Selection:**
   - The area you selected should be highlighted with particles. If the particles are not visible, adjust your selection.

3. **Add to Selection:**
   - Type `/q selection add` to add the selected area to your current cuboids. Alternatively, use `/q create` to create a quarter immediately with your current selection.

4. **Remove or Adjust Selections:**
   - Use `/q selection remove` to remove a cuboid from the selection.
   - `/q selection clear` will clear all selections made.
   - You can also copy and paste selections using `/q selection copy` and `/q selection paste`.

5. **Finalize Creation:**
   - Once the area is selected and adjusted, type `/q create` to finalize the creation of your quarter.

---

## Restrictions and Limits

While creating quarters, there may be server-imposed restrictions, such as:
- Maximum number of cuboids per quarter.
- Maximum number of quarters per town.
- Maximum block volume per cuboid.

The plugin will notify you if any limits are exceeded.

---

## Commands & Permissions

### Standard Commands

| Command                          | Description                                      | Permission                           |
|-----------------------------------|--------------------------------------------------|--------------------------------------|
| `/q claim`                        | Claim a quarter as your own.                     | `quarters.command.quarters.claim`   |
| `/q create`                       | Create a quarter based on your current selection. | `quarters.command.quarters.create`  |
| `/q delete`                       | Delete the quarter you're standing in.           | `quarters.command.quarters.delete`  |
| `/q delete all`                   | Delete all quarters in your town.                | `quarters.command.quarters.delete`  |
| `/q delete plot`                  | Delete all quarters in your current plot.        | `quarters.command.quarters.delete`  |
| `/q edit`                         | Edit the cuboids within an existing quarter.     | `quarters.command.quarters.edit`    |
| `/q edit addselection`            | Add selections to the current quarter.           | `quarters.command.quarters.edit`    |
| `/q edit remove`                  | Remove a cuboid from the quarter.                | `quarters.command.quarters.edit`    |
| `/q evict`                        | Evict the owner of a quarter.                    | `quarters.command.quarters.evict`   |
| `/q info`                         | View plugin info.                                | `quarters.command.quarters.info`    |

### Managing Selections

| Command                          | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `/q selection add`                | Add a cuboid to your selection.                  |
| `/q selection clear`              | Clear your selection.                            |
| `/q selection copy`               | Copy your selection to clipboard.                |
| `/q selection paste`              | Paste your selection from the clipboard.        |

### Quarter Settings

| Command                          | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `/q set name`                     | Change the name of a quarter.                    |
| `/q set colour`                   | Change the colour of a quarter.                  |
| `/q set anchor`                   | Set the "anchor" for internal distance measurements. |
| `/q set particlesize`             | Change the particle size for quarter outlines.   |

### Toggle Features

| Command                          | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `/q toggle constantoutlines`      | Toggle whether quarter outlines are always shown. |
| `/q toggle entrynotifications`    | Toggle notifications when entering a quarter.   |
| `/q toggle sellondelete`          | Automatically sell the quarter when its owner is deleted. |

---

## Quarter Types

There are different types of quarters, each with specific features:

### Apartment
- The default quarter type. Owners can set trusted users, and both the owner and trusted players can alter the quarter.
  
### Inn
- Players can use beds inside the inn to set their spawn point. You can extend this functionality to players outside the town by toggling **embassy mode**.

### Station
- The station quarter type allows players to place, destroy, and use boats and minecarts. This can also be extended to non-town residents by toggling **embassy mode**.

---

## Permissions

Here are the key permissions related to quarters:

| Permission                                       | Description                                             |
|--------------------------------------------------|---------------------------------------------------------|
| `quarters.wand`                                  | Allows the use of the wand item to select positions for quarters. |
| `quarters.landlord`                              | Allows town staff to perform actions like changing the name or color of quarters. |
| `quarters.landlord.receive_command_feedback_from_town_members` | Allows town staff to receive command feedback from town members. |

### Common Permission Settings

| Setting | Description                                         |
|---------|-----------------------------------------------------|
| **True** | The permission is granted to all players.          |
| **False** | The permission is restricted to town staff (e.g., mayors, assistants). |
| **True* (with an asterisk)** | The permission is granted to all players but will only work if they own the quarter or have permission in the town. |

---