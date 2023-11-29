import SearchBar from 'src/components/search-bar/SearchBar';
import styles from './HomeStyles.module.scss';
import { Typography } from 'antd';
import CityCard from 'src/components/city-card/CityCard';

const Home = () => {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['container-inner']}`}>
        <Typography className={`${styles['main-title']}`}>
          Weather App
        </Typography>
        <SearchBar />
        <div className={`${styles['container-inner_list']}`}>
          <CityCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
