import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const POPULAR_GUIDES = [
  { title: 'Server Rules', to: '/docs/support/ServerRules/' },
  { title: 'Custom Recipes', to: '/docs/economy-trade/custom-recipes/' },
  { title: 'McMMO Guide', to: '/docs/McmmoOverview/' },
  { title: 'SiegeWar Guide', to: '/docs/war-diplomacy/SiegeWar/' },
  { title: 'TradeWar Guide', to: '/docs/war-diplomacy/TradeWar' },
  { title: 'Starter Guide', to: '/docs/getting-started/StarterGuide' },
];

export default function NotFoundContent() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.errorCode}>Error 404 · Page Not Found</p>
        <Heading as="h1" className={styles.title}>
          This page is gone.
        </Heading>
        <p className={styles.description}>
          We looked everywhere, but this URL doesn&apos;t exist on EarthPol. It may
          have been moved, deleted, or never existed in the first place.
        </p>

        <p className={styles.hint}>
          Try going back to the home page, opening the docs hub, or jumping
          straight into one of the popular guides below.
        </p>

        <div className={styles.primaryActions}>
          <Link className="button button--primary button--lg" to="/">
            Return to Home
          </Link>
          <Link className="button button--secondary button--lg" to="/docs">
            Open Docs Hub
          </Link>
        </div>

        <section className={styles.guidesSection} aria-label="Popular guides">
          <Heading as="h2" className={styles.guidesHeading}>
            Popular Guides
          </Heading>
          <div className={styles.guidesGrid}>
            {POPULAR_GUIDES.map((guide) => (
              <Link key={guide.to} className={styles.guideButton} to={guide.to}>
                {guide.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
