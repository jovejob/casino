import { IGameListCard } from './GameListCard';

const base: IGameListCard = {
  gameCards: [
    {
      name: "Dragon's Treasure",
      provider_title: 'Provider Name',
      icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
      background: 'https://example.com/path/to/background.jpg',
      status: 'Active',
      provider: 'TopProvider',
      show_as_provider: 'True',
      title: "Dragon's Treasure",
      id: '',
      cats: []
    },
    {
      name: 'Mystic Forest',
      provider_title: 'Mystic Provider',
      icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG206.jpg',
      background: 'https://example.com/path/to/forest-background.jpg',
      status: 'Active',
      provider: 'NatureProvider',
      show_as_provider: 'True',
      title: 'Mystic Forest',
      id: '',
      cats: []
    },
  ],
};

export const mockGameListCardProps = {
  base,
};
