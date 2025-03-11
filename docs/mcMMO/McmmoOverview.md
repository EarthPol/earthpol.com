---
title: McMMO Guide
---

# What is mcMMO?

McMMO adds an RPG-like experience to EarthPol, featuring skill leveling, special abilities, and rare loot. With skill leveling, players in towns and nations are incentivized to specialize in skills that benefit their community the most. More importantly, bonuses and special abilities add new gameplay elements to vanilla mechanics, such as double drops or fast breaker.

---

## Parties

The Party system allows players to form private groups for communication and gameplay, enabling chat that is exclusive to party members. As the party levels up over time and through XP gains, different features are unlocked, enhancing the party experience. Party leaders have the ability to choose the games their party will play. There are several commands available to manage parties, such as joining, inviting, kicking, and teleporting party members. 

The table below outlines the features that unlock as the party levels up, along with the corresponding level requirement. Additionally, the XP share system grants bonuses based on proximity to other party members, rewarding players for staying close to one another.

| **Party Feature**    | **Unlock Level** |  
|----------------------|------------------|
| Party Chat           | 1                |
| Party Teleport       | 2                |
| Alliances            | 5                |
| Item Share           | 8                |
| XP Share             | 10               |

The Party XP Share Bonus is determined by the number of party members near you. The closer you are to other party members, the higher your XP share bonus. If you're near one party member, you receive a 10% bonus. With two party members, the bonus increases to 15%, and with three, it goes up to 20%. If you're near nine party members, the bonus is 45%, and at ten or more party members, the bonus reaches the maximum of 50%.

---

**Party Commands**

| **Command**                        | **Command Info**                                    |
|------------------------------------|-----------------------------------------------------|
| `/party or /party info`              | View information on your current party.             |
| `/party join <player name> [password]` | Joins the party of that player, password if specified. |
| `/party quit`                        | Leaves the current party.                          |
| `/pc`                                | Toggles party chat.                                |
| `/party invite <player name>`        | Invites the named player to the current party.      |
| `/ptp <party member name>`           | Teleports the player to the designated party member.|
| `/party <lock;unlock>`               | Locks or unlocks the party you are in.              |
| `/party password (password)`         | Sets a password to your party (only works if party is locked). |
| `/party create <party name> [password]`| Creates a party with a name, password is optional.  |
| `/party <kick> [player name]`        | Kicks said player from your party.                  |
| `/party <leader> [player name]`      | Transfers ownership of the party.                   |
| `/party disband`                     | Disbands the party.                                |
| `/party help`                        | Shows the party commands.                          |

This system encourages cooperation and rewards players for staying close to their party members while offering flexibility and control to the party leader.

---

## Skills

McMMO is divided into fifteen skills which are listed below in alphabetical order. 

---

### Acrobatics

Acrobatics is a skill focused on improving your ability to move gracefully, reduce fall damage, and avoid attacks. It is enabled for PvE activities but not for PvP combat. This skill allows players to gain experience by taking fall damage, successfully rolling on the ground, or dodging attacks.

Experience in Acrobatics is earned by taking fall damage, with 120 XP gained per half-heart of damage from a fall. The experience can also be calculated using the formula `(b - 3) * 120`, where "b" represents the number of blocks fallen before taking damage. Any reduction in fall damage, such as with hay bales, potions, or enchantments, will lower the amount of XP gained. If a roll or graceful roll is executed to reduce the damage, the experience earned is reduced to 80 XP per half-heart, calculated based on the damage that would have been taken without the roll.

Feather Falling enchantment doubles the amount of XP earned from falling, regardless of its enchantment level, but it also reduces the base fall damage. Acrobatics XP is not gained immediately after teleporting, as there is a 5-second cooldown to prevent XP farming right after teleportation. Notably, Acrobatics does not have a level cap, so players can continue to improve their skill over time.

### Alchemy

Alchemy is a miscellaneous skill focused on brewing potions, and it is leveled through the creation and modification of potions in a brewing stand. Additionally, some effects that are typically unobtainable through vanilla potions are made available through custom recipes. As you level up in Alchemy, the process of brewing ingredients into potions becomes faster, especially beyond level 100, thanks to a feature called Catalysis.

