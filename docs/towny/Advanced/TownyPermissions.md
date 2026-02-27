---
title: Ranks & Permissions
description: "Guide to Ranks & Permissions on EarthPol, including key mechanics, commands, and tips."
---

# Towny Ranks and Permissions

## Overview

Towny allows town and nation leaders to delegate responsibilities using a rank system. Each rank comes with specific permissions tailored to the role’s duties.

<div style={{ textAlign: 'center' }}>
  <img src="/img/waterhouse.png" alt="A small rural town" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em></em></p>
</div>

## Town Ranks and Permissions

| **Rank**    | **Description**                                                                | **Typical Permissions**                                      |
|-------------|--------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Mayor**   | Founder and leader of the town.                                                 | Full control over town: invites, kicks, plot claims, PvP toggles, taxes, etc. |
| **Assistant** | Second-in-command with wide administrative power.                            | Invite/kick players, manage plots, toggle settings, set spawn. |
| **Guard**   | Town protector, focused on enforcing order and defending the town.              | Use jail, toggle PvP, patrol plots (with appropriate access). Gain battle points if the town has no nation and is being sieged.|
| **Recruiter** | Brings new players into the town.                                              | Invite players, send recruitment messages.                   |
| **Sheriff** | Specialized law enforcer, often with similar powers to Guards.                  | Set up and maintain town jails.               |
| **Trusted** | A loyal resident with limited elevated permissions.                            | Access to all "town-owned" plots; no access to other players' personally owned plots unless the individual plot owner adds them as trusted to their plot.    |

## Nation Ranks and Permissions

| **Rank**     | **Description**                                                                | **Typical Permissions**                                     |
|--------------|--------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Leader**   | Head of the nation, responsible for diplomacy and overall direction.            | Full control: add/remove towns, set allies/enemies, set capital. |
| **Co-leader** | Assists the leader in managing national affairs.                              | Nearly all leader permissions, but secondary authority.     |
| **Minister** | Administrative official and diplomatic representative of the nation. |  Invite/kick towns, Change the nation spawn. Add/Remove nation allies and enemies. Grant recruiter and soldier rank.   |
| **General**  | Commander of national forces.                                                   | Organize military actions, lead in wars, manage soldiers. SiegeWar plunder, invade, surrender, start siege.  |
| **Recruiter**| Tasked with expanding the nation and its armed forces. | Invite new towns or residents on behalf of the nation. Grant the soldier rank to other citizens.     |
| **Soldier**  | Military personnel involved in wars and defense.                                | Access to military infrastructure, PvP zones during war.    |


## Honor Points System

Honor Points measure how long you’ve remained loyal to a nation and are required for military ranks like Soldier, Guard, or General. You gain 1 point per Towny Day if you’re in the same nation at the end of the day. If you switch nations or leave yours, your points reset. You need 3 Honor Points (i.e., 3 days in a row) to be eligible for military ranks.

To check your points, use the ``/honor`` command. Points are awarded or removed only during the daily rollover. You can switch towns within the same nation, or even temporarily leave, as long as you're back in the same nation by the day's end, you'll still earn the point. This system promotes fairness, rewards commitment, and ensures only loyal residents access military privileges.

## Managing Ranks

Use the following commands to assign or remove ranks:

```bash
/town rank add [player] [rank]
/town rank remove [player] [rank]

/nation rank add [player] [rank]
/nation rank remove [player] [rank]
