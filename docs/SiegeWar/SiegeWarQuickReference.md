---
title: SiegeWar Quick Reference
---

## **SiegeWar basic commands, as per the official SiegeWar wiki: https://github.com/TownyAdvanced/SiegeWar/wiki/Siege-War-User-Guide**
We have only included the features which are being used on EarthPol.

    Nation - /n rank add [player name] [rank] - As a king, assign any nation military rank e.g. private, sergeant, lieutenant, captain, * 
    
    ⏩ Spawn to Siege
    /sw spawn [besieged town] - Spawn to a siege.

ℹ️ View Information:

    Siege - /sw hud [town name] - Toggle a HUD on/off, to monitor the progress of a particular siege.
    Town - /t or /t here or /t [town name] - View detailed information about the siege on the town (if any).
    Nation - /n [nation name] - View the list of sieges the nation is involved in (if any). major, colonel, or general. As a general, assign any of these except general.

🤑 Set Occupation Tax:

    /n set occupationtax [rate] - As a king, set your nation's occupation tax-rate. Generally you don't need to run this command, as your nation will automatically use the highest rate. Once you run this command, your nation's rate will no longer track the server configured maximum.
    /n set occupationtax max - As a king, set your nation's occupation tax to track the server configured maximum.

☮️ Make Town Peaceful:

    /sw town togglepeaceful - As a mayor, declare your town to be peaceful. The peaceful state will be confirmed in 7 days (2 if the town is new).
        Advantages:
            Town becomes immune to siege attack.
            Town gets a public /t spawn.
        Disadvantages:
            Town cannot move homeblock.
            Residents cannot receive nation-military ranks.
            Town becomes vulnerable to being Subverted by nearby nations.
        How Subverting Works:
            The largest (by num-townblocks), non-sieged, non-peaceful, town within 1,200 blocks of your peaceful town is your Guardian Town
            Whichever nation owns that Guardian Town, can instantly subvert and capture your peaceful town, by placing a non-white banner on your town border.

☮️ Make Town Non-Peaceful:

    /sw town togglepeaceful - As a mayor, declare your town to be Non-Peaceful. The Non-Peaceful state will be confirmed in 7 days (2 if the town is new).

🔧 Configure Personal Preferences:

    /sw preference bossbar on|off - Toggle the bossbars on and off.
    /sw preference beacon on|off - Toggle the beacon beam on and off.

