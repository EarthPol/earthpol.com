---
title: Custom Recipes
---

# 🛠️ Custom Recipes

## 🪓 Item & Block Recipes

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>

  {Array.from({ length: 30 }, (_, i) => (
    <img
      key={i}
      src={`/img/recipes/crafting-grid-${i + 1}.png`}
      alt={`Crafting Recipe ${i + 1}`}
      style={{ width: "192px", height: "192px", objectFit: "contain" }}
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