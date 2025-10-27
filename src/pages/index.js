// src/pages/index.js
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import ServerStatus from '@site/src/components/ServerStatus';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isBrowser = useIsBrowser();
  const isDark = colorMode === 'dark';

  // After first paint, we add a class that enables transitions and heavier effects
  const [ready, setReady] = useState(false);

  const heroRef = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);
  const needFrameRef = useRef(false);
  const lastXYRef = useRef(null);

  const baseX = 50;
  const baseY = 20;
  const maxDrift = 5;

  // Mark ready right after first frame to keep first paint clean
  useEffect(() => {
    if (!isBrowser) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [isBrowser]);

  // Defer parallax to idle so it never blocks first paint
  useEffect(() => {
    if (!isBrowser || !heroRef.current) return;

    const reduce =
        window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ||
        window.navigator?.connection?.saveData;

    if (reduce) return;

    const enableParallax = () => {
      const el = heroRef.current;
      if (!el) return;

      const computeRect = () => {
        rectRef.current = el.getBoundingClientRect();
      };

      computeRect();
      const onResize = () => computeRect();

      const paint = () => {
        needFrameRef.current = false;
        const rect = rectRef.current;
        const last = lastXYRef.current;
        if (!rect || !last) return;

        const x = (last.x - rect.left) / rect.width;
        const y = (last.y - rect.top) / rect.height;
        const moveX = baseX + (x - 0.5) * maxDrift * 1.3;
        const moveY = baseY + (y - 0.5) * maxDrift * 1.3;

        el.style.backgroundPosition = `${moveX}% ${moveY}%`;
      };

      const onPointerMove = (e) => {
        lastXYRef.current = { x: e.clientX, y: e.clientY };
        if (!needFrameRef.current) {
          needFrameRef.current = true;
          rafRef.current = window.requestAnimationFrame(paint);
        }
      };

      const onPointerLeave = () => {
        lastXYRef.current = null;
        el.style.backgroundPosition = `${baseX}% ${baseY}%`;
      };

      el.addEventListener('pointermove', onPointerMove, { passive: true });
      el.addEventListener('pointerleave', onPointerLeave, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });

      return () => {
        el.removeEventListener('pointermove', onPointerMove);
        el.removeEventListener('pointerleave', onPointerLeave);
        window.removeEventListener('resize', onResize);
        if (rafRef.current != null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };
    };

    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
    const idleId = idle(() => enableParallax());

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, [isBrowser]);

  if (!isBrowser) return null;

  return (
      <>
        {/* Preload likely LCP background for each theme at desktop size */}
        <Head>
          <link
              rel="preload"
              as="image"
              href="/img/day_desktop.webp"
              media="(prefers-color-scheme: light)"
          />
          <link
              rel="preload"
              as="image"
              href="/img/night_desktop.webp"
              media="(prefers-color-scheme: dark)"
          />
        </Head>

        <header
            ref={heroRef}
            className={clsx(
                styles.heroBanner,
                isDark ? styles.heroBannerDark : styles.heroBannerLight,
                ready && styles.heroBannerReady
            )}
        >
          <div className={clsx(styles.mainHero, styles.mainHeroVisible)}>
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
