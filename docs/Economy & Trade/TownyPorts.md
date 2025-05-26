<div style={{ textAlign: 'center' }}>
  <img src="/img/townyports-thumbnail.png" alt="Towny Ports" style={{ maxWidth: '100%', height: 'auto' }} />
  <p><em>Towny Ports and how to use it!</em></p>
</div>

TownyPorts is a plugin that allows individual towns that are not nation capitals to foster trade and tourism, by allowing outsiders to teleport into their town for a fee. It emphasizes the geopolitical importance of access to a coastal or river waterway.

## How to use
- ``/plot set port`` - Set a plot as your town's port plot
- ``/port TownName`` - Teleport to a town's port
- `/distance TownName1 TownName2` - Tells you the distance between two towns, in chunks. Measures the distance between the homeblocks of both chunks.
- Port plots can only be set in ocean, river, and beach biomes.
- You can only travel to a port when standing in another port plot.
  
## Details
minimum-port-fee: 10
The minimum travel fee a port can have for travellers.

maximum-port-fee: 100
The maximum travel fee a port can have for travellers.

maximum-port-distance-in-chunks: 2750
The max distance a port can be from another to be travelled to.

- Online residents of a town will be alerted whenever someone arrives at their port.

- When a player tries to travel to a port that belongs to a nation which enemies the player's nation, the action will fail.









