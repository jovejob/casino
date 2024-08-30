import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="flex flex-col gap-y-5 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/results?search=${searchTerm}`);
        }}
      >
        <input
          type="text"
          className="rounded-full border-2 w-full h-12 px-3"
          placeholder="Search by name, provider or provider_title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white h-10"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
