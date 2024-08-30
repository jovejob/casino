import { IGameCard } from '../../../lib/search/types';
import GameCard from '../../cards/game/GameCard';

export type ISearchResult = IGameCard & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  provider_title,
  title,
  name,
  icon_2,
  background,
  status,
  provider,
  show_as_provider,
  cats,
  ...divProps
}) => {
  return (
    <div {...divProps}>
      <GameCard
        name={name}
        provider_title={provider_title}
        icon_2={icon_2}
        background={background}
        status={status}
        provider={provider}
        show_as_provider={show_as_provider}
        title={title || null}
        cats={cats}
      />
    </div>
  );
};

export default SearchResult;
