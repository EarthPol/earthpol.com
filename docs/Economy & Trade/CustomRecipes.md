---
title: Custom Recipes
---

# 🛠️ Custom Recipes

## 🪓 Item & Block Recipes

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
  {Array.from({ length: 31 }).map((_, i) => (
    <img
      key={i}
      src={`/img/Recipes/crafting-grid${i === 0 ? '' : `-${i}`}.png`}
      alt={`Crafting Recipe ${i}`}
      style={{ width: '192px', height: '192px', objectFit: 'contain' }}
    />
  ))}
</div>


---

## 🛡️ Armor Trim Recipes

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>

  {[
    "dune", "coast", "wild", "ward", "eye", "vex", "tide",
    "snout", "spire", "rib", "wayfinder", "raiser", "shaper", "host"
  ].map((trim, i) => (
    <img
      key={i}
      src={`/img/trims/Custom_${trim}_trim.webp`}
      alt={`Custom ${trim} trim`}
      style={{ width: "192px", height: "192px", objectFit: "contain" }}
    />
  ))}

</div>

:::tip

To view what armor trims look like, check out this free website 👉 [armortrims.com](https://www.armortrims.com)

:::