import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

const V7_WORLD_DOWNLOAD_URL = 'https://cdn.earthpol.com/downloads/world-v7.zip';

const serverOptions = [
  {
    title: 'EarthMC',
    tags: ['Toxic', 'Pay-To-Win', 'Doxxers', 'Harassment'],
    image: '/img/background-image-of-minecraft-earth-8447d0442bc3c638b614681f412e6c74.webp',
    href: 'https://discord.com/invite/HyKnfFDTPD',
    description:
      'EarthMC opened with a two-week Premium-only window, allowing paying players to claim towns before the wider community had access. Now they sell a Premium Egg that can be traded for gold, turning real-money purchases into direct in-game advantage. What does the EULA even mean anymore?',
  },
  {
    title: 'Crusalis',
    tags: ['Geopol', 'Custom Nodes', 'Historical Iterations', 'Feature Rich'],
    image: '/img/f10d9866fbbdf69a01e48c078180aca691b426efheaderbg.webp',
    href: 'https://discord.com/invite/crusalis',
    description:
      'Crusalis is a feature-rich geopolitical server built around a custom nodes system instead of Towny. Its iterations usually run for one to three months, moving through historical settings like Greek history, World War II, and now Rome.',
  },
  {
    title: 'Borderra',
    tags: ['New Geopol', 'EarthPol Inspired', 'Independent', 'Fresh Start'],
    image: '/img/v3image.avif',
    href: 'https://discord.gg/JhfCXhhFz',
    description:
      'Borderra is a new geopolitical server aiming to carry forward the kind of player-driven worldbuilding EarthPol was known for. It is not another direct clone, and appears to be led by a capable owner who explored acquiring EarthPol before being encouraged to build an independent server instead.',
  },
  {
    title: 'Stoneworks',
    tags: ['Roleplay Rich', 'Long Standing', 'Deep Lore', 'High Commitment'],
    image: '/img/lmfoyn.png',
    href: 'https://discord.com/invite/QhdhgbrF7F',
    description:
      'Stoneworks is a long-running roleplay server with a massive community and years of worldbuilding behind it. It can be difficult to get into, but it is a strong recommendation for players who want the deepest roleplay commitment.',
  },
];

function VersionClosureModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalLayer} role="presentation">
      <div
        className={styles.modalBackdrop}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />
      <section
        className={styles.closureModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="v7-closure-title"
      >
        <p className={styles.modalEyebrow}>End of an Era</p>
        <h1 id="v7-closure-title">Version 7 Has Ended</h1>
        <p>
          Version 7, Astra, has closed its doors. The world is entering its final archive period so players can revisit what they built, preserve schematics, and download the map before EarthPol returns with Version 8 in 2027.
        </p>
        <div className={styles.modalActions}>
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
          <button
            className={clsx('button', 'button--outline', 'button--lg', styles.closeAction)}
            type="button"
            onClick={() => setIsOpen(false)}
          >
            View Servers
          </button>
        </div>
      </section>
    </div>
  );
}

function ServerSelector() {
  return (
    <main className={styles.serverSelection} aria-label="Server selection">
      {serverOptions.map((server) => (
        <a
          className={styles.serverPanel}
          href={server.href}
          target="_blank"
          rel="noopener noreferrer"
          key={server.title}
        >
          <img className={styles.serverImage} src={server.image} alt="" />
          <span className={styles.panelShade} aria-hidden="true" />
          <span className={styles.serverContent}>
            <span className={styles.serverTitle}>{server.title}</span>
            <span className={styles.serverTags}>
              {server.tags.map((tag) => (
                <span className={styles.serverTag} key={tag}>
                  {tag}
                </span>
              ))}
            </span>
            <span className={styles.serverDescription}>{server.description}</span>
            <span className={styles.serverCta}>Open Discord</span>
          </span>
        </a>
      ))}
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Choose Another Server"
      description="Version 7 has ended. Choose another server community to visit while EarthPol prepares Version 8."
      noFooter
    >
      <Head>
        {serverOptions.map((server) => (
          <link rel="preload" as="image" href={server.image} key={server.image} />
        ))}
      </Head>
      <ServerSelector />
      <VersionClosureModal />
    </Layout>
  );
}