Experience for Alchemy is gained by brewing potions through several stages. The first brew, which involves turning a water bottle into an awkward potion, grants 15 XP per potion, or 45 XP for a full brewing stand. The second stage, brewing an awkward potion into any other potion, rewards 30 XP per potion (90 XP for a full stand, and 135 XP if brewed from First to Second Brew). The third stage, which involves using redstone or glowstone to modify potions, yields 60 XP per potion, or 180 XP for a full stand (315 XP when brewed from First to Third Brew). The fourth brew, using gunpowder to create splash potions, grants 120 XP per potion (360 XP for a full stand, 675 XP if brewed from First to Fourth Brew).

However, there are some exceptions to these XP rules. For example, brewing potions of Weakness with fermented spider eyes grants 30 XP per potion because the recipe doesn't begin with Nether Wart. There are also no XP rewards for converting Potions of Healing into Potions of Harming with fermented spider eyes, nor for brewing Harming II potions via glowstone. Nevertheless, gunpowder still provides the expected 120 XP per splash potion. Additionally, older versions of the game do not grant experience for creating Lingering potions, but this has been corrected in the current version.

For efficient potion brewing, it is important to note that speed potions are simple to make with common materials, and alternating between redstone and glowstone does not change XP amounts. Players can hold up to 36 potions at a time and can use multiple brewing stands and hoppers controlled with levers to streamline the brewing process. This allows for efficient XP grinding, though players still need to manually open the brewing stand and insert ingredients for each brew to gain experience.

**Concoctions**
At certain Alchemy levels, new recipes are unlocked for potions, as follows: 

| **Potion Name**               | **Potion Effect**   | **Ingredient**        | **Unlock Level** | **Type** | **Information**                                                                |
|-------------------------------|---------------------|-----------------------|------------------|----------|--------------------------------------------------------------------------------|
| Potion of Haste                | Haste               | Carrot                | 100              | Buff     | Increases Mining and Attack Speed                                              |
| Potion of Absorption           | Absorption          | Nether Quartz         | 200              | Buff     | Applies 2 additional hearts (per level) that disappear upon damage.            |
| Potion of Mining Fatigue       | Mining Fatigue      | Slime Ball            | 200              | Debuff   | Decreases Mining and Attack Speed                                              |
| Potion of Health Boost         | Health Boost        | Apple                 | 350              | Buff     | Applies 2 refillable hearts per level                                           |
| Potion of Hunger               | Hunger              | Rotten Flesh          | 350              | Debuff   | Depletes the hunger bar at a faster rate                                        |
| Potion of Nausea               | Nausea              | Brown Mushroom        | 500              | Debuff   | Makes the user's vision swirl (like entering a Nether portal)                   |
| Potion of Blindness            | Blindness           | Ink Sack              | 500              | Debuff   | Decreases the user's range of vision and prevents sprinting                     |
| Potion of Saturation           | Saturation          | Fern                  | 750              | Buff     | Causes the user's hunger bar to increase without the consumption of food.      |
| Potion of Decay                | Wither              | Poisonous Potato      | 900              | Debuff   | Damage over time, much like burning or poison.                                  |
| Potion of Resistance           | Resistance          | Golden Apple (regular)| 1000             | Buff     | Applies a 20% damage reduction per level                                        |

### Archery

Archery is a skill centered around using a bow and arrow, offering various combat bonuses that scale with your level. As you level up in Archery, you gain a damage boost, which makes your shots more powerful. Archery also gives you a chance to retrieve some of your spent arrows from the corpses of the mobs you kill.

Experience in Archery is gained by shooting mobs with your bow. One of the main features of this skill is Skill Shot, which provides bonus damage to your arrows. This bonus increases as you level up in Archery, with the default settings granting a 10% increase in damage every 50 levels, up to a maximum of 200% bonus damage. Arrow Retrieval allows you to passively recover some of your arrows after killing a mob with your bow. This chance increases by 0.1% per level, reaching 100% at level 1000, enabling you to retrieve all of your arrows at that point.

