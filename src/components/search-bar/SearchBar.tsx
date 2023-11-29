import { Button, Flex, Input, Space } from 'antd';
import styles from './SearchBarStyles.module.scss';
import { ChangeEvent, MouseEvent, useState } from 'react';

type SelfProps = {
  handleSubmit: (key: string) => void;
};

const SearchBar = ({ handleSubmit }: SelfProps) => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    query.length && handleSubmit(query);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmitClick = () => {
    if (query.length) {
      handleSubmit(query);
    }
  };

  return (
    <Space className={styles['container']}>
      <form action="#" onSubmit={onSubmit}>
        <Flex gap={'2rem'}>
          <Input
            placeholder="Search your city here..."
            classNames={{
              input: 'input',
            }}
            onChange={handleChange}
          />
          <Button
            type="primary"
            className={'button'}
            onClick={handleSubmitClick}
          >
            Search
          </Button>
        </Flex>
      </form>
    </Space>
  );
};

export default SearchBar;
