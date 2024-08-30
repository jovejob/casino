import React from 'react';
import { IGameCard } from '../../../lib/search/types';
import GameCard from '../game/GameCard';

export interface IGameListCard {
  gameCards: IGameCard[];
}

const GameListCard: React.FC<IGameListCard> = ({ gameCards }) => {
  return (
    <section className="wrapper p-4">
      <div className="inside-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {gameCards.length > 0 ? (
          gameCards.map((card, idx) => (
            <GameCard
              key={idx}
              name={card.name}
              provider_title={card.provider_title}
              icon_2={card.icon_2}
              icon_3={card.icon_3}
              background={card.background}
              status={card.status}
              provider={card.provider}
              show_as_provider={card.show_as_provider}
              title={card.title ?? null} // Ensure title is never undefined
              cats={[]}
            />
          ))
        ) : (
          <p>No game cards available.</p>
        )}
      </div>
    </section>
  );
};

export default GameListCard;
