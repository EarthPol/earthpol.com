---
title: Starter Guide
sidebar_position: 3
---

# EarthPol Starter Guide

<!-- last updatedtag -->
<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>
*Last updated by [MrTytanic](https://github.com/MrTytanic) on 23 Feb 2026*
</span>

Welcome to **EarthPol**, a geopolitical **Minecraft Earth server** on a 1:326 scale map of the real world.

This Earth SMP combines survival gameplay, diplomacy, politics, and the popular **Towny** plugin to create a true Towny Earth server experience.

Below is a short starter guide video for new EarthPol players:

<div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
  <iframe 
    width="840"
    height="472" 
    src="https://www.youtube.com/embed/p0vT7763j4E?si=wlCrjyyBSsAw2nZC" 
    title="EarthPol Minecraft Earth Server Starter Guide" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
</div>

---

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px', alignItems: 'stretch' }}>

{/* LEFT COLUMN — First 5 Minutes + Starter Kit */}
  <div style={{ flex: '2 1 860px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

    {/* First 5 Minutes Card */}
    <div className="kpi-card fixed-card-height" style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ textAlign: 'center' }}>First 5 Minutes</h3>
        <p style={{ textAlign: 'center' }}>Get started quickly on EarthPol and claim your first Towny Camp!</p>
        <ol>
          <li>Use <code>/map</code> to see your spawn location.</li>
          <li>Gather wood and survival resources.</li>
          <li>Place your campfire to create a Towny Camp.</li>
          <li>Decide whether to start your own town or join an existing one.</li>
          <li>Join our Discord to meet other players!</li>
        </ol>
      </div>

      <a href="https://discord.gg/bURuFxYqkD" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold', padding: '6px 16px', lineHeight: '1.5', borderRadius: '8px', backgroundColor: '#5865F2', color: '#fff', textDecoration: 'none', marginTop: '10px' }}>
        Join Our Discord
      </a>
    </div>

    {/* Starter Kit Card */}
    <div className="kpi-card fixed-card-height" style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ textAlign: 'center' }}>Starter Kit</h3>
        <p style={{ textAlign: 'center' }}>Receive essential survival items when you join the server.</p>
        <ul>
          <li>Stone Pickaxe</li>
          <li>Stone Axe</li>
          <li>16 Bread</li>
          <li>Shield + Leather Armor</li>
          <li>Campfire</li>
        </ul>
        <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '15px' }}>
          Like EarthPol on NameMC to receive extra rewards!
        </p>
      </div>

      <a href="https://namemc.com/server/play.earthpol.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', fontWeight: 'bold', padding: '6px 16px', lineHeight: '1.5', borderRadius: '8px', backgroundColor: '#2980b9', color: '#fff', textDecoration: 'none', marginTop: '5px' }}>
        Like EarthPol on NameMC
      </a>
    </div>

  </div>

