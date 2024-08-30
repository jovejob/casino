import { GetServerSidePropsContext } from 'next';
import React from 'react';
import database from '../../../lib/search/data.json';
import { IPaginatedGames } from '../../../lib/search/types';
import GameListCard from '../gameList/GameListCard';
import styles from './PaginatedGamesCard.module.css';

export interface IPaginatedGamesCard {
  id: string;
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

const PaginatedGamesCard: React.FC<IPaginatedGames> = ({
  games,
  currentPage,
  totalPages,
}) => {
  return (
    <div>
      <h1 className={`${styles.tag} ${styles['tag-blue']}`}>All Games</h1>

      <GameListCard gameCards={games} />

      {/* todo move to its own utility or extract a pagination component(paginate on scroll) */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <a
            key={i}
            href={`/?page=${i + 1}`}
            className={`w-10 h-10 flex items-center justify-center text-sm rounded-md border ${
              i + 1 === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

// Fetch data based on page number (todo move to a service/utility function )
export const fetchGamesData = (context: GetServerSidePropsContext) => {
  const page = context.query.page
    ? parseInt(context.query.page as string, 10)
    : 1;
  const pageSize = 10; // Number of games per page

  const totalGames = database.length;
  const totalPages = Math.ceil(totalGames / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const games: IPaginatedGamesCard[] = database
    .slice(startIndex, endIndex)
    .map((game) => ({
      id: game.id,
      name: game.name,
      provider_title: game.provider_title,
      icon_2: game.icon_2,
      icon_3: game.icon_3 || '',
      background: game.background || '',
      status: game.status,
      provider: game.provider,
      show_as_provider: game.show_as_provider,
      title: game.title,
    }));

  return {
    games,
    currentPage: page,
    totalPages,
  };
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = fetchGamesData(context);

  return {
    props: {
      ...data,
    },
  };
};

export default PaginatedGamesCard;
