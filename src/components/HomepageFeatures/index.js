import React, { useState } from 'react';
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
    link: '/docs/Towny/TownyOverview',
    Svg: () => <img src="/img/compassitem.webp" alt="Map" style={{ height: 100 }} />,
    description: (
      <>
        With Towny, players can create their own towns, nations, and simulate diplomacy.
      </>
    ),
  },
  {
    title: 'BlueMap',
    link: 'https://earthpol.com/map/#world:0:0:0:32172:0:0:0:1:flat',
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
    description: 'Explore our custom-made EarthPol map, crafted with real-world geography at a detailed 1:326 scale. Natural features, rivers, and landscapes mirror reality, delivering a truly immersive geopolitical Minecraft experience.',
    imageFirst: true,
  },
  {
    title: 'Building',
    image: require('@site/static/img/building.png').default,
    description: 'Build with confidence on EarthPol. Our robust preservation system, featuring hourly backups and CoreProtect logs, guarantees your creations, from small towns to skyscrapers, are safe and secure.',
    imageFirst: false,
  },
  {
    title: 'Diplomacy',
    image: require('@site/static/img/diplomacy.png').default,
    description: 'Master the art of diplomacy with plugins like Towny and TradeWar, engaging in economic battles, alliances, and statecraft. Join our community on Discord to negotiate treaties and shape the dynamic political landscape of EarthPol.',
    imageFirst: true,
  },
  {
    title: 'War & Combat',
    image: require('@site/static/img/SiegeCover.png').default,
    description: 'Experience strategic, balanced combat powered by SiegeWar. Coordinate epic sieges, defend territories, and lead your nation to victory in fair, team-focused PvP warfare designed for all skill levels. Alternatively, place bounties on your political enemies with our custom bounty plugin.',
    imageFirst: false,
  },
];

// ✅ Testimonials Component
const testimonials = [
  {
    text: "Earthpol is one of the few geopolitical servers that genuinely puts the player experience first [...] with an active community and a staff team that listens, players can easily request changes to the server and vote on other propositions to help form an experience that meets the needs of all.",
    author: "8set, Mayor of Ramsar",
  },
  {
    text: "The most immersive minecraft experience I’ve ever been part of, to play on earth and for it to be so accurate is unparalleled. Actual competent staff, REAL WARS, and events make the server even more compelling. Quit your job to play earthpol full-time and you’ll hold zero regrets",
    author: "ConsulAugustus, Leader of the Roman Republic",
  },
  {
    text: "A great Minecraft server and experience to try, its got some fun interesting sieges and large battles battles with lots of people and communities to interact with. A genuinely fun experience you should try, especially with a couple of friends.",
    author: "Noks__, Prime Minister of Australia",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className="row">
          {/* Left Blurb */}
          <div className="col col--6">
            <Heading as="h1">Committed to Player Satisfaction</Heading>
            <p className={styles.testimonialBlurb}>
              See what our players have to say about their EarthPol adventures. From first-time settlers to veteran nation leaders, players shape this world with cities, wars, and alliances while our dedicated team works behind the scenes to keep every journey immersive and fair. Read their stories and see why EarthPol is the trusted home for builders, diplomats, and conquerors alike.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="col col--6">
            <div className={styles.carouselContainer}>
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={styles.testimonialSlide}>
                    <p>"{testimonial.text}"</p>
                    <p><strong>- {testimonial.author}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.carouselButtons}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={activeIndex === index ? styles.active : ''}
                >
                  ●
                </button>
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
    <div className="row" style={{ marginBottom: '60px' }}>
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
            <Heading as="h3" style={{ fontSize: '3.5em' }}>{title}</Heading>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="col col--6">
            <Heading as="h3" style={{ fontSize: '3.5em' }}>{title}</Heading>
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

      {/* ✅ Testimonials Section */}
      <Testimonials />

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