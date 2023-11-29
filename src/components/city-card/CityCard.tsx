import { Card, Typography } from 'antd';
import styles from './CityCardStyles.module.scss';
import { useSelector } from 'react-redux';

const CityCard = () => {
  const state = useSelector((state: any) => state.weather?.data);
  return (
    <Card title={'Thane'} rootClassName={styles['card']}>
      {state ? (
        <>
          <div>
            <div>
              <Typography>Temperature: {state?.current?.temp}</Typography>
            </div>
            <div>
              <Typography>
                Sunrise: {new Date(state?.current?.sunrise).toDateString()}
              </Typography>
            </div>
            <div>
              <Typography>
                Sunset: {new Date(state?.current?.sunset).toDateString()}
              </Typography>
            </div>
            <div>
              <Typography>Wind Speed: {state?.current?.wind_speed}</Typography>
            </div>
            <div>
              <Typography>Humidity: {state?.current?.humidity}</Typography>
            </div>
            <div>
              <Typography>Clouds: {state?.current?.clouds}</Typography>
            </div>
          </div>
          <div>
            <Typography>Lat: 100, Long: 90</Typography>
            <Typography>Timezone: India/Kolkata</Typography>
          </div>
        </>
      ) : (
        <Typography>No data here</Typography>
      )}
    </Card>
  );
};

export default CityCard;
