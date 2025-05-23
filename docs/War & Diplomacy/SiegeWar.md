---
title: SiegeWar 
---
# SiegeWar

## Overview

SiegeWar is a carefully structured combat system designed to simulate war and the breakdown of diplomatic relations within EarthPol when peaceful negotiations are no longer feasible. It provides a strategic and immersive gameplay experience where nations engage in direct conflict, with all the risks and rewards of warfare. The mechanics surrounding the sieging process aim to create a balanced environment where both attackers and defenders must plan carefully and consider the consequences of their actions.

In this system, Keep Inventory is enabled within a 200-block radius of the siege banner, ensuring that players do not lose their items upon death in this area. However, a 5% durability degradation is applied to armor and tools when a player dies, adding a layer of strategy regarding the longevity of gear. Siege Assemblies and Siege Camps are disabled, meaning the only requirement to initiate a siege is the placement of the siege banner. Each nation can only have two active siege attacks at once, which limits their offensive capabilities and forces them to carefully choose their targets. Defenders have the option to surrender, but attackers cannot abandon a siege once it begins. The Banner Control Session lasts for 6 minutes, and players must remain within a 16-block radius around the banner to gain control, as doing so adds them to the banner control list, allowing for point accumulation.

This structured environment encourages tactical thinking, resource management, and coordination, as nations fight for control and influence. The rules of SiegeWar ensure that players face real consequences for their actions, making each siege a critical moment in the ongoing geopolitical struggle of EarthPol.

---

## Gameplay

### Battle Sessions

Sieges occur during battle sessions. These battle session only occur on certain days of the week which are listed below:

  - Saturday: 01:45, 04:30, 07:15, 10:00, 12:45, 15:30, 18:15, 21:00, 23:45
  - Sunday: 02:30,05:15, 08:00, 10:45, 13:30, 16:15, 19:00, 21:45
  - Friday: 14:45, 17:30, 20:15, 23:00

The server operates in the Pacific Time (PST) time zone. All times displayed on the server, including siege timings and other in-game events, are in 24-hour format to ensure clarity and standardization across different time zones. Please take note of this when planning your in-game activities to avoid any confusion.

### Starting a Siege

To start a siege as an attacker, place a non-white banner outside the enemy town. White banners are reserved for surrenders, so use any other color. After placing the banner, the siege will begin, and players can accumulate points by killing enemy players or gaining control of the banner. To find the next battle session, use the command `/sw nextsession`. Be prepared, as resources like potions and armor sets are essential for the duration of a siege.

#### Siege Logistics and Preparation

Before entering a siege, ensure you have sufficient supplies, such as:

- **Experience Bottles:** Carry extra experience bottles to repair your armor on the go!
- **Potions:** Healing potions and splash potions of regeneration are essential to keep you alive during intense battles.
- **Weapons:** Bring multiple weapons, including swords, axes, or bows, to adapt to different combat situations.
- **Food:** Keep food with you for both healing and stamina.
  
If you do not have enough resources, it is crucial to gather them before engaging in a siege. Lack of preparation could lead to being overwhelmed or forced to surrender.

:::tip

Non PvP-focused players can still be of help at the siege banner! They can focus on logistics and supplying your army, allowing them to support your best fighters and maintain the flow of essential resources. They can also play a critical defensive role, by taking up positions as archers from within the gank, or conduct airstrikes by dropping TNT minecarts on top of the banner.

:::

### Banner Control

To control the banner, enter the 16-block radius and begin the Banner Control session (also called “capping” or “capping the banner” on EarthPol). You must stay in the control radius for the entire session, and each player must remain individually within the radius to add their name to the banner control list. Once your team controls the banner, you will earn points every 20 seconds for each player on the control list.

### Counterattacks and Reversals

In SiegeWar, counterattacks and reversals can significantly shift the tide of battle. A **counterattack** occurs when an attacker kills a player controlling the banner, increasing the points earned by a percentage determined by the counterattack booster. A **reversal** happens when a side regains control of the banner from the enemy, applying a 1.5x bonus to the points accumulated for each player on the control list after the reversal.

### Siege Balance

Points in SiegeWar are earned in two primary ways: through **Kill Points** (90 points per kill) and **Banner Control Points**, which are awarded at 10 points every 20 seconds for each player in the control radius. If the control of the banner is reversed, the **Banner Control Reversal Bonus** of 1.5x applies, rewarding the effort of reclaiming control. Additionally, the **Counterattack Boost** increases points by 30% whenever a player from the banner-controlling side is killed. This boost stacks, meaning points from a counterattack can multiply significantly.

The **Siege Balance** starts at 0 points, and the attackers contribute to the balance by adding points, while defenders subtract points. If the balance becomes negative, it signifies a defender victory. If positive, the attackers win.

### Aftermath of Sieges

There are two primary outcomes following a siege: **Plunder** and **Invasion**.

- **Plunder:** If the attackers win, the losing town is open for plunder. After the siege ends, place a chest outside the losing town to begin looting. The winning side can take gold from the losing town’s bank, with the specific amount detailed in SiegeWar Details. The plunder is distributed over six days, with a value of 4g per chunk of land owned by the besieged town.
  
- **Invasion (Currently not enabled):** Invasions allow a nation to "capture" a town. This changes nothing about Towny permissions, and griefing is not allowed. To invade a town, place a non-white banner outside the town after a siege. Once the town is invaded, the victorious nation can set an **occupation tax** using `/n set occupationtax`. This tax is up to 0.01g per chunk and is charged daily. Note that **nation capitals cannot be invaded**.

---

## Siege Strategy

### Fortifications

