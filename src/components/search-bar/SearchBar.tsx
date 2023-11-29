import { Button, Flex, Input, Space } from 'antd';
import styles from './SearchBarStyles.module.scss';

const SearchBar = () => {
  return (
    <Space className={styles['container']}>
      <form action="#">
        <Flex gap={'2rem'}>
          <Input
            placeholder="Search your city here..."
            classNames={{
              input: 'input',
            }}
          />
          <Button type="primary" className={'button'}>
            Search
          </Button>
        </Flex>
      </form>
    </Space>
  );
};

export default SearchBar;
