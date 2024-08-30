export interface IPaginatedGames {
  games: IPaginatedGamesCard[];
  currentPage: number;
  totalPages: number;
}

// export interface IGameCard {
//   name: string;
//   provider_title: string;
//   icon_2: string;
//   icon_3?: string;
//   background: string;
//   status: string;
//   provider: string;
//   show_as_provider: string;
//   title: string | null;
// }
export interface IGameCard {
  id: string;
  name: string;
  provider_title: string;
  title?: string;
  icon_2: string;
  background: string;
  status: string;
  provider: string;
  show_as_provider: string;
  cats: ICategory[];
  [key: string]: any; // To allow for additional properties
}

// export interface IPaginatedGamesCard {
//   id: string;
//   name: string;
//   provider_title: string;
//   icon_2: string;
//   icon_3?: string;
//   background: string;
//   status: string;
//   provider: string;
//   show_as_provider: string;
//   title: string | null;
// }
export interface IPaginatedGamesCard {
  id: string;
  name: string;
  provider_title: string;
  title?: string;
  icon_2: string;
  background: string;
  status: string;
  provider: string;
  show_as_provider: string;
  cats: ICategory[]; // Ensure this matches IGameCard
  [key: string]: any; // To allow for additional properties
}

// export interface ISearchData {
//   name: string;
//   provider: string;
//   provider_title: string;
// }

export interface ICategory {
  id: string;
  title: string;
  type: string;
}

export interface ISearchData {
  id: string;
  name: string;
  provider: string;
  provider_title: string;
  title: string | null;
  icon_2: string;
  background: string;
  status: string;
  show_as_provider: string;
  cats: ICategory[];
  [key: string]: any; // To allow for additional properties
}