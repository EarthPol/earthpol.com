---
title: SiegeWar 
---

import React from 'react';
import BattleTimes from '@site/src/components/BattleTimes';

# SiegeWar

## Overview

SiegeWar is EarthPol’s structured warfare system, simulating the breakdown of diplomacy when peaceful options fail. It offers a strategic and immersive experience where nations engage in direct conflict with real consequences. Within 200 blocks of the siege banner, Keep Inventory is enabled, but deaths result in a 5% durability loss to armor and tools. Siege Camps and Assemblies are disabled, only placing a banner is required to initiate a siege. Each nation is limited to two active siege attacks, encouraging thoughtful target selection. Attackers cannot abandon a siege once it begins, while defenders retain the option to surrender. To gain control, players must stay within 16 blocks of the banner during a 6-minute Banner Control Session to accumulate points. 

---

## Gameplay

### Battle Sessions

Sieges occur during battle sessions. These battle sessions only occur on certain days of the week which are listed below and are automatically adjusted to your timezone (**{Intl.DateTimeFormat().resolvedOptions().timeZone}**):

<BattleTimes />

Siege times are in 24-hour format to ensure clarity and standardization across different time zones. Please take note of this when planning your in-game activities to avoid any confusion.

### Starting a Siege

To initiate a siege, attackers must place a non-white banner outside the target town—white banners are reserved for surrender. Once the banner is placed, the siege begins, and players can earn points by killing enemies or maintaining control of the banner area. Use the command `/sw nextsession` to check when the next battle session begins.

Preparation is essential: bring experience bottles for repairing armor mid-battle, healing and regeneration potions, multiple weapons, and plenty of food. Entering a siege without proper supplies greatly increases your risk of defeat or forced surrender.

:::tip

All players can still be of help at the siege banner! You may need players to focus on logistics and supplying your army, allowing them to support your best fighters and maintain the flow of essential resources. They can also play a critical defensive role, by taking up positions as **archers from within the gank**, or **conduct airstrikes** by dropping TNT minecarts on top of the banner.

:::

### Banner Control and Dynamics

To gain control of a siege, players must enter the 16-block radius around the siege banner and stay within it to start the Banner Control session (commonly called "capping" on EarthPol). Each player must remain inside the radius to be added to the banner control list, and once control is established, the team earns 10 points every 20 seconds per player on the list.

Combat plays a critical role in siege dynamics. Kill Points award 90 points per enemy kill. Counterattacks occur when an attacker kills a banner-controlling player, triggering a 30% point bonus for the attacking side—this boost stacks with each kill. Reversals happen when a side regains banner control from the enemy, applying a 1.5x bonus to all Banner Control Points earned after the reversal.

The Siege Balance starts at 0. Attackers increase the balance with kills and banner control, while defenders decrease it. A positive balance at the end means an attacker victory; a negative balance results in a defender win.

### Aftermath of Sieges

There are two primary outcomes following a siege: **Plunder** and **Invasion**.

- **Plunder:** If the attackers win, the losing town is open for plunder. After the siege ends, place a chest outside the losing town to begin looting. The winning side can take gold from the losing town’s bank, with the specific amount detailed in SiegeWar Details. The plunder is distributed over six days, with a value of 4g per chunk of land owned by the besieged town.
  
- **Invasion (Currently not enabled):** Invasions allow a nation to "capture" a town. This changes nothing about Towny permissions, and griefing is not allowed. To invade a town, place a non-white banner outside the town after a siege. Once the town is invaded, the victorious nation can set an **occupation tax** using `/n set occupationtax`. This tax is up to 0.01g per chunk and is charged daily. Note that **nation capitals cannot be invaded**.

---

## SiegeWar Strategies

### Fortifications

Fortifications, like ganks, are strategic, defensive fortresses built within Towny claims used to trap attackers and gain easy kills; on EarthPol, this is the colloquial term for this type of fortification.  They are typically set up on the edges of your outpost or town. They are typically erected on the fly in the expected battle area as soon as the defending town discovers that a siege is being planned against them. Well-planned, defensively fortified towns will often pre-emptively build this defensive fortification around the border of their town, and combine this with walls surrounding the town. They come in several designs, depending on the time and resources available to create them.

