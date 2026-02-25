---
title: How to Join
sidebar_position: 2
---

# Joining EarthPol

<!-- last updatedtag -->
<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>
*Last updated by [MrTytanic](https://github.com/MrTytanic) on 25 Feb 2026*
</span>

Welcome to **EarthPol**, a geopolitical Minecraft Earth SMP! Follow these steps to get started quickly.

Below is our video guide to joining EarthPol:
<div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}> 
  <iframe width="840" height="472" src="https://www.youtube.com/embed/eTTNoybXN5g?si=cfoe8ZBcQVzGrIL-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe> 
</div>

---

## How to Join

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>

{/* Step 1 */}
  <div className="kpi-card" style={{ flex: '1 1 420px', textAlign: 'center' }}>
    <h3>Step 1 — Install Minecraft</h3>
    <p>Make sure you have a legitimate copy of <strong>Minecraft Java Edition</strong> purchased from <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition" target="_blank" rel="noopener noreferrer">minecraft.net</a>.</p>
    <p>Once installed, open the game and get ready to join our Earth SMP!</p>
    <br></br>
    <i>Bedrock edition is not supported!</i>
  </div>

{/* Step 2 */}
  <div className="kpi-card" style={{ flex: '1 1 420px', textAlign: 'center' }}>
    <h3>Step 2 — Join the Server</h3>
    <ol style={{ textAlign: 'left', margin: '10px auto', maxWidth: '600px' }}>
      <li>Open Minecraft Java Edition</li>
      <li>Click <strong>Multiplayer → Add Server</strong></li>
      <li>Change <strong>Server Name</strong> to <em>EarthPol</em></li>
      <li>Enter the Server IP below:</li>
    </ol>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '8px' }}>
      <input
        type="text"
        readOnly
        value="play.earthpol.com"
        style={{
          width: '220px',
          padding: '6px',
          borderRadius: '6px',
          textAlign: 'center',
          height: '36px', // match button height
          fontSize: '16px',
        }}
        id="earthpol-ip"
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText("play.earthpol.com");
          alert("Copied IP to clipboard!");
        }}
        style={{
          height: '36px',
          padding: '0 12px',
          borderRadius: '6px',
          backgroundColor: '#2980b9',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        Copy IP
      </button>
    </div>

    <p style={{ marginTop: '10px' }}><strong>Then click “Done” and select EarthPol to join!</strong></p>
  </div>

</div>

### Troubleshooting

<div className="kpi-card" style={{ marginTop: '20px' }}>
  <ul>
    <li>Use <strong>Minecraft Java Edition</strong> (Bedrock is not supported)</li>
    <li>Your account must be purchased from <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition" target="_blank" rel="noopener noreferrer">minecraft.net</a></li>
    <li>Check your internet connection is stable</li>
    <li>Disable any VPNs in use</li>
    <li>If you still can’t connect, try changing your DNS to <strong>1.1.1.1</strong> (Cloudflare) or <strong>8.8.8.8</strong> (Google)</li>
    <li>Join our <a href="https://discord.gg/tUK3npxkDA" target="_blank" rel="noopener noreferrer">Support Discord</a> for help</li>
  </ul>
</div>

---

## What to Do Next

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px', justifyContent: 'center' }}>

{/* Starter Guide */}
  <div className="kpi-card" style={{ flex: '1 1 220px', textAlign: 'center' }}>
    <h4>📘 Starter Guide</h4>
    <p>Learn the basics and get your first Towny Camp!</p>
    <a href="/starter-guide" style={{ display: 'inline-block', marginTop: '10px' }}>
      <img src="/img/icons/book.png" alt="Starter Guide" width="48" />
    </a>
  </div>

{/* Read Rules */}
  <div className="kpi-card" style={{ flex: '1 1 220px', textAlign: 'center' }}>
    <h4>📜 Read the Rules</h4>
    <p>Know the dos and don'ts on EarthPol.</p>
    <a href="/rules" style={{ display: 'inline-block', marginTop: '10px' }}>
      <img src="/img/icons/rules.png" alt="Rules" width="48" />
    </a>
  </div>

{/* Join Discord */}
  <div className="kpi-card" style={{ flex: '1 1 220px', textAlign: 'center' }}>
    <h4>💬 Join Discord</h4>
    <p>Meet the community and get help instantly.</p>
    <a href="https://discord.gg/bURuFxYqkD" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px' }}>
      <img src="/img/icons/discord.png" alt="Discord" width="48" />
    </a>
  </div>

{/* Follow Us */}
  <div className="kpi-card" style={{ flex: '1 1 220px', textAlign: 'center' }}>
    <h4>📱 Follow Us</h4>
    <p>Stay updated on social media.</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
      <a href="https://www.instagram.com/earthpolmc/" target="_blank" rel="noopener noreferrer"><img src="/img/icons/instagram.png" alt="Instagram" width="32" /></a>
      <a href="https://www.youtube.com/@EarthPol?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><img src="/img/icons/youtube.png" alt="YouTube" width="32" /></a>
      <a href="https://www.tiktok.com/@play.earthpol.com" target="_blank" rel="noopener noreferrer"><img src="/img/icons/tiktok.png" alt="TikTok" width="32" /></a>
    </div>
  </div>

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

</div>