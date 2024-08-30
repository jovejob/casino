import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './GameCard.module.css';

export interface ICategory {
  id: string;
  title: string;
  type: string;
}

// from types.ts
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
  cats: ICategory[];
}

const GameCard: React.FC<IGameCard> = ({
  name,
  provider_title,
  icon_2,
  icon_3,
  background,
  status,
  provider,
  show_as_provider,
  title,
}) => {
  // some images were not loading so we needed a handler
  const [bgImage, setBgImage] = useState(
    background || icon_3 || icon_2 || '/time-cat.jpg'
  );
  const [iconImage, setIconImage] = useState(
    icon_2 || icon_3 || '/time-cat.jpg'
  );

  const handleBgError = () => {
    setBgImage('/time-cat.jpg'); // Fallback background image path
  };

  const handleIconError = () => {
    setIconImage('/time-cat.jpg'); // Fallback background image path
  };

  // Construct URL slug for the game
  const gameSlug = (title || name).toLowerCase().replace(/\s+/g, '-'); // Example URL slug

  return (
    <Link href={`/games/${gameSlug}`}>
      <a className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <Image
              src={bgImage}
              alt={`${name} Icon`}
              className={styles.card__image}
              width="600"
              height="400"
              onError={handleBgError} // Handle background image error
            />
          </div>
          <div className={styles.card__body}>
            <span className={`${styles.tag} ${styles['tag-blue']}`}>
              {title || name}
            </span>
            <h4>{title}</h4>
            <p>{provider_title}</p>
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
      </a>
    </Link>
  );
};

export default GameCard;