The optimal width for a gank is 2 blocks wide, stretching along the border of your town facing the siege banner. The deeper, the better, however the tradeoff is the amount of time and effort required to build one. Ganks should have an elevator system for easy access and escape. The goal is to trap attackers, making it harder for them to retaliate, while allowing you to land hits from a secure position. This strategy can significantly disrupt the attackers' rhythm and force them to waste valuable resources.

<div style={{
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  textAlign: 'center'
}}>
  <div style={{ flex: '1 1 400px', maxWidth: '400px' }}>
    <img src="/img/gank1.png" alt="Basic gank design" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1 1 400px', maxWidth: '400px' }}>
    <img src="/img/gank2.png" alt="Basic gank design" style={{ width: '100%', height: 'auto' }} />
  </div>
</div>

:::tip

**Gank Perms** Any fortification you build is useless if your allies and soldiers don't have [access](https://earthpol.com/docs/War%20&%20Diplomacy/SiegeWar#grant-access-to-your-fort)
to it.
:::

### Fighting Strategies

* **Grouping Together:** Avoid feeding the enemy team by grouping together and staying alive as long as possible. Each death gives the enemy valuable points and drains your own resources. Work with your teammates to coordinate strategies, supplies, and healing to stay in the fight longer. Having multiple players on the banner can help delay enemy control and buy time.

* **Coordination and Communication:** Successful sieges also require effective coordination between players. Use voice communication and ally chat to make sure everyone—your town members and your allies—understands the plan. Work together to control key parts of the map, including the banner and the airspace above the siege zone. Rotate players in and out of the control area to maintain pressure.

* **Banner forts** can further help with this. These are strongholds built around the siege banner to protect your team's control zone. A well-built banner fort prevents the enemy from breaking your hold easily. Make sure the fort is strong, but include escape routes in case of a counterattack.

---

## SiegeWar Commands

- `/n rank add [player name] [rank]` – Assign a nation military rank (as king or general).


:::note

⚔️ Note: Your fighters must be assigned military ranks in order to participate in sieges. Players can only be assigned ranks after they have acquired a certain number of Honor Points.

**Learn more here: [📘 Military Rank and Honor System Guide](/docs/Towny/Advanced/TownyPermissions#honor-points-system)**

:::

- `/sw spawn [besieged town]` – Spawn to an active siege.
- `/plot group add [group name]` – Add the current chunk to a plot group.
- `/plot group set perm ally on` – Grant ally permissions to the current chunk's plot group.
- `/plot set perm nation on` – Grant nation permissions to the current chunk.
- `/plot group delete [group name]` – Delete a plot group entirely.
- `/plot group remove` – Remove the current chunk from its plot group.
- `/sw hud [town name]` – Toggle siege HUD for a specific town.
- `/t` or `/t here` or `/t [town name]` – View siege and town info.
- `/n [nation name]` – View sieges involving a nation.
- `/sw town togglepeaceful` – Toggle peaceful/non-peaceful status for your town.
- `/sw preference bossbar on|off` – Toggle siege bossbars on/off.
- `/sw preference beacon on|off` – Toggle beacon beam on/off.
- `/n set occupationtax [rate]` – Set a custom occupation tax rate.
- `/n set occupationtax max` – Set occupation tax to track the server-configured max.

---

## EarthPol SiegeWar Kit

<div style={{ textAlign: 'center' }}>
  <img src="/img/siegekit.png" alt="SiegeWar Kit" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>An example of a kit a soldier could bring to a siege. Bring what works best for you.</em></p>
</div>

---

## Becoming Peaceful 

When a town is set to **peaceful** using the `/sw towntoggle peaceful` command, they are no longer eligible to be attacked by others, but there are tradeoffs:

- **No participation in sieges**: Peaceful towns cannot participate in sieges, meaning they cannot attack others or be attacked themselves.
- **Loss of offensive capabilities**: Peaceful towns cannot initiate sieges, and attackers cannot engage with them.
  
While peaceful towns may avoid the stress of constant sieges, they also lose out on the opportunity to gain resources through plunder or take control of other towns.

---
