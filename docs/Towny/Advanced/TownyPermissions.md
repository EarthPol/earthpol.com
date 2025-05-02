---
title: Ranks & Permissions
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
| **Guard**   | Town protector, focused on enforcing order and defending the town.              | Use jail, toggle PvP, patrol plots (with appropriate access). |
| **Recruiter** | Brings new players into the town.                                              | Invite players, send recruitment messages.                   |
| **Sheriff** | Specialized law enforcer, often with similar powers to Guards.                  | Use jail, PvP permissions in designated areas.               |
| **Trusted** | A loyal resident with limited elevated permissions.                            | Access to shared chests/doors, limited plot interactions.    |

## Nation Ranks and Permissions

| **Rank**     | **Description**                                                                | **Typical Permissions**                                     |
|--------------|--------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Leader**   | Head of the nation, responsible for diplomacy and overall direction.            | Full control: add/remove towns, set allies/enemies, set capital. |
| **Co-leader** | Assists the leader in managing national affairs.                              | Nearly all leader permissions, but secondary authority.     |
| **Minister** | Administrative official focused on internal management.                         | Manage taxes, invite/kick towns, adjust nation settings.    |
| **General**  | Commander of national forces.                                                   | Organize military actions, lead in wars, manage soldiers.   |
| **Recruiter**| Tasked with expanding the nation.                                               | Invite new towns or residents on behalf of the nation.      |
| **Soldier**  | Military personnel involved in wars and defense.                                | Access to military infrastructure, PvP zones during war.    |

## Managing Ranks

Use the following commands to assign or remove ranks:

```bash
/town rank add [player] [rank]
/town rank remove [player] [rank]

/nation rank add [player] [rank]
/nation rank remove [player] [rank]