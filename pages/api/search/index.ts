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
  console.log('Request query:', req.query); // Log entire request query parameters

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

    console.log('searchTerm:', searchTerm);
    console.log('category:', category);

    // Filter by category if provided
    if (typeof category === 'string' && category.trim().length > 0) {
      console.log('Category filter:', category); // Log category being used
      filteredResults = filteredResults.filter((result) =>
        result.cats.some((cat) => {
          // console.log('Checking cat title:', cat.title); // Log each cat title being checked
          return cat.title === category; // Match by title
        })
      );
    }

    // console.log('Checking filteredResults:', filteredResults);
    // res.status(200).json(filteredResults);
    const sanitizedResults: ISearchData[] = filteredResults.map(result => ({
      id: result.id,
      name: result.name,
      provider: result.provider,
      provider_title: result.provider_title,
      title: result.title || null, // Ensure title is either string or null
      icon_2: result.icon_2,
      background: result.background || '', // Ensure background is always a string
      status: result.status,
      show_as_provider: result.show_as_provider,
      cats: result.cats, // Ensure cats is an array of ICategory
    }));

    res.status(200).json(sanitizedResults);
  } else {
    res.status(405).json([]); // Method Not Allowed
  }
}




// // FILTERS WORKING
// // pages/api/search/index.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import database from '../../../lib/search/data.json';
// import { ISearchData } from '../../../lib/search/types';

// // Type for the search data response
// export type IApiSearchResponseData = ISearchData[];

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<IApiSearchResponseData>
// ) {
//   console.log('Request query:', req.query); // Log entire request query parameters

//   const { searchTerm = '', category = '' } = req.query;

//   if (req.method === 'GET') {
//     let filteredResults = database;

//     // Create a regex search pattern for a case-insensitive match from the user's search term
//     if (typeof searchTerm === 'string' && searchTerm.trim().length > 0) {
//       console.log("its a search time")
//       const searchPattern = new RegExp(searchTerm, 'i');

//       filteredResults = filteredResults.filter((result) =>
//         searchPattern.test(result.name) ||
//         searchPattern.test(result.provider) ||
//         searchPattern.test(result.provider_title)
//       );
//     }

//     console.log('searchTerm:', searchTerm);
//     console.log('category:', category);

//     // Filter by category if provided
//     if (typeof category === 'string' && category.trim().length > 0) {
//       console.log('Category filter:', category); // Log category being used
//       filteredResults = filteredResults.filter((result) =>
//         result.cats.some((cat) => {
//           // console.log('Checking cat title:', cat.title); // Log each cat title being checked
//           return cat.title === category; // Match by title
//         })
//       );
//     }

//     res.status(200).json(filteredResults);
//   } else {
//     res.status(405).json([]); // Method Not Allowed
//   }
// }
// // FILTERS WORKING







// // pages/api/search/index.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import database from '../../../lib/search/data.json';
// import { ISearchData } from '../../../lib/search/types';

// interface IApiSearchRequest extends NextApiRequest {
//   body: { searchTerm?: string; category?: string };
// }

// export type IApiSearchResponseData = ISearchData[];

// export default function handler(
//   req: IApiSearchRequest,
//   res: NextApiResponse<IApiSearchResponseData>
// ) {

//   console.log('Request body:', req.body); // Log entire request body

//   const {
//     body: { searchTerm, category },
//   } = req;

//   if (req.method === 'POST') {
//     let filteredResults = database;

//     // Create a regex search pattern for a case-insensitive match from the user's search term
//     if (searchTerm && searchTerm.length > 0) {
//       const searchPattern = new RegExp(searchTerm, 'i');

//       filteredResults = filteredResults.filter((result) =>
//         searchPattern.test(result.name) ||
//         searchPattern.test(result.provider) ||
//         searchPattern.test(result.provider_title)
//       );
//     }

//     console.log('searchTerm:', searchTerm);
//     console.log('category :', category);

//     // Filter by category if provided
//     if (category) {
//       console.log('Category filter:', category); // Log category being used
//       filteredResults = filteredResults.filter((result) =>
//         result.cats.some((cat) => {
//           console.log('Checking cat title:', cat.title); // Log each cat title being checked
//           return cat.title === category; // Match by title
//         })
//       );
//     }

//     res.status(200).json(filteredResults);
//   } else {
//     res.status(400).json([]);
//   }
// }





// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
// import database from '../../../lib/search/data.json';
// import { ISearchData } from '../../../lib/search/types';

// interface IApiSearchRequest extends NextApiRequest {
//   body: { searchTerm?: string };
// }

// export type IApiSearchResponseData = ISearchData[];

// export default function handler(
//   req: IApiSearchRequest,
//   res: NextApiResponse<IApiSearchResponseData>
// ) {
//   const {
//     body: { searchTerm },
//   } = req;

//   if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
//     // Creates a regex search pattern for a case insensitive match from the user's search term
//     const searchPattern = new RegExp(searchTerm, 'i');

//     const filteredResults = database.filter((result) => {
//       return (
//         // Check the user's search term again
//         searchPattern.test(result.name) ||
//         searchPattern.test(result.provider) ||
//         searchPattern.test(result.provider_title)
//       );
//     });
//     res.status(200).json(filteredResults);
//   } else {
//     res.status(400).json([]);
//   }
// }
