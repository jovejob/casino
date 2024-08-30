import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ICategory, IGameCard } from '../../../lib/search/types';
import GameCard from '../game/GameCard';

export default {
  title: 'cards/GameCard',
  component: GameCard,
  argTypes: {},
} as ComponentMeta<typeof GameCard>;

const Template: ComponentStory<typeof GameCard> = (args) => (
  <GameCard {...args} />
);

export const Base = Template.bind({});

// Define a sample category for the `cats` property
const sampleCats: ICategory[] = [
  { id: 'cat1', title: 'Category 1', type: 'Type 1' },
  { id: 'cat2', title: 'Category 2', type: 'Type 2' },
];

// Adjust mock data to match the IGameCard interface
Base.args = {
  id: 'game1', // Required property
  name: 'Example Game',
  provider_title: 'Example Provider',
  icon_2: '/path/to/icon2.jpg',
  icon_3: '/path/to/icon3.jpg', // Optional but should match the type
  background: '/path/to/background.jpg',
  status: 'Available',
  provider: 'Example Provider',
  show_as_provider: 'Example Show',
  title: 'Example Title',
  cats: sampleCats, // Required property
} as IGameCard; // Use IGameCard type directly

// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import GameCard from './PaginatedGamesCard';
// import { mockPaginatedGameCardProps } from './PaginatedGamesCard.mocks';

// export interface ICategory {
//   id: string;
//   title: string;
//   type: string;
// }

// export interface IGameCard {
//   id: string;
//   name: string;
//   provider_title: string;
//   title?: string;
//   icon_2: string;
//   background: string;
//   status: string;
//   provider: string;
//   show_as_provider: string;
//   cats: ICategory[];
//   [key: string]: any; // To allow for additional properties
// }

// export default {
//   title: 'cards/GameCard',
//   component: GameCard,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {},
// } as ComponentMeta<typeof GameCard>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof GameCard> = (args) => (
//   <GameCard {...args} />
// );

// export const Base = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args

// Base.args = {
//   ...mockPaginatedGameCardProps.base,
// } as IGameCard;
