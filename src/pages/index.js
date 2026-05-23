import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ServerStatus from '@site/src/components/ServerStatus';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

const V7_WORLD_DOWNLOAD_URL = 'https://cdn.earthpol.com/downloads/world-v7.zip';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
      <>
        {/* Preload primary desktop hero to speed LCP */}
        <Head>
          <link
            rel="preload"
            as="image"
            href="/img/day_desktop.webp"
            imageSrcSet="/img/day_mobile.webp 768w, /img/day_tablet.webp 1280w, /img/day_desktop.webp 1920w, /img/day_large.webp 2560w, /img/day_ultra.webp 3840w"
            imageSizes="100vw"
          />
        </Head>

        <header className={styles.heroBanner}>
          {/* Background image as real <img> so it becomes LCP and is trackable */}
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/day_mobile.webp" />
            <source media="(max-width: 1280px)" srcSet="/img/day_tablet.webp" />
            <source media="(max-width: 1920px)" srcSet="/img/day_desktop.webp" />
            <source media="(max-width: 2560px)" srcSet="/img/day_large.webp" />
            {/* Fallback to ultra for very large screens */}
            <img
                className={styles.heroBgImg}
                src="/img/day_ultra.webp"
                alt=""
                role="presentation"
                decoding="async"
                loading="eager"
                fetchpriority="high"
            />
          </picture>

          {/* Optional soft overlay to improve text contrast */}
          <div className={styles.heroOverlay} />

          <div className={clsx(styles.mainHero, styles.mainHeroVisible)}>
            <p className={styles.heroEyebrow}>End of an Era</p>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <div className={styles.subtitleWrapper}>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <p className={styles.heroMessage}>
              Version 7, Astra, is closing its doors. The world is entering its final spectator period so players can revisit what they built, preserve schematics, and download the map before EarthPol returns with Version 8 in 2027.
            </p>
            <div className={styles.heroMeta}>
              <span>V7 Astra archive</span>
              <span>Version 8 planned for 2027</span>
            </div>
            <div className={styles.buttons}>
              <Link
                  className={clsx('button', 'button--primary', 'button--lg')}
                  to="/docs/support/Downloads"
              >
                V7 Downloads
              </Link>
              <Link
                  className={clsx('button', 'button--secondary', 'button--lg')}
                  to={V7_WORLD_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Download World
              </Link>
              <div className={styles.serverStatusWrapper}>
                <span className={styles.spectatorIp}>Spectator IP: PLAY.EARTHPOL.COM</span>
                <ServerStatus />
              </div>
            </div>
          </div>
        </header>
      </>
  );
}

function V7ClosureAnnouncement() {
  return (
      <section className={styles.announcementSection}>
        <div className="container">
          <div className={styles.announcementHeader}>
            <p className={styles.sectionEyebrow}>Version 7 Closure</p>
            <h2>Thank you for building Astra</h2>
            <p>
              Version 7 was built by many people who cared deeply about what they were creating. We are proud of what was accomplished over the past year, and we especially thank 0xBit for the immense amount of work he contributed throughout this era of EarthPol.
            </p>
          </div>

          <div className={styles.announcementGrid}>
            <article className={styles.announcementCard}>
              <h3>Final V7 Access</h3>
              <p>
                Astra will remain available in spectator mode during the closing period so players can explore the world one final time, preserve schematics, and revisit the history built there.
              </p>
              <p>
                <strong>IP:</strong> <code>play.earthpol.com</code>
              </p>
            </article>

            <article className={styles.announcementCard}>
              <h3>Map Archive</h3>
              <p>
                The full V7 world download is available now for players who want to keep a copy of Astra.
              </p>
              <Link
                  className={styles.textLink}
                  to={V7_WORLD_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Download world-v7.zip
              </Link>
              <span className={styles.downloadSize}>224.4GB</span>
            </article>

            <article className={styles.announcementCard}>
              <h3>Version 8</h3>
              <p>
                EarthPol will return in 2027. There is no scheduled release date yet, and development will take the time needed to build something lasting.
              </p>
              <p>
                Expect regular updates, roadmaps, surveys, Q&As, and more community involvement as the next version takes shape.
              </p>
            </article>
          </div>
        </div>
      </section>
  );
}

export default function Home() {
  return (
      <Layout
          title="Version 7 Closure"
          description="EarthPol Version 7, Astra, is closing its doors. Download the V7 world archive and follow development toward Version 8 in 2027."
      >
        <HomepageHeader />
        <main>
          <V7ClosureAnnouncement />
          <HomepageFeatures />
        </main>
      </Layout>
  );
}
