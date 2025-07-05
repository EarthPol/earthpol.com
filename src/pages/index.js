import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ServerStatus from '@site/src/components/ServerStatus';

import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  return (
    <header
      className={clsx(
        styles.heroBanner,
        colorMode === 'dark' ? styles.heroBannerDark : styles.heroBannerLight
      )}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <div
          className={styles.subtitleWrapper}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            paddingBottom: '5px',
          }}
        >
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* ServerStatus removed from here */}
        </div>

        <div
          className={styles.buttons}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.gradientButton
            )}
            to="/docs/Getting Started/HowToJoin"
          >
            IP: PLAY.EARTHPOL.COM
          </Link>
          <ServerStatus />
        </div>
      </div>
    </header>
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