#### What is a "Gank"?
Ganks are strategic, defensive fortresses built within Towny claims used to trap attackers and gain easy kills; on EarthPol, this is the colloquial term for this type of fortification.  They are typically set up on the edges of your outpost or town. They are typically erected on the fly in the expected battle area as soon as the defending town discovers that a siege is being planned against them. Well-planned, defensively fortified towns will often pre-emptively build this defensive fortification around the border of their town, and combine this with walls surrounding the town. They come in several designs, depending on the time and resources available to create them.

#### Building your fortifications
The optimal width for a gank is 2 blocks wide, stretching along the border of your town facing the siege banner. The deeper, the better, however the tradeoff is the amount of time and effort required to build one. Ganks should have an elevator system for easy access and escape. The goal is to trap attackers, making it harder for them to retaliate, while allowing you to land hits from a secure position. This strategy can significantly disrupt the attackers' rhythm and force them to waste valuable resources.

#### Gank Example
<div style={{ textAlign: 'center' }}>
  <img src="/img/gank1.png" alt="Basic gank design" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Basic gank design</em></p>
</div>
<div style={{ textAlign: 'center' }}>
  <img src="/img/gank2.png" alt="Basic gank design" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Basic gank design</em></p>
</div>
<div style={{ textAlign: 'center' }}>
  <img src="/img/gank3.png" alt="Basic gank design" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Basic gank design</em></p>
</div>

### Grouping Together:
Avoid feeding the enemy team by grouping together and staying alive as long as possible. Dying repeatedly gives the enemy team valuable points and drains your own resources. Work with your teammates to coordinate strategies, supplies, and healing, ensuring that you can stay in the battle as long as possible. Having multiple players on the banner can help delay control and counteract enemy efforts to seize it.

### Coordinating Attacks:
Successful sieges require effective coordination between players. Work together to control key points of the map, including the banner and the airspace above the siegezone. Use voice communication and ally chat to ensure that all attackers, including your allies, are aware of objectives and timings. You may need to rotate players in and out of the banner control area to maintain the pressure on defenders.

### Building Banner Forts:
**Banner forts** can be used to keep control of the banner. Constructing a fortified area around the banner can prevent other players from easily disrupting your control. Ensure that the fort is secure but also provides escape routes in case of a counterattack.

---

## Becoming Peaceful 

### Tradeoffs of Becoming a Peaceful Town

When a town is set to **peaceful** using the `/sw towntoggle peaceful` command, they are no longer eligible to be attacked by others, but there are tradeoffs:

- **No participation in sieges**: Peaceful towns cannot participate in sieges, meaning they cannot attack others or be attacked themselves.
- **Loss of offensive capabilities**: Peaceful towns cannot initiate sieges, and attackers cannot engage with them.
  
While peaceful towns may avoid the stress of constant sieges, they also lose out on the opportunity to gain resources through plunder or take control of other towns.

---

## SiegeWar Basic Commands

### Nation
- `/n rank add [player name] [rank]` - As a king, assign any nation military rank (e.g. private, sergeant, lieutenant, captain, major, colonel, or general). As a general, assign any of these except general.

### Spawn to Siege
- `/sw spawn [besieged town]` - Spawn to a siege.

### View Information:
- Siege - `/sw hud [town name]` - Toggle a HUD on/off to monitor the progress of a particular siege.
- Town - `/t` or `/t here` or `/t [town name]` - View detailed information about the siege on the town (if any).
- Nation - `/n [nation name]` - View the list of sieges the nation is involved in (if any).

### Make Town Peaceful:
- `/sw town togglepeaceful` - As a mayor, declare your town to be peaceful. The peaceful state will be confirmed in 7 days (2 if the town is new).
  - **Advantages:** 
    - Town becomes immune to siege attacks.
    - Town gets a public `/t spawn`.
  - **Disadvantages:**
    - Town cannot move homeblock.
    - Residents cannot receive nation-military ranks.
    - Town becomes vulnerable to being Subverted by nearby nations.
  - **How Subverting Works (currently disabled):**
    - The largest (by num-townblocks), non-sieged, non-peaceful town within 1,200 blocks of your peaceful town is your Guardian Town. Whichever nation owns that Guardian Town can instantly subvert and capture your peaceful town by placing a non-white banner on your town border.

### Additional Commands:
- `/sw town togglepeaceful` - As a mayor, declare your town to be Non-Peaceful. The Non-Peaceful state will be confirmed in 7 days (2 if the town is new).

#### Configure Personal Preferences:
- `/sw preference bossbar on|off` - Toggle the bossbars on and off.
- `/sw preference beacon on|off` - Toggle the beacon beam on and off.

#### Set Occupation Tax:
- `/n set occupationtax [rate]` - As a king, set your nation's occupation tax-rate. Generally, you don't need to run this command, as your nation will automatically use the highest rate. Once you run this command, your nation's rate will no longer track the server-configured maximum.
- `/n set occupationtax max` - As a king, set your nation's occupation tax to track the server-configured maximum.

---

## SiegeWar Reference

### Siege zone restriction:
- Restricted blocks in the wilderness area of a siege zone: All water bucket types & lava buckets, cobwebs, obsidian

### Proximity/Distance
- Siege zone radius: 300 blocks around the siege banner.
- Banner can be placed up to 2 chunks away from the opposing town's claims to begin a siege.

### Cost
- Upfront cost per plot to start siege (will be placed in the war chest): 8G
- Plunder amount: 4G per plot owned by the defending town, + all gold that was put up front when starting the siege.

### Conseuquences of Death
- Keep inventory is **enabled** when a death occurs **inside the siege zone radius**.
- Weapon and armor durability will degrade by **5%** upon death.

---

## EarthPol SiegeWar Kit

<div style={{ textAlign: 'center' }}>
  <img src="/img/siegekit.png" alt="SiegeWar Kit" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>An example of a kit a soldier could bring to a siege. Bring what works best for you.</em></p>
</div>