### Axes

The Axes skill allows players to use axes in combat for much more than just chopping wood. In PvE scenarios, axes can deal significant damage to mobs, with the added benefit of knockback and critical hits. The higher your skill level, the more effective your axe becomes at breaking down enemy defenses, with abilities that increase damage output and armor penetration.

Experience in Axes is gained by attacking mobs with an axe. One of the key abilities, Skull Splitter, allows you to deal an Area of Effect (AoE) hit that deals half the damage of your main target, making it useful for clearing out groups of enemies. Critical Strikes is a passive ability that gives you a chance to deal double damage to mobs, with the chance increasing as you level up in Axes. Axe Mastery further boosts your damage, adding extra points with every 50 levels, up to 4 extra damage at level 200. Armor Impact gives you a passive chance to damage a mob's armor, with the effect becoming stronger as you level. Lastly, Greater Impact gives you a chance to trigger an extreme knockback effect, similar to the Knockback II enchantment, while also dealing bonus damage to a mob. With these abilities combined, your axe becomes a devastating tool in both offense and defense.

### Crossbows

The Crossbows skill focuses on the effective use of crossbows in combat, allowing players to gain experience by shooting mobs with their crossbow. As players level up in this skill, they become more proficient in utilizing crossbows for ranged attacks.

A key feature of the Crossbows skill is Trickshot, a passive ability that enables players to shoot bolts at a shallow angle, causing them to ricochet off blocks. The effectiveness of Trickshot increases with skill rank, allowing for more bounces and providing players with additional opportunities to hit targets from unexpected angles. This skill is ideal for those looking to incorporate precision and strategy into their ranged combat.

### Excavation

Excavation is the act of digging up dirt, sand, gravel, clay, and other compatible materials to find treasures. This skill requires a shovel to gain experience and discover treasures while digging. Players must dig specific materials like *Grass, Dirt, Sand, Clay, Gravel, Mycelium, Soul Sand, and Snow* to earn XP and find items. A special ability, **Giga Drill Breaker**, can be activated by right-clicking while holding a shovel. 

**Special Ability: Giga Drill Breaker:** This ability increases the chance of finding treasures and enables instant breaking of excavation materials. The more players level up their Excavation skill, the greater their chances of finding rarer treasures. Below is a table of treasures that can be found and at what level they unlock:

| Treasure           | Drop Chance | Level Requirement (Standard Mode) | Drops From                                                                                                                                 |
|:------------------:|:-----------:|:---------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| Heart of the Sea   |     0.01%    |                90                 | Mud                                                                                                                                       |
| Potato             |     3.0%     |                10                 | Dirt, Mud                                                                                                                                 |
| Spyglass           |     0.1%     |                 7                 | Mud, Dirt                                                                                                                                 |
| Stick              |     2.0%     |                 1                 | Mud, Muddy Mangrove Roots                                                                                                                 |
| Feather            |     1.0%     |                 5                 | Mud                                                                                                                                       |
| Trident            |     0.02%    |                40                 | Mud, Clay, Muddy Mangrove Roots                                                                                                           |
| Cake               |     0.05%    |                75                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Clay, Mycelium, Soul Sand, Soul Soil                                      |
| Gunpowder          |     10.0%    |                10                 | Gravel, Sand, Red Sand                                                                                                                    |
| Bone               |     10.0%    |                20                 | Gravel, Mud                                                                                                                                 |
| Apple              |     0.1%     |                25                 | Grass Block, Mycelium                                                                                                                    |
| Slime Ball         |     5.0%     |                15                 | Clay                                                                                                                                      |
| Bucket             |     0.1%     |                50                 | Clay                                                                                                                                      |
| Netherrack         |     0.5%     |                85                 | Gravel                                                                                                                                   |
| Red Mushroom       |     0.5%     |                50                 | Dirt, Coarse Dirt, Podzol, Grass Block, Mycelium, Mud                                                                                   |
| Brown Mushroom     |     0.5%     |                50                 | Dirt, Coarse Dirt, Podzol, Grass Block, Mycelium, Mud                                                                                   |
| Egg                |     1.0%     |                25                 | Grass Block                                                                                                                                 |
| Soul Sand          |     0.5%     |                65                 | Sand, Red Sand                                                                                                                            |
| Mycelium           |     0.5%     |                65                 | Grass Block, Dirt, Coarse Dirt, Mud                                                                                                      |
| Clock              |     0.1%     |                50                 | Clay                                                                                                                                      |
| Cobweb             |     5.0%     |                75                 | Clay                                                                                                                                      |
| String             |     5.0%     |                25                 | Clay                                                                                                                                      |
| Glowstone Dust     |     10.0%    |                 5                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Mycelium                                                                        |
| Music Disc 13      |     0.05%    |                25                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Clay, Mycelium, Soul Sand, Soul Soil                                    |
| Music Disc Cat     |     0.05%    |                25                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Clay, Mycelium, Soul Sand, Soul Soil                                    |
| Diamond            |     0.13%    |                35                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Clay, Mycelium, Soul Sand, Soul Soil, Mud                               |
| Cocoa Beans        |     1.33%    |                35                 | Dirt, Coarse Dirt, Podzol, Grass Block, Mycelium, Mud                                                                                    |
| Quartz             |     0.5%     |                85                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Mycelium, Soul Sand, Soul Soil                                         |
| Name Tag           |     0.05%    |                25                 | Dirt, Coarse Dirt, Podzol, Grass Block, Sand, Red Sand, Gravel, Clay, Mycelium, Soul Sand, Soul Soil                                    |


