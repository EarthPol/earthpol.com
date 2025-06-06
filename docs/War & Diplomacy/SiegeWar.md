---
title: SiegeWar
sidebar_position: 3
---

import React from 'react';
import BattleTimes from '@site/src/components/BattleTimes';
import BattleTimesAM_PM from '@site/src/components/BattleTimesAM_PM';

# ⚔️ SiegeWar

## 🧭 Overview

SiegeWar is EarthPol’s structured warfare system, simulating the breakdown of diplomacy when peaceful options fail. It offers a strategic and immersive experience where nations engage in direct conflict with real consequences. Within 200 blocks of the siege banner, Keep Inventory is enabled, but deaths result in a 5% durability loss to armor and tools. Siege Camps and Assemblies are disabled, only placing a banner is required to initiate a siege. Each nation is limited to two active siege attacks, encouraging thoughtful target selection. Attackers cannot abandon a siege once it begins, while defenders retain the option to surrender. To gain control, players must stay within 16 blocks of the banner during a 6-minute Banner Control Session to accumulate points. 

---

## 🕹️ Gameplay

### 🕒 Battle Sessions

Sieges occur during battle sessions.
- Sieges are **13 battle sessions** in length.
- A battle session starts at the designated time and **lasts for 1 hour and 15 minutes.** 
- During this time, players will be able to score points towards the siege balance. 
- After the session, there is a **1 hour break** in between for rest and resupply.
- Sieges weekends will occur **biweekly, on the 2nd and last week of every month.** 
- These battle sessions only occur on certain days of the week which are listed below and are automatically adjusted to your timezone (**{Intl.DateTimeFormat().resolvedOptions().timeZone}**):

 Siege times are in both 12-hour and 24-hour format. 


**24-hour formatted times**
<BattleTimes />

**12-hour formatted times**
<BattleTimesAM_PM />

### 🏳️ Starting a Siege

To initiate a siege: 
- Qttackers must place a non-white banner outside the target town. (White banners are reserved for surrender and cannot be used to start a siege.)
- The banner can be placed from 0 to 2 chunks away from the target town. 
- Once the banner is placed, the siege begins, and players can earn points by killing enemies or maintaining control of the banner area. 
- Use the command `/sw nextsession` to check when the next battle session begins.

Preparation is essential: bring experience bottles for repairing armor mid-battle, healing and regeneration potions, multiple weapons, and plenty of food. Entering a siege without proper supplies greatly increases your risk of defeat or forced surrender.

### 🚛 Logistics
- **Supplies:** Make sure you have adequeate reserves of war supplies, such as potions, food, armor sets, and XP bottles.
- **Transportation**: Attackers should make sure they have a reliable way of getting through the siege zone, whether that be through rail, boat road, or teleport. For teleports, you can create a TownyPorts plot and advertise this as the siege spawn, or have a nation leader set the nation spawn to a town near the siege zone. **Keep in mind that nation members with Co-Leader and Minister rank can change the nation spawn, to ensure a quick response to sieges.**
-  **Preparation:**  Have a continency plan in place. Ensure that your civilians have somewhere to hide and that soldiers have a safe pathway to reach the siege zone, such as an underground tunnel.


:::tip

All players can still be of help at the siege banner! You may need players to focus on logistics and supplying your army, allowing them to support your best fighters and maintain the flow of essential resources. They can also play a critical defensive role, by taking up positions as **archers from within the gank**, or **conduct airstrikes** by dropping TNT minecarts on top of the banner.

:::

### 🎯 Banner Control and Dynamics

The siege zone is a 300 block horizontal radius around the siege banner. Kills achieved inside this zone will contribute to the siege point balance, and participants will **keep inventory with an additional 5% armor and tool durability degredation** applied to their gear after death. Be careful, accidental deaths will also contribute to the enemy's siege balance.

To gain control of a siege, players must enter the 16-block radius around the siege banner and stay within it to start the Banner Control session (commonly called "capping" on EarthPol). Each player must remain inside the radius to be added to the banner control list, and once control is established, the team earns 10 points every 20 seconds per player on the list.

Combat plays a critical role in siege dynamics. Kill Points award 90 points per enemy kill. Counterattacks occur when an attacker kills a banner-controlling player, triggering a 30% point bonus for the attacking side—this boost stacks with each kill. Reversals happen when a side regains banner control from the enemy, applying a 1.5x bonus to all Banner Control Points earned after the reversal.

The Siege Balance starts at 0. Attackers increase the balance with kills and banner control, while defenders decrease it. A positive balance at the end means an attacker victory; a negative balance results in a defender win.

### 🏁 Aftermath of Sieges

There are two primary outcomes following a siege: **Plunder** and **Invasion**.

- **Plunder:** If the attackers win, the losing town is open for plunder. After the siege ends, place a chest outside the losing town to begin looting. The winning side can take gold from the losing town’s bank, with the specific amount detailed in SiegeWar Details. The plunder is distributed over six days, with a value of 4g per chunk of land owned by the besieged town.
  
- **Invasion (Currently not enabled):** Invasions allow a nation to "capture" a town. This changes nothing about Towny permissions, and griefing is not allowed. To invade a town, place a non-white banner outside the town after a siege. Once the town is invaded, the victorious nation can set an **occupation tax** using `/n set occupationtax`. This tax is up to 0.01g per chunk and is charged daily. Note that **nation capitals cannot be invaded**.

