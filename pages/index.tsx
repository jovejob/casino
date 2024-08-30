// pages/index.tsx
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PaginatedGamesCard from '../components/cards/paginatedGames/PaginatedGamesCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import database from '../lib/search/data.json';
import { IPaginatedGames, IPaginatedGamesCard } from '../lib/search/types';
import { NextPageWithLayout } from './page';

// const categories = [
//   { id: '51', title: 'Video Slots' },
//   // Add more categories as needed
// ];

const Home: NextPageWithLayout<IPaginatedGames> = ({
  games,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  const { locale, query } = router;
  const selectedCategory = query.category as string;

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Search />
      {/* <div className="flex flex-wrap gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`border-2 px-4 py-2 rounded ${
              selectedCategory === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => router.push(`/?category=${category.id}`)}
          >
            {category.title}
          </button>
        ))}
      </div> */}
      <p>
        Translate in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>
      <PaginatedGamesCard
        games={games}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page
    ? parseInt(context.query.page as string, 10)
    : 1;
  const pageSize = 10;
  const category = context.query.category as string;

  const filteredDatabase = category
    ? database.filter((game) => game.cats.some((cat) => cat.id === category))
    : database;

  const totalGames = filteredDatabase.length;
  const totalPages = Math.ceil(totalGames / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const games: IPaginatedGamesCard[] = filteredDatabase
    .slice(startIndex, endIndex)
    .map((game) => ({
      id: game.id,
      name: game.name,
      provider_title: game.provider_title,
      icon_2: game.icon_2,
      background: game.background || '', // Ensure background is always a string
      status: game.status,
      provider: game.provider,
      show_as_provider: game.show_as_provider,
      title: game.title || '', // Ensure title is always a string
      cats: game.cats || [], // Ensure cats is always an array
    }));

  return {
    props: {
      games,
      currentPage: page,
      totalPages,
    },
  };
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

// import { GetServerSideProps } from 'next';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import PaginatedGamesCard from '../components/cards/paginatedGames/PaginatedGamesCard';
// import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
// import Search from '../components/utility/search/Search';
// import database from '../lib/search/data.json';
// import { IPaginatedGames, IPaginatedGamesCard } from '../lib/search/types';
// import { NextPageWithLayout } from './page';

// const Home: NextPageWithLayout<IPaginatedGames> = ({
//   games,
//   currentPage,
//   totalPages,
// }) => {
//   const { locale } = useRouter();

//   return (
//     <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
//       <Search />
//       <p>
//         Translate in:{' '}
//         <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
//           <a className="underline text-blue-600"> Français</a>
//         </Link>
//       </p>

//       <PaginatedGamesCard
//         games={games}
//         currentPage={currentPage}
//         totalPages={totalPages}
//       />
//     </section>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const page = context.query.page
//     ? parseInt(context.query.page as string, 10)
//     : 1;
//   const pageSize = 10;

//   const totalGames = database.length;
//   const totalPages = Math.ceil(totalGames / pageSize);

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const games: IPaginatedGamesCard[] = database
//     .slice(startIndex, endIndex)
//     .map((game) => ({
//       id: game.id,
//       name: game.name,
//       provider_title: game.provider_title,
//       icon_2: game.icon_2,
//       background: game.background || '',
//       status: game.status,
//       provider: game.provider,
//       show_as_provider: game.show_as_provider,
//       title: game.title,
//     }));

//   return {
//     props: {
//       games,
//       currentPage: page,
//       totalPages,
//     },
//   };
// };

// export default Home;

// Home.getLayout = (page) => {
//   return <PrimaryLayout>{page}</PrimaryLayout>;
// };
