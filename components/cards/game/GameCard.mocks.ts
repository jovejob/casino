import { IGameCard } from './GameCard';

const base: IGameCard = {
  name: "Dragon's Treasure",
  provider_title: 'Provider Name',
  icon_2: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
  icon_3: 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
  background: 'https://example.com/path/to/background.jpg',
  status: 'Active',
  provider: 'TopProvider',
  show_as_provider: 'True',
  title: "Dragon's Treasure",
  cats: []
};

export const mockGameCardProps = {
  base,
};
