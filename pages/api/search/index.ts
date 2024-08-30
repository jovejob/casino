// pages/api/search/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/search/data.json';
import { ISearchData } from '../../../lib/search/types';

// Type for the search data response
export type IApiSearchResponseData = ISearchData[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {

  const { searchTerm = '', category = '' } = req.query;

  if (req.method === 'GET') {
    let filteredResults = database;

    // Create a regex search pattern for a case-insensitive match from the user's search term
    if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
      const searchPattern = new RegExp(searchTerm, 'i');

      filteredResults = filteredResults.filter((result) =>
        searchPattern.test(result.name) ||
        searchPattern.test(result.provider) ||
        searchPattern.test(result.provider_title)
      );
    }

    // Filter by category if provided
    if (typeof category === 'string' && category.trim().length > 0) {
      filteredResults = filteredResults.filter((result) =>
        result.cats.some((cat) => {
          return cat.title === category; // Match by title
        })
      );
    }

    const sanitizedResults: ISearchData[] = filteredResults.map(result => ({
      id: result.id,
      name: result.name,
      provider: result.provider,
      provider_title: result.provider_title,
      title: result.title || null,
      icon_2: result.icon_2,
      background: result.background || '',
      status: result.status,
      show_as_provider: result.show_as_provider,
      cats: result.cats,
    }));

    res.status(200).json(sanitizedResults);
  } else {
    res.status(405).json([]); // Method Not Allowed
  }
}