import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'QuickShop',
    link: '/docs/Economy & Trade/QuickShopOverView',
    Svg: () => <img src="/img/chest.webp" alt="Chest" style={{ height: 100 }} />,
    description: (
      <>
        QuickShop allows for players to create their own shops to sell and buy items, creating a player-driven economy.
      </>
    ),
  },
  {
    title: 'Towny',
    link: '/docs/Towny/Basic/TownyOverview',
    Svg: () => <img src="/img/compassitem.webp" alt="Map" style={{ height: 100 }} />,
    description: (
      <>
        With Towny, players can create their own towns, nations, and simulate diplomacy.
      </>
    ),
  },
  {
    title: 'BlueMap',
    link: '/features/bluemap',
    Svg: () => <img src="/img/mapitem.webp" alt="Compass" style={{ height: 100 }} />,
    description: (
      <>
        A 3D-fully interactive map that allows players to view their town from above.
      </>
    ),
  },
  {
    title: 'Custom Plugins',
    link: 'docs/War & Diplomacy/TradeWar',
    Svg: () => <img src="/img/goldingotitem.webp" alt="Gold Ingot" style={{ height: 100 }} />,
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
    imageFirst: true,
  },
  {
    title: 'Building',
    image: require('@site/static/img/building.png').default,
    description: 'On EarthPol, you can build your town knowing that builds will be preserved. We take great pride in the integrity of our build preservation system. With hourly backups and thorough CoreProtect logs, we ensure that every structure you build and every item you store is safeguarded with care. Our system is designed to offer peace of mind, knowing that your builds are not only protected but consistently preserved. Whether it is a towering skyscraper or a small town, we prioritize the security of your creations, making sure they are never lost.',
    imageFirst: false,
  },
  {
    title: 'Diplomacy',
    image: require('@site/static/img/diplomacy.png').default,
    description: 'Diplomacy plays a crucial role in shaping EarthPol. With the TradeWar plugin, players can engage in economic warfare, using trade and resources to outmaneuver rivals and establish dominance. Towny adds another layer by allowing players to create towns and nations, simulating real-world geopolitical dynamics. Beyond the server, our Discord community is where players can connect, forge alliances, and prepare for conflicts. Whether it is negotiating treaties, forming coalitions, or preparing for future battles, EarthPol offers a robust platform for players to experience the intricacies of diplomacy in a dynamic, interactive world.',
    imageFirst: true,
  },
  {
    title: 'Combat',
    image: require('@site/static/img/SiegeCover.png').default,
    description: 'Combat in EarthPol is designed to be both fair and exciting, with a focus on strategy and teamwork. We’ve carefully analyzed and balanced combat mechanics to ensure that each battle is engaging and rewarding, regardless of your experience level. The SiegeWar plugin enhances the experience by allowing players to launch epic sieges, where towns and nations can go head-to-head in large-scale warfare. With an emphasis on tactics and coordination, players must plan their attacks, defend their territories, and make use of both offense and defense to secure victory. EarthPol strives to create an environment where combat remains fun and competitive, encouraging collaboration while maintaining fairness for all players involved.',
    imageFirst: false,
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--3', 'feature-item')}>
      <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

function Screenshot({ image, title, description, imageFirst }) {
  return (
    <div className="row" style={{ marginBottom: '30px' }}>
      {imageFirst ? (
        <>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              style={{ borderRadius: '25px' }}
            />
          </div>
          <div className="col col--6">
            <Heading as="h3" style={{ fontSize: '2.5em' }}>{title}</Heading>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="col col--6">
            <Heading as="h3" style={{ fontSize: '2.5em' }}>{title}</Heading>
            <p>{description}</p>
          </div>
          <div className="col col--6">
            <img
              src={image}
              alt={title}
              className={styles.screenshotImage}
              style={{ borderRadius: '25px' }}
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

{/* Horizontal Line before Discord */}
<hr className="horizontalLine" />

{/* Discord Widget Section */}
<section className={styles.discordSection} style={{ textAlign: 'center', marginBottom: '50px' }}>
  <Heading as="h1" style={{ marginBottom: '30px' }}>Join Our Community</Heading>
  <div
    className="row"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
    }}
  >
    {/* Left Image */}
    <div className="col col--4" style={{ textAlign: 'center' }}>
      <img
        src={require('@site/static/img/community.png').default}
        alt="Diplomacy"
        style={{
          height: '500px',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
    </div>

    {/* Discord Widget */}
    <div className="col col--4" style={{ textAlign: 'center' }}>
      <iframe
        src="https://discord.com/widget?id=1204204837483446353&theme=dark"
        width="100%"
        height="500"
        allowTransparency="true"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{
          borderRadius: '12px',
        }}
      ></iframe>
    </div>
  </div>
</section>
    </>
  );
}