import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameListCard, { IGameListCard } from './GameListCard';
import { mockGameListCardProps } from './GameListCard.mocks';

export default {
  title: 'cards/GameListCard',
  component: GameListCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GameListCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameListCard> = (args) => (
  <GameListCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGameListCardProps.base,
} as IGameListCard;
