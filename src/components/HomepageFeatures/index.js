import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'QuickShop',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        QuickShop allows for players to create their own shops to sell and buy items, creating a player-driven economy.
      </>
    ),
  },
  {
    title: 'Towny',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With Towny, players can create their own towns, nations, and simualte diplomacy.
      </>
    ),
  },
  {
    title: 'BlueMap',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A 3D-fully interactive map that allows players to view their town from above.
      </>
    ),
  },
  {
    title: 'Custom Plugins',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With custom innovative plugins like TradeWar, our server is setting higher standards while providing new gameplay mechanics.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

