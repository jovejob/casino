import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameCard, { IGameCard } from './GameCard';
import { mockGameCardProps } from './GameCard.mocks';

export default {
  title: 'cards/GameCard',
  component: GameCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GameCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameCard> = (args) => (
  <GameCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGameCardProps.base,
} as IGameCard;
