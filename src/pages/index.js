import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ServerStatus from '@site/src/components/ServerStatus';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
      <>
        {/* Preload primary desktop hero to speed LCP */}
        <Head>
          <link rel="preload" as="image" href="/img/day_desktop.webp" />
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
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <div className={styles.subtitleWrapper}>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className={styles.buttons}>
              <Link
                  className={clsx('button', 'button--secondary', 'button--lg')}
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
