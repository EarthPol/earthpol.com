---
title: EarthPol Staff
---

<style>
{String.raw`
.staff-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center; /* centers incomplete rows */
}

.staff-card {
  background-color: var(--ifm-background-surface-color);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  padding: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.15s, box-shadow 0.15s;

  /* flexible width for responsive grid */
  flex: 1 1 calc(20% - 1rem); /* default 5 per row minus gap */
  max-width: calc(20% - 1rem);
}

.staff-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Responsive widths for different screen sizes */
@media (max-width: 1200px){ 
  .staff-card { flex: 1 1 calc(25% - 1rem); max-width: calc(25% - 1rem); } 
}
@media (max-width: 900px){ 
  .staff-card { flex: 1 1 calc(33.333% - 1rem); max-width: calc(33.333% - 1rem); } 
}
@media (max-width: 600px){ 
  .staff-card { flex: 1 1 calc(50% - 1rem); max-width: calc(50% - 1rem); } 
}
@media (max-width: 400px){ 
  .staff-card { flex: 1 1 100%; max-width: 100%; } 
}

.staff-bust-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.staff-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.staff-bust {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}

.staff-name {
  font-weight: 700;
  margin-top: 0.25rem;
  font-size: 0.95rem;
}

.group-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin: 1.5rem 0 0.75rem;
  text-align: center;
}
`}
</style>

<!-- Developers -->
<div class="group-title">Developers</div>
<div class="staff-grid">
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/d904bb76-412d-4f6a-af9f-13853b5fc614?size=400" alt="MrTytanic" />
    </div>
    <div class="staff-name">MrTytanic</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/9e47a89a-c251-4df6-9da2-792f2e3f74d0?size=400" alt="Bustun" />
    </div>
    <div class="staff-name">Bustun</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/d550441b-5fcf-448c-a756-5fa391b89a46?size=400" alt="0xBit" />
    </div>
    <div class="staff-name">0xBit</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/67dbe22c-f9f8-4f27-a372-3ec9cf7c8ea8?size=400" alt="Kauntar" />
    </div>
    <div class="staff-name">Kauntar</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/9a2657ea-e15c-4469-8886-6c101151eff0?size=400" alt="jhjhjh098k" />
    </div>
    <div class="staff-name">jhjhjh098k</div>
  </div>
</div>

<!-- Administrators -->
<div class="group-title">Administrators</div>
<div class="staff-grid">
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/dfc3c1e5-bd54-4902-85f6-b735a549b7e1?size=400" alt="AkselV" />
    </div>
    <div class="staff-name">AkselV</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/59af90c2-9631-4df5-9ac2-f9ea2691a746?size=400" alt="Ellied64" />
    </div>
    <div class="staff-name">Ellied64</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/f74fd6f2-2c0d-4965-a1a6-235c9a109777?size=400" alt="GrayIsBalls" />
    </div>
    <div class="staff-name">GrayIsBalls</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/514192d9-79da-4ae7-b762-fcdc94f14ec8?size=400" alt="Synistor" />
    </div>
    <div class="staff-name">Synistor</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/1e453074-8de5-4194-8d82-70574aad18cf?size=400" alt="Zamings" />
    </div>
    <div class="staff-name">Zamings</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/099af2f1-9ed3-4343-b701-7538739c343c?size=400" alt="xTheWardenx" />
    </div>
    <div class="staff-name">xTheWardenx</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/a07bcf70-01e2-4a21-807f-a7e278e55479?size=400" alt="Appqle" />
    </div>
    <div class="staff-name">Appqle</div>
  </div>
</div>

<!-- Moderators -->
<div class="group-title">Moderators</div>
<div class="staff-grid">
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/341b028f-07d8-4dcb-9f17-711d38f713f5?size=400" alt="XLNuggets" />
    </div>
    <div class="staff-name">XLNuggets</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/f71d3494-fa39-4f15-a5bd-cd534ca941d5?size=400" alt="XPurple_DiamondX" />
    </div>
    <div class="staff-name">XPurple_DiamondX</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/f48d75f3-0d7b-4851-8006-f7008521fb93?size=400" alt="Senpaii_soupp" />
    </div>
    <div class="staff-name">Senpaii_soupp</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/8238a4d3-b243-4b3d-9942-5368ea9d3961?size=400" alt="Nokss__" />
    </div>
    <div class="staff-name">Nokss__</div>
  </div>
</div>

<!-- Helpers -->
<div class="group-title">Helpers</div>
<div class="staff-grid">
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/3b4fa892-7f4c-423a-92b5-0f30d1fc34f8?size=400" alt="ImSigmaBoy" />
    </div>
    <div class="staff-name">ImSigmaBoy</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/243fa96a-81ee-40d9-baa9-c4a65a524059?size=400" alt="aniiwoww" />
    </div>
    <div class="staff-name">aniiwoww</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/8a37f95d-472e-45c2-8f06-bb0e59ef9bc7?size=400" alt="Bruno0929" />
    </div>
    <div class="staff-name">Bruno0929</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/8bfc9600-be16-44f2-8f70-b9c8f28d2b6b?size=400" alt="RealDanTM" />
    </div>
    <div class="staff-name">RealDanTM</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/CharlesonCh?size=400" alt="CharlesonCh" />
    </div>
    <div class="staff-name">CharlesonCh</div>
  </div>
</div>

<!-- Community Team -->
<div class="group-title">Community Team</div>
<div class="staff-grid">
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/f3739447-1999-449f-8e9d-cf0a75f581f6?size=400" alt="MattIsOff" />
    </div>
    <div class="staff-name">MattIsOff</div>
  </div>
  <div class="staff-card">
    <div class="staff-bust-wrapper">
      <img class="staff-background" src="/img/staff-background.avif" />
      <img class="staff-bust" src="https://vzge.me/bust/333c54d7-7fa1-408a-8562-dce3b3358753?size=400" alt="Flnb" />
    </div>
    <div class="staff-name">Flnb</div>
  </div>
</div>