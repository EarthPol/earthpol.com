---
title: Plot Types
---

# Towny Plot Types

## Overview

In Towny, plots are designated areas within a town that players can claim and build upon. These plots serve as the foundation of the town’s development, allowing players to create homes, shops, farms, and even specialized areas like arenas or jails. Plots are an essential aspect of town management, as they define the areas where players can interact with the environment while maintaining security and organization within the town.

Each town plot has specific permissions that determine who can build, destroy, and interact with blocks within that plot. The town’s Mayor and Co-Mayors are responsible for managing these permissions, ensuring that each plot serves its intended purpose. When a player joins a town, they are given the ability to claim plots for personal use or for creating specialized areas, depending on the town's needs and the available space. Claiming a plot involves using the /plot claim command while standing in the desired location, and the plot will be protected from unauthorized interactions, such as griefing or unwanted construction.

## Plot Types

| **Plot Type** | **Description**                                                                 | **How to Set**                                                       | **How to Use**                                                                                   |
|----------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **default**    | The default plot type. All plots are default when first claimed. Non-default plots can be reset to default. | `/plot set reset`                                                   | Used as the standard plot. Can be changed back to default using `/plot set reset`.               |
| **shop**       | Designates a player shop area. The plot will appear red on the map.              | `/plot set shop`                                                    | Ideal for creating trade areas or stores within the town. The plot will show as red on the map.  |
| **arena**      | Arena plots have PvP and friendly fire enabled at all times.                     | `/plot set arena`                                                   | Used for combat or PvP events. Friendly fire is enabled.                                          |
| **embassy**    | If for sale, embassy plots can be bought by any player, even if they’re not a resident of the town. | `/plot set embassy`                                                 | Useful for foreign diplomacy and foreign shops. Players can buy embassy plots even if they're not town residents. Combined with a shop plot, they can create foreign shops and trade goods with your town  |
| **bank**       | Designates a bank, which allows you to deposit and withdraw from your town and nation banks. | `/plot set bank`                                                    | Create a secure banking area where players can manage town or nation funds.                      |
| **jail**       | Designates a jail where players will be sent if imprisoned (refer to the section on ranks). | `/plot set jail`                                                    | Used for punishing players who break the rules. Players are imprisoned in the designated jail.    |
| **farm**       | Designates a farm, where the only blocks that can be placed and destroyed are crops. | `/plot set farm`                                                    | Dedicated farming areas for growing crops. Only crop-related blocks can be placed or destroyed.  |
| **wilds**      | Designates a semi-protected wilderness plot where trees, flowers, mushrooms, etc. can be broken, but all other blocks cannot. | `/plot set wilds`                                                   | A semi-protected plot for nature. Only certain types of blocks (trees, flowers, etc.) can be broken. |

---

:::tip

It is generally advisable to put shops near your town spawn so that players do not have to travel far to trade within your town.

:::