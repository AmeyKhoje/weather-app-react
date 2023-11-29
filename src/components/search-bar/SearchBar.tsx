import { Button, Flex, Input, Space, Typography } from 'antd';
import styles from './SearchBarStyles.module.scss';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import useOutsideClick from 'src/utils/hooks/useOutsideClick';
import SuggestionItem from '../suggestion.item/SuggestionItem';
import { useSelector } from 'react-redux';

type SelfProps = {
  handleSubmit: (key: string) => void;
};

const SearchBar = ({ handleSubmit }: SelfProps) => {
  const [query, setQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const suggestions = useSelector((state: any) => state.weather.suggestions);

  useOutsideClick(ref, () => {
    setShowSuggestions(false);
  });

  const onSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query?.length) {
      handleSubmit(query);
      setShowSuggestions(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFocus = () => {
    if (suggestions?.length) {
      setShowSuggestions(true);
    }
  };

  const handleSubmitClick = () => {
    if (query.length) {
      handleSubmit(query);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setQuery(value);
    setShowSuggestions(false);
  };

  return (
    <Space className={styles['container']}>
      <form action="#" onSubmit={onSubmit}>
        <Flex gap={'2rem'} className={styles['container-flex']} ref={ref}>
          <Input
            placeholder="Search your city here..."
            classNames={{
              input: 'input',
            }}
            onChange={handleChange}
            onFocus={handleFocus}
            onClick={handleFocus}
            value={query}
          />
          <Button
            type="primary"
            className={'button'}
            onClick={handleSubmitClick}
          >
            Search
          </Button>
          {showSuggestions && (
            <div className={styles['search-suggestions']}>
              {suggestions?.map((suggestionItem: string) => (
                <SuggestionItem
                  value={suggestionItem}
                  handleClick={handleSuggestionClick}
                />
              ))}
            </div>
          )}
        </Flex>
      </form>
    </Space>
  );
};

export default SearchBar;
