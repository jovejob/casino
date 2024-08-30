import { ISearchResult } from './SearchResult';

const base: ISearchResult = {
  id: '1', // Unique identifier for the game card
  name: 'Example Game', // Name of the game
  provider_title: 'Example Provider Title', // Title of the provider
  title: 'Example Game Title', // Optional title for the game
  icon_2: '/path/to/icon2.jpg', // URL for the icon
  background: '/path/to/background.jpg', // URL for the background image
  status: 'Available', // Status of the game
  provider: 'Example Provider', // Provider of the game
  show_as_provider: 'Example Show As Provider', // Show as provider text
  cats: [] // Categories related to the game; provide an empty array or actual category objects
};

export const mockSearchResultProps = {
  base,
};