### Fishing

The Fishing skill enhances your ability to fish faster and discover unique treasures while fishing.

**Special Ability: Treasure Hunter:** By gaining experience point from catching fish, you unlock the "Treasure Hunter" ability at level 10. This ability provides a small chance to find treasure while fishing, with some items even being enchanted. The likelihood of finding treasure depends on the rarity of the item, with higher Fishing skill levels improving your chances of obtaining rarer items. These treasures are categorized into six tiers: Common, Uncommon, Rare, Epic, Legendary, and Mythic. Your Fishing skill level directly impacts the chance of obtaining items from each category, with higher levels increasing the probability of finding rarer and more valuable treasures. Below is a list of all treasures and their rarity:

| **Rarity**   | **Items**                                                                 |
|:------------:|:--------------------------------------------------------------------------:|
| Common       | Leather Boots, Leather Helmet, Leather Leggings, Leather Chestplate, Wooden Sword, Wooden Shovel, Wooden Pickaxe, Wooden Axe, Wooden Hoe, Lapis Lazuli |
| Uncommon     | Stone Sword, Stone Shovel, Stone Pickaxe, Stone Axe, Stone Hoe, Golden Sword, Golden Shovel, Golden Pickaxe, Golden Axe, Golden Hoe, Golden Boots, Golden Helmet, Golden Leggings, Golden Chestplate, Iron Ingot, Gold Ingot |
| Rare         | Iron Sword, Iron Shovel, Iron Pickaxe, Iron Axe, Iron Hoe, Bow, Ender Pearl, Blaze Rod, Name Tag |
| Epic         | Iron Boots, Iron Helmet, Iron Leggings, Iron Chestplate, Ghast Tear, Diamond |
| Legendary    | Nautilus Shell, Diamond Sword, Diamond Shovel, Diamond Pickaxe, Diamond Axe, Diamond Hoe, Diamond Boots, Diamond Helmet, Diamond Leggings, Diamond Chestplate, Enchanted Book |
| Mythic       | Netherite Sword, Netherite Shovel, Netherite Pickaxe, Netherite Axe, Netherite Hoe, Netherite Boots, Netherite Helmet, Netherite Leggings, Netherite Chestplate, Netherite Scrap |

### Herbalism

Herbalism is centered around collecting herbs, plants, and crops, with players gaining experience by harvesting various plant-based resources. The skill is compatible with blocks such as wheat, potatoes, carrots, melons, pumpkins, sugar canes, cocoa beans, flowers, cacti, mushrooms, Nether Wart, lily pads, and vines. As players level up, they can unlock abilities that enhance their harvesting efficiency and overall yield.

