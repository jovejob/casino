// pages/results.tsx
import { GetServerSideProps } from 'next';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SearchResult from '../../components/utility/search-result/SearchResult';
import { ISearchData } from '../../lib/search/types';

interface ResultsPageProps {
  results: ISearchData[];
}

const Results = ({ results }: ResultsPageProps) => {
  return (
    <>
      <section className="wrapper p-4">
        <h1>Searched/Filtered Results</h1>
        {results ? (
          <div className="inside-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((result, idx) => (
              <SearchResult
                key={idx}
                {...{
                  ...result,
                  title: result.title ?? undefined,
                }}
              />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  // Ensure searchTerm and category are strings
  const searchTerm = Array.isArray(query.searchTerm)
    ? query.searchTerm[0]
    : query.searchTerm || '';
  const category = Array.isArray(query.category)
    ? query.category[0]
    : query.category || '';

  const res = await fetch(
    `http://localhost:3000/api/search?searchTerm=${encodeURIComponent(
      searchTerm
    )}&category=${encodeURIComponent(category)}`
  );
  const results = await res.json();

  return {
    props: {
      results,
    },
  };
};

Results.getLayout = (
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export default Results;
