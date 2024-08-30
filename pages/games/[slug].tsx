import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import styles from '../../components/cards/game/GameCard.module.css';

// Define the type for game details
export interface IGameCard {
  name: string;
  provider_title: string;
  icon_2: string;
  icon_3?: string;
  background: string;
  status: string;
  provider: string;
  show_as_provider: string;
  title: string | null;
}

interface GameDetailsProps {
  game: IGameCard;
}

const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
  const {
    name,
    provider_title,
    icon_2,
    icon_3,
    background,
    status,
    provider,
    show_as_provider,
    title,
  } = game;

  // some images were not loading so we needed a handler
  const [bgImage, setBgImage] = React.useState(
    background || icon_3 || icon_2 || '/time-cat.jpg'
  );
  const [iconImage, setIconImage] = React.useState(
    icon_2 || icon_3 || '/time-cat.jpg'
  );

  const handleBgError = () => {
    setBgImage('/time-cat.jpg');
  };

  const handleIconError = () => {
    setIconImage('/time-cat.jpg');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={bgImage}
            alt={`${name} Background`}
            className={styles.card__image}
            width="600"
            height="400"
            onError={handleBgError}
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>
            {title || name}
          </span>
          <h4>{title}</h4>
          <p>{provider_title}</p>
          <p>{status}</p>
          <p>{provider}</p>
          <p>{show_as_provider}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src={iconImage}
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
              onError={handleIconError}
            />
            <div className={styles.user__info}>
              <h5>
                {provider} | {show_as_provider}
              </h5>
              <small>{status}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch paths for dynamic pages
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch list of game slugs to generate static paths
  const gameSlugs = ['game-1', 'game-2'];
  const paths = gameSlugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: 'blocking' };
};

// Fetch game details based on slug
export const getStaticProps: GetStaticProps = async () => {
  // const { slug } = context.params!;

  // Fetch game data based on slug
  const game = {
    name: 'Example Game',
    provider_title: 'Example Provider',
    icon_2: '/example-icon.png',
    icon_3: '/example-icon3.png',
    background: '/example-background.jpg',
    status: 'Active',
    provider: 'Example Provider',
    show_as_provider: 'Provider Show',
    title: 'Example Game Title',
  };

  return { props: { game } };
};

export default GameDetails;
