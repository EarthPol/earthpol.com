import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'QuickShop',
    link: '/docs/Economy & Trade/QuickShopOverView',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        QuickShop allows for players to create their own shops to sell and buy items, creating a player-driven economy.
      </>
    ),
  },
  {
    title: 'Towny',
    link: '/docs/Towny/Basic/TownyOverview',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With Towny, players can create their own towns, nations, and simulate diplomacy.
      </>
    ),
  },
  {
    title: 'BlueMap',
    link: '/features/bluemap',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A 3D-fully interactive map that allows players to view their town from above.
      </>
    ),
  },
  {
    title: 'Custom Plugins',
    link: 'docs/War & Diplomacy/TradeWar',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With custom innovative plugins like TradeWar, our server is setting higher standards with new gameplay mechanics.
      </>
    ),
  },
];

const ScreenshotList = [
  {
    title: '1:326 Map',
    image: require('@site/static/img/epolmap.png').default,
    description: 'Our custom Earth map offers a unique and immersive gameplay experience. Handcrafted using real-world topographical and geographical data, the map brings an added layer of depth and realism to EarthPol, making geopolitics truly relevant. At a 1:326 scale, this map provides an impressive level of detail, meaning cities, rivers, coastlines, and mountain ranges closely resemble their real-world counterparts.',
    imageFirst: true,  // Image first
  },
  {
    title: 'Building',
    image: require('@site/static/img/building.png').default,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageFirst: false, // Text first
  },
  {
    title: 'Diplomacy',
    image: require('@site/static/img/banner.png').default,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageFirst: true,  // Image first
  },
  {
    title: 'War',
    image: require('@site/static/img/SiegeCover.png').default,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageFirst: false,  // Image first
  },
];

function Feature({ Svg, title, description, link }) {
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const headingStyles = {
    color: 'inherit',
    textDecoration: 'none',
  };

  const paragraphStyles = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div className={clsx('col col--3', 'feature-item')}>
      <a href={link} style={linkStyles}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" style={headingStyles}>{title}</Heading>
          <p style={paragraphStyles}>{description}</p>
        </div>
      </a>
    </div>
  );
}

function Screenshot({image, title, description, imageFirst}) {
  return (
    <div className="row" style={{ marginBottom: '30px' }}>
      {imageFirst ? (
        <>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              style={{ borderRadius: '25px' }} // Add borderRadius here
            />
          </div>
          <div className="col col--6">
          <Heading as="h3" style={{ fontSize: '2.5em' }} className={styles.screenshotTitle}>{title}</Heading> {/* Increased font-size */}
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="col col--6">
            <Heading as="h3" style={{ fontSize: '2.5em' }} className={styles.screenshotTitle}>{title}</Heading> {/* Increased font-size */}
            <p>{description}</p>
          </div>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              style={{ borderRadius: '25px' }} // Add borderRadius here
            />
          </div>
        </>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>

          {/* Horizontal Line */}
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

      {/* Horizontal Line */}
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
    </>
  );
}