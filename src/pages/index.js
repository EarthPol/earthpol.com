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
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  // Use base URLs for assets
  const bgLight = useBaseUrl('/img/day_ultra.webp');
  const bgDark = useBaseUrl('/img/night_ultra.webp');
  const videoSrc = useBaseUrl('/img/slideshow.mp4');

  // Initialize showIntro from localStorage once, SSR safe
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false; // No intro in SSR
    return !localStorage.getItem('hasSeenIntro');
  });

  const [step, setStep] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!showIntro) {
      // If user has already seen intro, skip animation steps immediately
      setStep(5);
      return;
    }

    localStorage.setItem('hasSeenIntro', 'true');

    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }

    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3500),
      setTimeout(() => setStep(4), 6500),
      setTimeout(() => setStep(5), 7500),
      setTimeout(() => setShowIntro(false), 8500),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, [showIntro]);

  // Set background image inline style dynamically
  const backgroundImage = `url(${isDarkTheme ? bgDark : bgLight})`;

  return (
    <>
      <header
        className={styles.heroBanner}
        style={{ backgroundImage }}
      >
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

      {/* Render intro only if user has NOT seen it */}
      {showIntro && step < 5 && (
        <div
          className={clsx(
            styles.introContainer,
            step >= 5 && styles.introFadeOut
          )}
        >
          <div className={styles.backgroundVideoWrapper}>
            <video
              ref={videoRef}
              className={styles.backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
              src={videoSrc}
            />
            <div
              className={clsx(
                styles.fadeToBlackOverlay,
                step >= 4 && styles.visible
              )}
            />
          </div>
          <div className={styles.textContainer}>
            <h2
              className={clsx(
                styles.thisIs,
                step >= 1 && styles.visible,
                step >= 2 && styles.thisIsMoved,
                step >= 3 && styles.thisIsFadeOut
              )}
            >
              THIS IS
            </h2>

            <h1
              className={clsx(
                styles.earthpol,
                step >= 2 && styles.visible,
                step >= 4 && styles.earthpolScaledDown
              )}
            >
              EARTHPOL
            </h1>
          </div>
        </div>
      )}
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