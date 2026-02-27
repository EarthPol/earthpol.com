---
title: QuickShop
description: "Guide to QuickShop on EarthPol, including key mechanics, commands, and tips."
---

# QuickShop Guide

## Overview

Whether you're looking to make purchases or set up your own shop, this guide provides everything you need to navigate the QuickShop system on EarthPol. 

## For Customers 

### Buying from a Shop
Buying an item from a shop is simple. First, left-click anywhere on the shop chest you want to buy from, then type the amount you wish to purchase in chat. If you have enough money, the item will be removed from the chest and automatically placed in your inventory.

Some shops may be set up to buy items rather than sell them. If you have the item they’re looking for, simply interact with the chest the same way (left-click the chest and enter the quantity in chat). The shop will take the item from your inventory and pay you in gold based on the price displayed on the chest.

To review, here is a step-by-step guide to buying an item:

1. Left click anywhere on the shop chest.
2. Input the amount you wish to buy.

### Avoiding Scams

While EarthPol does allow scamming, it’s entirely possible to avoid getting tricked. When you left-click on the chest, a QuickShop GUI will appear in chat. Click on the `Item Preview` button to see the item inside the chest and confirm that the purchase is legitimate.

:::warning

As per 1.1, scamming is permitted, except for "town leaders and trusted positions (mayors, co-mayors, assistants, builders) who must not steal from town residents."

:::

---

## For Shop Owners

### Creating a Shop

To create a shop, start by placing a chest in the location where you want your shop to be. This chest will serve as the physical point of sale for other players. Once the chest is placed, left-click it while holding the item you want to sell. This action will prompt you to enter the selling price in chat. After setting the price, open the chest and place the item(s) inside. These are the items that will be available for purchase by other players. Once everything is set, the shop will be active and ready for business. To restock, just open the chest and place the same item(s) back inside.

To review, below is a step-by-step guide to creating a shop:

1. Place a chest.
2. Left-click the chest with the item you want to sell.
3. Enter the selling price in chat.
4. Place the item(s) into the chest.

If you instead wish to buy items from players rather than sell to players, simply open the QuickShop GUI by left-clicking and press the `[Change]` button next to "Shop Mode: Selling." This will convert the chest into a "buying" chests where players can sell you items and receive money from your gold balance.

If you wish to change the price of the item(s) you are selling/buying, open the QuickShop GUI by left-click and press the `[Change]` button next to "Price:", this will allow you to input a new buy/sell price. 

<div style={{ textAlign: 'center' }}>
  <img src="/img/chestshops.gif" alt="Rails" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Demonstration of how to create a ChestShop</em></p>
</div>

### Adding Employees to a Shop (Premium)

Premium players are able to add friends and town members to their shops. To add an employee, use the `/qs staff` or `/qs staffall` command. Employees are able to manage your inventory, prices, and toggle the buying/selling mode of the shop.

- Use `/qs staff` to modify only one specific shop (shop that you are currently looking at)
- Use `/qs staffall` to modify all shops you own.
- The following commands apply to both staff and staffall commands.

| Command    | Description|
|----------|------------|
| `/qs staff add Player`| Add a player as shop staff.|
| `/qs staff clear` | Remova all shop staff.|
| `/qs staff del Player`| Remove a specific player as shop staff.|
| `/qs staff list`| List all staff for the shop. |


### Splitting shop profits (Premium)
Looking at the shop, execute command `/quickshop benefit add <player> <percentage>` (example: /quickshop benefit add MrTytanic 50%) will split the percentage rewards to the player for that specific shop.

#### Example usage:

Looking at a quickshop, execute command /quickshop benefit add `<player>` `<percentage>` (example: /quickshop benefit add MrTytanic 50%) will split `<percentage>%` rewards to `<player>`.

For example:

    - `/quickshop benefit add Alice 50%`
    - `/quickshop benefit add Bob 30%`

In those commands, shop owner set split 50% rewards to Alice and 30% to Bob. When a shop earn 100$, Alice will get 50$ for rewards, and Bob will get 30$ for rewards, and shop owner will get remains 20% (20$) for rewards.

##### A note about splitting gold

- **IMPORTANT**: Due to the physical item-based economy, try to split percentages in such a way that all players receive an integer (whole number, no decimal) amount of gold. Any decimal amounts of gold in the revenue split that a player receives will be **rounded down**.
- Example: Two players split the profits from an item that sells for 3 gold each.
- 3 gold / 2 players would be 1.5 gold per player. The gold for each player will be rounded down to the nearest whole number before being paid out, since the gold ingots cannot be subdivided any further.
- Therefore, both players would only receive 1 gold each, and the 0.5 gold in the amount for each player would be lost.

### Removing a Shop

To remove a shop, simply left-click to open the QuickShop GUI. At the bottom of the menu, you’ll see a red button labeled `[Remove Shop]`. Click this button once, and then confirm the removal by clicking again within 5 seconds. Once confirmed, the shop will be removed and you’re free to safely break the chest without any issues.

Step-by-Step Guide to Removing a Shop:

1. Left-click the chest to open the QuickShop GUI.
2. Click the red `[Remove Shop]` button at the bottom of the menu.
3. Confirm the removal by clicking again within 5 seconds.

---

## Alternative Use

### Chest Vaults

Chest shops can only be accessed by their owner. As a result, players may choose to use chest shops as secure storage by setting an extremely high price, effectively preBobng other players from purchasing the items inside. While this is allowed, we also encourage players to consider using their own individual plots as an alternative method for safely storing personal items.