**Special Ability: Green Terra:**
One of the primary abilities in Herbalism is Green Terra, which is an active ability that players can trigger by right-clicking while holding a hoe. When activated, Green Terra grants a chance to get three times the usual drops from harvested plants, as well as the ability to spread life and transform blocks into plant-related counterparts using seeds from the player’s inventory. 

**Special Ability: Green Thumb:**
Another notable feature is Green Thumb, which comes in two versions, one for crops and another for cobblestone, stone bricks, or dirt. The crop version automatically replants harvested crops, and its success rate increases with skill level, while the block version allows players to turn blocks into plant-related variants by using seeds. 

**Special Ability: The Farmer's Diet:**
The Farmer's Diet passive ability increases the hunger restoration from specific foods like bread, carrots, potatoes, and more. 

**Special Ability: Hylian Luck:**
Hylian Luck grants players a chance to find rare items when breaking certain blocks with a sword, and Double Drops boosts the yield from harvests, making it easier to gather resources. 

These abilities work together to make Herbalism a valuable skill for players focused on gathering and improving their farming capabilities.

### Mining

Mining focuses on excavating stone and ores, offering powerful bonuses that enhance both the efficiency and output of your mining endeavors. XP is earned by mining with a pickaxe, but only specific materials contribute to your skill progression. These include stone, coal ore, iron ore, gold ore, diamond ore, redstone ore, lapis lazuli ore, obsidian, mossy cobblestone, end stone, glowstone, and netherrack. As your Mining level increases, you’ll benefit from greater yields and gain access to unique abilities that make the process faster and more rewarding.

**Special Ability: Super Breaker:**
The primary active ability in this skill is Super Breaker. When you right-click with a pickaxe to prepare your tool, you’ll have a few seconds to activate the ability by striking a compatible block. Once triggered, Super Breaker enables you to instantly mine blocks and significantly increases your chance of receiving extra drops.

**Special Ability: Blast Mining:** 
For a more explosive approach, Blast Mining allows players to harness TNT as a mining tool. By crouching and right-clicking on TNT with a pickaxe, you can remotely detonate it, triggering the ability. Blast Mining offers three unique perks: Bigger Bombs expands the blast radius, Demolitions Expert reduces TNT damage taken, and the final perk increases ore yield while reducing debris. 

Together, these abilities make Mining a powerful and efficient skill for resource gathering.

### Repair

Repair is a practical skill that allows you to restore your worn-out tools and armor using an iron block, also known as the mcMMO Anvil. Unlike the standard anvil in Vanilla Minecraft, the mcMMO Anvil is used specifically for repairing items and gaining experience in the Repair skill. To earn XP, simply place an item on the mcMMO Anvil and right-click it while holding the item you wish to fix—this process consumes one of that item’s type per use. With consistent use, you’ll not only extend the life of your gear but also unlock new benefits as your Repair level increases. As your skill progresses, you'll unlock several passive enhancements:

**Special Ability: Repair Mastery:** 
Repair Mastery increases the amount of durability restored each time you repair an item, scaling with your level for greater efficiency.

**Passive Ability: Super Repair:** 
Super Repair, offers a chance to double the repair effectiveness, making each use of the anvil significantly more impactful.

**Passive Ability: Arcane Forging:** 
One of the most valuable features is Arcane Forging, a passive ability that determines whether enchantments are retained when an item is repaired. Depending on your level, enchantments may be fully preserved, downgraded, or lost, adding a strategic layer to the repair process.

### Swords

The Swords skill enhances your combat effectiveness when fighting mobs with a sword, offering a range of passive and active abilities designed to give you an edge in PvE encounters. While there are no PvP benefits in our setup, the Swords skill still plays a valuable role in mob combat, especially for those who prefer fast, precise melee strikes. XP is earned by dealing damage to mobs with a sword, making it a skill that naturally levels up as you progress through your adventures.