---

## 🛡️ SiegeWar Strategies

### 🏰 Fortifications

"Ganks" are strategic, defensive fortresses built within Towny claims that include a large component used to trap attackers and gain easy kills; on EarthPol, this is the colloquial term for this type of fortification.  They are typically set up on the edges of your outpost or town. They are typically erected on the fly in the expected battle area as soon as the defending town discovers that a siege is being planned against them. Well-planned, defensively fortified towns will often pre-emptively build this defensive fortification around the border of their town, and combine this with walls surrounding the town. They come in several designs, depending on the time and resources available to create them.

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

**[Don't forget to grant permissions!](https://earthpol.com/docs/War%20&%20Diplomacy/SiegeWar/#-grant-access-to-your-gank)** Any fortification you build is useless if your allies and soldiers don't have access to it.
If your soldiers do not have permissions to access your fortifications, they will be **unable to open/close doors and break/place blocks, which will leave allied players exposed and vulnerable to being killed in the battle area.**
:::

### 🗡️ Fighting Strategies

* **Grouping Together:** Avoid feeding the enemy team by grouping together and staying alive as long as possible. Each death gives the enemy valuable points and drains your own resources. Work with your teammates to coordinate strategies, supplies, and healing to stay in the fight longer. Having multiple players on the banner can help delay enemy control and buy time.

* **Coordination and Communication:** Successful sieges also require effective coordination between players. Use voice communication and ally chat to make sure everyone—your town members and your allies—understands the plan. Work together to control key parts of the map, including the banner and the airspace above the siege zone. Rotate players in and out of the control area to maintain pressure.

* **Banner forts** can further help with this. These are strongholds built around the siege banner to protect your team's control zone. A well-built banner fort prevents the enemy from breaking your hold easily. Make sure the fort is strong, but include escape routes in case of a counterattack.

---

## 💬 SiegeWar Commands

- `/n rank add [player name] [rank]` – Assign a nation military rank (as king or general).
:::note

⚔️ Note: Your fighters must be assigned military ranks in order to participate in sieges. Players can only be assigned ranks after they have acquired a certain number of Honor Points.

**Learn more here: [📘 Military Rank and Honor System Guide](/docs/Towny/Advanced/TownyPermissions#honor-points-system)**

:::
- `/sw nextession` - **Find out when the next battle session is.**
- `/sw hud [town name]` – Toggle siege HUD for a specific town.
- `/t` or `/t here` or `/t [town name]` – View siege and town info.
- `/n [nation name]` – View sieges involving a nation.
- `/sw town togglepeaceful` – Toggle peaceful/non-peaceful status for your town.
- `/sw preference bossbar on|off` – Toggle siege bossbars on/off.
- `/sw preference beacon on|off` – Toggle beacon beam on/off.
- `/n set occupationtax [rate]` – Set a custom occupation tax rate.
- `/n set occupationtax max` – Set occupation tax to track the server-configured max.

### 🔐 Grant Access to Your Gank

Any fortification you build is useless if your allies and soldiers **don't have the permissions** to interact with it. To easily grant and manage permissions, you can **create a plot group encompassing your gank and then grant allies and nation members permissions to interact with it.**

- `/plot group add MyGank` - Stand in each chunk that the gank is a part of and add it to the plot group. MyGank, the plot group name, can be whatever you want it to be.
- `/plot group set perm ally on` `/plot group set perm nation on` - Stand in a chunk that is a part of the plot group and run these commands to grant permissions to nation members and allies within the plot group.
- `/plot group delete GankName `- Deletes the group entirely if you no longer want to use it. Alternatively, you can remove individual chunks by standing in each chunk you want to remove from the group and running `/plot group remove`


---

## 🎒 EarthPol SiegeWar Kit

<div style={{ textAlign: 'center' }}>
  <img src="/img/siegekit.png" alt="SiegeWar Kit" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>An example of a kit a soldier could bring to a siege. Bring what works best for you.</em></p>
</div>

**PvP Specifics**
- Golden Apple and Enchanted Golden Apple cooldown
- Ender pearl cooldown & anti-pearl glitching plugin
- Shield block & disable sound

:::warning

If you log out while in combat anywhere on the server, you will automatically be eliminated. To stay safe, wait at least 60 seconds after your last hit before logging out. Logging during combat is treated as combat logging and will result in your death.

:::

---

## 🕊️ Becoming Peaceful 

When a town is set to **peaceful** using the `/sw towntoggle peaceful` command, they are no longer eligible to be attacked by others, but there are tradeoffs:

- **No participation in sieges**: residents of peaceful towns cannot participate in sieges, meaning they cannot attack others or be attacked themselves. They cannot gain battle points at the siege banner, and will receive strong debuff effects upon entering the siege zone. (War sickness)
- **Loss of offensive capabilities**: Peaceful towns cannot initiate sieges, and attackers cannot engage with them.
- **5 Gold Per Day Peaceful Upkeep**: While towns with SiegeWar enabled pay **zero upkeep**, Peacefulness comes with a daily cost. If the cost cannot be paid, peacefulness status will be lost until the cost can be paid again. 
  
While peaceful towns may avoid the stress of constant sieges, they also lose out on the opportunity to gain resources through plunder, take control of other towns, and assist their allies in their asieges.

---
