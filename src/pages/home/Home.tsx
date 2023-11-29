import SearchBar from 'src/components/search-bar/SearchBar';
import styles from './HomeStyles.module.scss';
import { Modal, Spin, Typography } from 'antd';
import CityCard from 'src/components/city-card/CityCard';
import { useState } from 'react';
import axios from 'axios';
import LocationCard from 'src/components/location-card/LocationCard';
import { useCustomDispatch } from 'src/store';
import { setData } from 'src/store/slice/WeatherSlice';
import { useSelector } from 'react-redux';

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useCustomDispatch();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=${process.env.WEATHER_API_KEY}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleLocationSearch = (query: string) => {
    setIsLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((res) => {
        setLocations(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setData({}));
  };

  const handleLocationClick = (lat: number, lon: number) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((res) => {
        dispatch(setData(res?.data));
        setIsModalOpen(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  return (
    <div className={`${styles['container']}`}>
      {isLoading && <Spin fullscreen />}
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
                handleClick={handleLocationClick}
              />
            ))
          ) : (
            <Typography>
              Search your favorite location to get current weather insights
            </Typography>
          )}
          <Modal
            open={isModalOpen}
            classNames={{
              content: styles['modal'],
            }}
            cancelButtonProps={{
              style: {
                display: 'none',
              },
            }}
            onCancel={handleModalClose}
            onOk={handleModalClose}
          >
            <CityCard />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