**Special Ability: Serrated Strikes:** 
One of the key abilities is Serrated Strikes, an active skill that triggers when you right-click with a sword. This grants an area-of-effect (AoE) attack that deals 25% bonus damage and may apply Rupture, a bleeding effect that causes mobs to take damage every two seconds over time. Counter Attack adds another layer of defense and offense—when you're blocking and take damage from a mob, there's a chance to reflect 50% of that damage back to your attacker. These abilities make the Swords skill an excellent choice for close-combat players who want to cut through groups of enemies efficiently and keep the upper hand in melee skirmishes.

### Taming

The Taming skill enhances your bond with wolves and rewards players who fight alongside their loyal companions. By taming wolves or engaging in combat with them by your side, you’ll earn XP and unlock a variety of powerful passive and active abilities that improve your wolves’ survivability and combat performance. Your wolves also gain defensive upgrades as your Taming skill improves. 

**Special Ability: Serrated Strikes:** 
Call of the Wild is an active ability that lets you instantly summon a wolf or ocelot to fight by your side, just sneak and left-click while holding bones or fish. 

**Special Ability: Serrated Strikes:** With Beast Lore, you can inspect the stats of your pets by simply left-clicking them, giving you valuable insight into their strengths. 

**Passive Ability: Gore:** 
Gore grant your wolves a chance to cause bleeding on enemies. 

**Passive Ability: Sharpened Claws:** 
Sharpened Claws increases the damage they deal based on your Taming level.

**Passive Ability: Environmentally Aware:** 
Environmentally Aware allows them to teleport to you when near hazards and makes them immune to fall damage. 

**Passive Ability: Thick Fur:**
Thick Fur reduces incoming damage and grants fire resistance.

**Passive Ability: Shock Proof:** Shock Proof lessens damage from explosions.

**Passive Ability: Fast Food Service:** 
Fast Food Service gives your wolves a chance to self-heal when they land hits, making them even more resilient in battle.

### Tridents

As you engage in combat and land hits on mobs using a trident, you’ll gain XP and progress in the skill.

### Unarmed

Unarmed focuses on combat using only your fists. As you fight without weapons, you’ll gain various combat bonuses that enhance your effectiveness in unarmed combat. You earn XP based on the amount of damage you deal to mobs when fighting unarmed.

**Special Ability: Berserk:**
Berserk is an active ability activated by right-clicking while unarmed. When in Berserk mode, you deal 50% more damage and can instantly break weak blocks like Dirt and Grass. It’s a temporary power boost that can turn the tide of a fight or help you clear soft terrain quickly.

**Passive Ability: Steel Arm Style:**
Steel Arm Style increases the amount of damage you deal when striking mobs with your fists. The higher your skill level, the harder your punches hit.

**Passive Ability: Arrow Deflect:**
Arrow Deflect gives you a chance to deflect incoming arrows. When successful, arrows fired by Skeletons or other players will harmlessly drop to the ground instead of hitting you.

**Passive Ability: Iron Grip:**
Iron Grip is your defense against disarm attempts. As your Unarmed skill increases, so does your chance of resisting disarms and holding onto your gear.

**Passive Ability: Disarm:**
Disarm grants you a chance to knock the weapon or item out of an opponent’s hand, causing it to fall to the ground. This ability becomes more effective at higher skill levels and can be a powerful way to disrupt your enemies.

### Woodcutting

Woodcutting is focused on chopping down trees efficiently. As your skill improves, you’ll gain abilities that make collecting wood faster and more rewarding. You gain XP each time you break log blocks using an axe.

**Special Ability: Tree Feller:**
Tree Feller is an active ability that allows you to chop down an entire tree instantly. Right-click while holding an axe to activate it. Once triggered, the entire tree will collapse, dropping all of its logs at once. This makes large-scale lumber collection much quicker.

**Passive Ability: Leaf Blower:**
Leaf Blower causes leaf blocks to break instantly when struck with an axe. This helps clear out trees faster and unlocks automatically once you reach level 100 in Woodcutting.

**Passive Ability: Double Drops:**
Double Drops gives you a chance to earn an extra log each time you chop a log block. As your skill level increases, so does your chance of receiving bonus drops.