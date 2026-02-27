---
id: index
title: EarthPol Guide
description: "Official EarthPol documentation hub covering getting started, Towny, economy, warfare, support, and server guides."
slug: /
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import React, { useState, useEffect, useRef } from 'react';

<div style={{ textAlign: 'center', marginBottom: '1rem' }}>
  # Welcome to the EarthPol Guide!
</div>

<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '2rem'
}}>
  <p style={{ maxWidth: '700px' }}>
    Welcome to the official EarthPol guide! This page is your central hub for learning how to
    navigate the server, including Towny, warfare, diplomacy, and the player economy.
  </p>

  <SearchGuides />
</div>

---

{/* React Search Component */}
export function SearchGuides() {
  const guides = [
    { title: "Server Overview", url: "/docs/getting-started/ServerOverview" },
    { title: "How To Join", url: "/docs/getting-started/HowToJoin" },
    { title: "Starter Guide", url: "/docs/getting-started/StarterGuide" },
    { title: "Map", url: "/docs/getting-started/map" },
    { title: "Towny Overview", url: "/docs/towny/TownyOverview" },
    { title: "Towns", url: "/docs/towny/Basic/Towns" },
    { title: "Nations", url: "/docs/towny/Basic/Nations" },
    { title: "Nomads", url: "/docs/towny/Basic/Nomads" },
    { title: "Towny Commands", url: "/docs/towny/townycommands" },
    { title: "Plot Permissions", url: "/docs/towny/Advanced/PlotPerms" },
    { title: "Quarters", url: "/docs/towny/Advanced/Quarters" },
    { title: "Towny Permissions", url: "/docs/towny/Advanced/TownyPermissions" },
    { title: "Custom Recipes", url: "/docs/economy-trade/custom-recipes" },
    { title: "Gold Economy", url: "/docs/economy-trade/GoldEconomy" },
    { title: "QuickShop Overview", url: "/docs/economy-trade/QuickShopOverView" },
    { title: "Towny Ports", url: "/docs/economy-trade/TownyPorts" },
    { title: "Transportation", url: "/docs/economy-trade/Transportation" },
    { title: "TradeWar Guide", url: "/docs/war-diplomacy/TradeWar" },
    { title: "SiegeWar Guide", url: "/docs/war-diplomacy/SiegeWar" },
    { title: "Diplomacy", url: "/docs/war-diplomacy/Diplomacy" },
    { title: "Headhunters Guide", url: "/docs/war-diplomacy/Headhunters" },
    { title: "McMMO Overview", url: "/docs/McmmoOverview" },
    { title: "API", url: "/docs/api" },
    { title: "EarthPol Premium", url: "/docs/EarthPolPremium" },
    { title: "FlagsH", url: "/docs/plugins-custom-features/FlagsH" },
    { title: "Optimizations", url: "/docs/plugins-custom-features/Optimizations" },
    { title: "Server Rules", url: "/docs/support/ServerRules/" },
    { title: "Vote", url: "/docs/vote" },
    { title: "Bug Bounty", url: "/docs/bug-bounty" },
    { title: "Downloads", url: "/docs/support/Downloads" },
    { title: "EarthPol Staff", url: "/docs/support/EarthPolStaff" },
    { title: "FAQ", url: "/docs/support/FAQ" },
    { title: "Events", url: "/docs/events" }
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    setResults(guides.filter(g => g.title.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '500px', position: 'relative' }}>
      <input
        type="text"
        placeholder="Search guides..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #888',
          background: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
        }}
      />
      {results.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--ifm-background-color)',
          border: '1px solid #888',
          borderTop: 'none',
          borderRadius: '0 0 6px 6px',
          zIndex: 10,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {results.map((g, i) => (
            <div
              key={i}
              onClick={() => window.location.href = g.url}
              style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
            >
              {g.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  alignItems: 'stretch'
}}>

  {/* Popular Guides */}
  <div style={{ background: 'transparent', padding: '1rem', borderRadius: '12px', boxShadow: 'none' }}>
    <h2>📘 Popular Guides</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginTop: '1rem'
    }}>
      {[
        { title: "Server Rules", url: "/docs/support/ServerRules/" },
        { title: "Custom Recipes", url: "/docs/economy-trade/custom-recipes/" },
        { title: "McMMO Guide", url: "/docs/McmmoOverview/" },
        { title: "SiegeWar Guide", url: "/docs/war-diplomacy/SiegeWar/" },
        { title: "TradeWar Guide", url: "/docs/war-diplomacy/TradeWar" },
        { title: "Voting Sites", url: "/docs/vote" }
      ].map((btn, i) => (
        <Link
          key={i}
          className="button button--primary doc-button"
          style={{
            width: '100%',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '0.85rem',
            padding: '0.75rem',
            boxSizing: 'border-box'
          }}
          to={btn.url}
        >
          {btn.title}
        </Link>
      ))}
    </div>
  </div>

  {/* Video Playlist */}
  <div style={{ background: 'transparent', padding: '1rem', borderRadius: '12px', boxShadow: 'none' }}>
    <h2>🎥 Video Guide Playlist</h2>
    <div style={{ position: 'relative', paddingBottom: '70%', height: 0, marginTop: '1rem' }}>
      <iframe
        src="https://www.youtube.com/embed/videoseries?list=PLBeJyhIH7rhG86T224CAR5P9lQ6JOMevF"
        title="EarthPol Video Guides"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '8px' }}
        allowFullScreen
      ></iframe>
    </div>
  </div>

</div>

<style>{`
@media (max-width: 900px) {
  div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }

  div[style*="grid-template-columns: repeat(3, 1fr)"] {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 0.5rem !important;
  }

  .button.button--primary {
    width: 100% !important;
    box-sizing: border-box;
  }

  iframe {
    width: 100% !important;
    height: auto !important;
  }
}
`}</style>
