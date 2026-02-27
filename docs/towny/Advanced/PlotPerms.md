---
title: Plots
description: "Guide to Plots on EarthPol, including key mechanics, commands, and tips."
---

# Plots

In Towny, plots are designated areas within a town that players can claim and build upon. In Towny, **1 minecraft chunk = 1 plot.** Press **F3 + G** while in-game to view chunk borders.

These plots serve as the foundation of the town’s development, allowing players to create homes, shops, farms, and even specialized areas like arenas or jails. Plots are an essential aspect of town management, as they define the areas where players can interact with the environment while maintaining security and organization within the town.

Each town plot has specific permissions that determine who can build, destroy, and interact with blocks within that plot. The town’s Mayor and Co-Mayors are responsible for managing these permissions, ensuring that each plot serves its intended purpose. When a player joins a town, they are given the ability to claim plots for personal use or for creating specialized areas, depending on the town's needs and the available space. Claiming a plot involves using the /plot claim command while standing in the desired location, and the plot will be protected from unauthorized interactions, such as griefing or unwanted construction.

---

## Plot Types

<div align="center">

| **Plot Type** | **Description**                                                                 | **How to Set**                                                       | **How to Use**                                                                                   |
|----------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **default**    | The default plot type. All plots are default when first claimed. Non-default plots can be reset to default. | `/plot set reset`                                                   | Used as the standard plot. Can be changed back to default using `/plot set reset`.               |
| **shop**       | Designates a player shop area. The plot will appear red on the map.              | `/plot set shop`                                                    | QuickShop shop chests can only be created within shop plots. The plot will show as red on the map.  |
| **arena**      | Arena plots have PvP and friendly fire enabled at all times. Keep inventory is always enabled.                    | `/plot set arena`                                                   | Used for combat or PvP events. Friendly fire is enabled.                                          |
| **embassy**    | If for sale, embassy plots can be bought by any player, even if they’re not a resident of the town. | `/plot set embassy`                                                 | Useful for foreign diplomacy and foreign shops. Players can buy embassy plots even if they're not town residents. Combined with a shop plot, they can create foreign shops and trade goods with your town  |
| **bank**       | Designates a bank, which allows you to deposit and withdraw from your town and nation banks. | `/plot set bank`                                                    | Create a secure banking area where players can manage town or nation funds.                      |
| **jail**       | Designates a jail where players will be sent if imprisoned (refer to the section on ranks). | `/plot set jail`                                                    | Used for punishing players who break the rules. Players are imprisoned in the designated jail.    |
| **farm**       | Designates a farm, where the only blocks that can be placed and destroyed are crops. | `/plot set farm`                                                    | Dedicated farming areas for growing crops. Only crop-related blocks can be placed or destroyed. Farm animals can also be killed on farm plots. |
| **wilds**      | Designates a semi-protected wilderness plot where trees, flowers, mushrooms, etc. can be broken, but all other blocks cannot. | `/plot set wilds`                                                   | A semi-protected plot for nature. Only certain types of blocks (trees, flowers, etc.) can be broken. |
**port**      |Designates a plot to be used with TownyPorts. | `/plot set port` | Players will arrive at this plot when teleporting here using `/port townname` |


</div>
---

:::tip

It is generally advisable to put shops near your town spawn or TownyPorts plot so that players do not have to travel far to trade within your town.

:::

---

## Plot Groups

With the `/plot group` command, Towny allows you to logically group plots together and manage them as a single unit. This includes managing permissions and managing who is trusted in your plot group. `/plot group` works the exact same way as the standard `/plot` commands, but changes are applied to the entire plot group instead of just one plot. You can view the plot commands on the Towny Commands page. 

Plots in a plot group do not have to border each other or be physically "connected"; the "group" in plot group refers to the plots being grouped together in terms of sharing a common name and sharing the same permissions.

Below are the commands specific to `/plot group`:

| **Command** | **Description**                                                |
|----------------|----------------------------------------------------------------|
| `/plot group add GroupName`      | Adds a plot to the specified plot group. **If no plot group with the name exists, a new plot group with this name will be created.** Names are **case sensitive.**|
| `/plot group remove`    | Removes the plot you are standing in from whatever plot group it is currently a part of.                   |
| `/plot group delete GroupName`    | Will completely delete the specified plot group. Plots will return to how they were before being added to the group. |
| `/plot group rename NewGroupName`   | Renames the plot group of the plot that you are standing in to the specified new name. |
| `/plot group fs/nfs`   | Sets the plot group you are standing in as for sale (fs) or not for sale (nfs), allowing players to buy and sell plot groups directly. |

## Plot Permissions

In Towny, you can control who has access to different actions on your plots using permissions. The permissions system allows you to customize the actions allowed for players based on their affiliation with your town, nation, or alliance. This section explains how to set permissions for different groups of players.

Plot permissions in Towny may seem intimidating at first, but managing them correctly ensures your town is kept safe while giving your residents the right permissions they need to get things done.

The general syntax for permissions management is:
`/plot set perm [playergroup] [permissiontype] on/off`
`/plot group set perm [playergroup] [permissiontype] on/off`

Alternatively, for giving only certain players all permissions in a plot you can use the `/plot group trust add/remove` command. Remember to keep track of which players you are trusting in your plot group. Due to the potential difficulty in tracking who is trusted and not trusted across several individual plots, it is **strongly recommended** to use **plot groups** whenever possible.

- `/plot group trust add PlayerName` 
- `/plot group trust remove PlayerName`


#### Permission types

There are several **permissions** you can control for each group. These permissions allow you to manage what players can do on your plots. 

<div align="center">

| **Permission** | **Description**                                                |
|----------------|----------------------------------------------------------------|
| **build**      | Allows a group to place blocks on your plot.                    |
| **destroy**    | Allows a group to break blocks on your plot.                    |
| **switch**     | Allows a group to interact with containers like chests, hoppers, furnaces, doors, etc. |
| **itemuse**    | Allows a group to use items like minecarts, bone meal, and buckets. |

</div>

#### Player Groups for Plot Permissions

Plot permissions are controlled by **groups** that define which players have what permissions on a plot or plot group. Here’s a quick overview of the available player groups:

<div align="center">

| **Group**   | **Description**                                                      | 
|-------------|----------------------------------------------------------------------|
| **friend**  | Players on your friend list. Manage your friend list with `/res friend`. By default, people on your friend list receive full permissions within your owned plots. |
| **resident**| Players who are members of your town.                                  |
| **ally**    | Players from your town, nation, and allied nations.                   |
| **outsider**| Players who are not from your town, nation, or allied nations.         |

</div>
---

### Plot Districts

Plots can be grouped together into *districts*, which are similar to Plot Groups though they come with less restrictions. Plot districts are mostly for roleplaying purposes and do not affect plot permissions in any way. Townblocks in a district must be adjacent to one another. A district includes the following benefits:

- Not required to have the same plot permissions, plot type, owner, or plot name.
- Can help with naming sections of a town, creating neighborhoods, or zoning areas for builds.
- Show their name in the chunk notifications, map hud, and in the `/towny map` hover text.
