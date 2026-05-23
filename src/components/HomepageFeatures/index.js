import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'QuickShop',
    link: '/docs/economy-trade/QuickShopOverView',
    Svg: () => <img src="/img/chest.webp" alt="Chest" style={{ height: 100 }} />,
    description: (
      <>
        QuickShop helped players build markets, trade routes, and local economies throughout Astra.
      </>
    ),
  },
  {
    title: 'Towny',
    link: '/docs/towny/TownyOverview',
    Svg: () => <img src="/img/compassitem.webp" alt="Compass" style={{ height: 100 }} />,
    description: (
      <>
        Towny shaped the towns, nations, borders, and diplomacy that defined Version 7.
      </>
    ),
  },
  {
    title: 'BlueMap',
    link: 'https://earthpol.com/map/#world:0:0:0:32172:0:0:0:1:flat',
    Svg: () => <img src="/img/mapitem.webp" alt="Map" style={{ height: 100 }} />,
    description: (
      <>
        Explore Astra from above and revisit the geography behind its final political landscape.
      </>
    ),
  },
  {
    title: 'Custom Plugins',
    link: '/docs/war-diplomacy/TradeWar',
    Svg: () => <img src="/img/goldingotitem.webp" alt="Gold Ingot" style={{ height: 100 }} />,
    description: (
      <>
        Systems like TradeWar helped define V7's economy, conflict, and player-driven history.
      </>
    ),
  },
];

const ScreenshotList = [
  {
    title: '1:326 Map',
    image: '/img/epolmap-frontpage.avif',
    description: 'Astra used EarthPol\'s custom-made 1:326 Earth map, with real-world geography, rivers, and landscapes serving as the foundation for a year of geopolitical history.',
    imageFirst: true,
  },
  {
    title: 'Building',
    image: '/img/building-frontpage.avif',
    description: 'From small towns to major capitals, Version 7 was defined by the builders who turned the map into a lived-in world. The archive exists so those creations can continue to be preserved.',
    imageFirst: false,
  },
  {
    title: 'Diplomacy',
    image: '/img/diplomacy-frontpage.avif',
    description: 'Treaties, alliances, sanctions, trade disputes, and statecraft shaped Astra\'s political landscape from launch through its final days.',
    imageFirst: true,
  },
  {
    title: 'War & Combat',
    image: '/img/siegecover-frontpage.avif',
    description: 'SiegeWar, bounties, and organized PvP created many of V7\'s defining conflicts. Those battles now stand as part of the Astra record.',
    imageFirst: false,
  },
];

const stewards = [
  {
    name: 'Synistor',
    role: 'Staff and server management',
  },
  {
    name: 'Bustun',
    role: 'Development and server architecture',
  },
  {
    name: 'MrTytanic',
    role: 'Content creation and public relations',
  },
];

function Stewardship() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Continued Stewardship</Heading>
            <p className={styles.testimonialBlurb}>
              As EarthPol moves toward Version 8, stewardship of the project will be shared across server management, development, architecture, public relations, and community communication. More details will come as the 2027 version takes shape.
            </p>
          </div>

          <div className="col col--6">
            <div className={styles.stewardshipGrid}>
              {stewards.map((steward) => (
                <div key={steward.name} className={styles.stewardshipCard}>
                  <Heading as="h3">{steward.name}</Heading>
                  <p>{steward.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Existing Feature & Screenshot components
function Feature({ Svg, title, description, link }) {
  const isExternalLink = /^https?:\/\//.test(link);

  return (
    <div className={clsx('col col--3', 'feature-item')}>
      <Link
        to={link}
        style={{ textDecoration: 'none', color: 'inherit' }}
        {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h2">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function Screenshot({ image, title, description, imageFirst }) {
  return (
    <div className="row" style={{ marginBottom: '60px' }}>
      {imageFirst ? (
        <>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '25px' }}
            />
          </div>
          <div className="col col--6">
            <Heading as="h2" style={{ fontSize: '3.5em' }}>{title}</Heading>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="col col--6">
            <Heading as="h2" style={{ fontSize: '3.5em' }}>{title}</Heading>
            <p>{description}</p>
          </div>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '25px' }}
            />
          </div>
        </>
      )}
    </div>
  );
}

// ✅ Full Homepage
export default function HomepageFeatures() {
  return (
    <>
      <hr className="horizontalLine" />

      {/* Feature Section */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <hr className="horizontalLine" />

      {/* Screenshot Section */}
      <section className={styles.screenshots} style={{ marginBottom: '50px' }}>
        <div className="container">
          <div className="row">
            {ScreenshotList.map((props, idx) => (
              <Screenshot key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <hr className="horizontalLine" />

      <Stewardship />

      <hr className="horizontalLine" />
    </>
  );
}
