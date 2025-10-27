import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import ServerStatus from '@site/src/components/ServerStatus';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  // ── Declare all hooks unconditionally ─────────────────────────────
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const bgLight = useBaseUrl('/img/light_map.avif');
  const bgDark = useBaseUrl('/img/dark_map.avif');

  // ── Hydration guard ────────────────────────────────────────────────
  useEffect(() => {
    setMounted(true);
  }, []);

// ── Mouse parallax effect ──────────────────────────────────────────
useEffect(() => {
  if (!mounted || typeof window === 'undefined') return;

  const heroBanner = document.querySelector(`.${styles.heroBanner}`);
  if (!heroBanner) return;

  // Define your base position here
  const baseX = 50;   // Horizontal center (percentage)
  const baseY = 20;   // Your original vertical position (percentage)

  const maxDrift = 5; // Small drift range in %

  const handleMouseMove = (e) => {
    const rect = heroBanner.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;   // 0 to 1 inside heroBanner
    const y = (e.clientY - rect.top) / rect.height;   // 0 to 1 inside heroBanner

    const moveX = baseX + (x - 0.5) * maxDrift * 1.3;
    const moveY = baseY + (y - 0.5) * maxDrift * 1.3;

    heroBanner.style.backgroundPosition = `${moveX}% ${moveY}%`;
  };

  const handleMouseLeave = () => {
    // Snap back to base position when cursor leaves
    heroBanner.style.backgroundPosition = `${baseX}% ${baseY}%`;
  };

  heroBanner.addEventListener('mousemove', handleMouseMove);
  heroBanner.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    heroBanner.removeEventListener('mousemove', handleMouseMove);
    heroBanner.removeEventListener('mouseleave', handleMouseLeave);
  };
}, [mounted]);

  // ── Prevent SSR flash ──────────────────────────────────────────────
  if (!mounted) {
    return null;
  }

  const backgroundImage = `url(${isDarkTheme ? bgDark : bgLight})`;

  return (
    <>
      <header className={styles.heroBanner} style={{ backgroundImage }}>
        <div
          className={clsx(
            styles.mainHero,
            (step >= 5 || !showIntro) && styles.mainHeroVisible
          )}
        >
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <div className={styles.subtitleWrapper}>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.gradientButton
              )}
              to="/docs/Getting Started/HowToJoin"
            >
              IP: PLAY.EARTHPOL.COM
            </Link>
            <div className={styles.serverStatusWrapper}>
              <ServerStatus />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The Ultimate Geopolitical Minecraft Server"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}