{/* RIGHT COLUMN — Towny Camps + Map Info side by side */}
  <div style={{
    flex: '2 1 860px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  }}>
  {/* Towny Camps Card */}
  <div className="kpi-card fixed-card-height" style={{ flex: '1 1 420px' }}>
    <h3>Towny Camps</h3>
    <p style={{ marginBottom: '10px' }}>
      Towny Camps are temporary 1-chunk plots where you can safely set up your first base. They provide protection while you get started and explore the server.
    </p>
    <ul>
      <li>Temporary 1-chunk land protection</li>
      <li>PvP and griefing disabled</li>
      <li>Lasts <strong>48 hours</strong></li>
      <li>Reset by re-lighting</li>
      <li>One camp every 24 hours</li>
    </ul>
    <p>Place your campfire and type <code>/confirm</code> when prompted to claim your camp.</p>
    <img src="/img/campfire.avif" alt="Towny Camp" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
  </div>

    {/* Map Info Card */}
    <div className="kpi-card fixed-card-height" style={{ flex: '1 1 420px' }}>
      <h3>Spawning on the Earth Map</h3>
      <p>When you join EarthPol, you spawn at a random location on our 1:326 scale Earth map.</p>
      <img src="/img/servermap.avif" alt="EarthPol Map" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p><strong>View the live Earth server map <a href="https://earthpol.com/map/">here</a>.</strong></p>
      </div>
      <h4>Important Commands</h4>
      <ul>
        <li><code>/map</code> — View your location on the EarthPol interactive map.</li>
        <li>You are <strong>immune from mob damage for your first hour</strong> (other players in the wilderness can still attack you).</li>
        <li><code>/rtp</code> — Teleport randomly across the Earth server.</li>
        <li><code>/rtp location [continent]</code> — Spawn on a specific continent.</li>
      </ul>
    </div>
  </div>

</div>

<style>
{`
/* Remove bounce/pop entirely */
.card-hover {
  transition: none;
}
.card-hover:hover {
  transform: none;
  box-shadow: none;
}

/* KPI Card styling */
.kpi-card {
  background: var(--kpi-bg);
  border: 1px solid var(--kpi-border);
  border-radius: var(--kpi-radius);
  padding: 1.5rem;
  box-shadow: var(--kpi-shadow);
  transition: background .2s, border-color .2s, color .2s;
}

/* fixed height for consistent cards */
.fixed-card-height {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Responsive: stack on mobile */
@media (max-width: 900px) {
  div[style*='flex: 1 1 420px'] {
    flex: 1 1 100%;
  }
}
`}
</style>

---

## Join Our Community

{/* --- BEGIN KPI STYLE --- */}
<style>
{String.raw`
:root {
  --kpi-bg: #ffffff;
  --kpi-border: #e6e8eb;
  --kpi-text: #0b1726;
  --kpi-muted: #6b7280;
  --kpi-accent: #2ecc71;
  --kpi-accent-red: #ed0e3f;
  --kpi-shadow: 0 6px 18px rgba(11,20,40,0.06);
  --kpi-radius: 12px;
}

html[data-theme='dark'] {
  --kpi-bg: #14161a;
  --kpi-border: #2a2d32;
  --kpi-text: #e5e7eb;
  --kpi-muted: #9ca3af;
  --kpi-accent: #27ae60;
  --kpi-accent-red: #ed0e3f;
  --kpi-shadow: 0 6px 18px rgba(0,0,0,0.45);
}

.kpi-card {
  background: var(--kpi-bg);
  border: 1px solid var(--kpi-border);
  border-radius: var(--kpi-radius);
  padding: 1.5rem;
  box-shadow: var(--kpi-shadow);
  transition: background .2s, border-color .2s, color .2s;
}

.kpi-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.kpi-content p {
  margin: 0;
  line-height: 1.65;
  color: var(--kpi-text);
}

.kpi-socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  justify-content: center;
}

.kpi-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
}
.kpi-socials a:hover {
  transform: scale(1.08);
}
.kpi-socials i {
  color: white;
  font-size: 22px;
}
`}
</style>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

<div
  style={{
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  }}
>
  {/* LEFT SIDE — KPI CARD */}
  <div style={{ flex: "1 1 420px", maxWidth: "500px" }}>
    <div
      className="kpi-card"
      style={{
        height: "500px", // match Discord embed
        overflowY: "auto", // scroll if content too tall
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // space out content and socials
      }}
    >
      <div className="kpi-content">
        <p>
          EarthPol is more than just a Minecraft Earth server — it’s a geopolitical Towny Earth SMP built around diplomacy, alliances, and strategy.
        </p>
        <p>Joining our  community helps you:</p>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
          <li>Find towns and nations</li>
          <li>Form alliances and rivalries</li>
          <li>Negotiate trade agreements</li>
          <li>Participate in wars</li>
          <li>Stay updated on updates and events</li>
          <li>Make friends from around the world</li>
        </ul>
      </div>

      {/* --- FOLLOW TEXT + SOCIALS --- */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <strong>Follow EarthPol</strong>
        <div className="kpi-socials" style={{ marginTop: "10px" }}>
          {/* Discord */}
          <a href="https://discord.gg/bURuFxYqkD" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#5865F2" }}>
            <i className="fab fa-discord"></i>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@EarthPol?sub_confirmation=1" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#FF0000" }}>
            <i className="fab fa-youtube"></i>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/earthpolmc/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#C13584" }}>
            <i className="fab fa-instagram"></i>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@play.earthpol.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#69C9D0" }}>
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

{/* RIGHT SIDE — DISCORD EMBED */}
  <div style={{ flex: "1 1 420px", display: "flex", justifyContent: "center" }}>
    <iframe
      src="https://discord.com/widget?id=1204204837483446353&theme=dark"
      width="100%"
      height="500"
      style={{ maxWidth: "500px", borderRadius: "12px" }}
      allowTransparency="true"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  </div>
</div>

---
## Towny

<p>
EarthPol uses the <strong>Towny plugin</strong> to allow players to claim land, form communities, and participate in diplomacy on our Minecraft Earth SMP.
</p>

### Towns

<p>
<strong>Towns</strong> are local communities where you can build, trade, and protect land.<br/>
</p>

<details className="details-towns">
  <summary>Click to expand Town information</summary>

  <br />

  <p>Towns allow you to claim land permanently on the Earth map and provide a safe community space for players.</p>

  <ul>
    <li>Permanent land protection</li>
    <li>PvP control</li>
    <li>Economic systems</li>
    <li>Community building</li>
  </ul>

<h4>Join a Town</h4>
<code>/t join &lt;town&gt;</code> — Join an open town or accept an invitation

<h4>Create a Town</h4>
  <ul>
    <li>Requires <strong>256 gold</strong></li>
    <li>Must be in unclaimed land</li>
    <li><code>/t new [Town Name]</code></li>
    <li><code>/confirm</code></li>
  </ul>

  <br />
  <img src="/img/town.avif" alt="Town" />

  <p style={{ marginTop: "10px" }}>
    For more info, check our <a href="towny/Basic/Towns.md">Town Guide</a>.
  </p>
</details>

### Nations

<p>
<strong>Nations</strong> are groups of towns, letting you engage in global diplomacy, wars, and alliances.
</p>

<details className="details-nations">
  <summary>Click to expand Nation information</summary>

  <br />

  <p>Nations are alliances of towns within EarthPol. They allow players to form diplomatic ties, engage in wars, and gain political influence.</p>

  <ul>
    <li>Alliances & diplomacy</li>
    <li>War participation</li>
    <li>Global influence</li>
    <li>Political strategy</li>
  </ul>

<h4>Create a Nation</h4>
  <ul>
    <li>Requires <strong>2,000 gold</strong></li>
    <li>Must own at least one town</li>
    <li><code>/n new [Nation Name]</code></li>
    <li><code>/confirm</code></li>
  </ul>

  <br />
  <img src="/img/nation.avif" alt="Nation" />

  <p style={{ marginTop: "10px" }}>
    For more info, check our <a href="towny/Basic/Nations.md">Nation Guide</a>.
  </p>
</details>

---

EarthPol is a competitive, community-driven Minecraft Earth server built around Towny, diplomacy, and geopolitical strategy.

See you on the Earth SMP!