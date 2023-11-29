import SearchBar from 'src/components/search-bar/SearchBar';
import styles from './HomeStyles.module.scss';
import { Typography } from 'antd';
import CityCard from 'src/components/city-card/CityCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from 'src/components/location-card/LocationCard';

const Home = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLocationSearch = (query: string) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((res) => {
        setLocations(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['container-inner']}`}>
        <Typography className={`${styles['main-title']}`}>
          Weather App
        </Typography>
        <SearchBar handleSubmit={handleLocationSearch} />
        <div className={`${styles['container-inner_list']}`}>
          {locations.length ? (
            locations?.map((location: any) => (
              <LocationCard
                country={location?.country}
                lat={location?.lat}
                lon={location?.lon}
                name={location?.name}
                state={location?.state}
              />
            ))
          ) : (
            <Typography>
              Search your favorite location to get current weather insights
            </Typography>
          )}
          <CityCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
