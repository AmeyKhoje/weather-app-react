import { Card, Typography } from 'antd';
import styles from './CityCardStyles.module.scss';
import { useSelector } from 'react-redux';

const CityCard = () => {
  const state = useSelector((state: any) => state.weather?.data);
  return (
    <Card title={state?.name} rootClassName={styles['card']}>
      {state ? (
        <>
          <div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Temperature:</strong> {state?.current?.temp}
              </Typography>
            </div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Sunrise:</strong>{' '}
                {new Date(state?.current?.sunrise).toString()}
              </Typography>
            </div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Sunset:</strong>{' '}
                {new Date(state?.current?.sunset).toString()}
              </Typography>
            </div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Wind Speed:</strong> {state?.current?.wind_speed}
              </Typography>
            </div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Humidity:</strong> {state?.current?.humidity}
              </Typography>
            </div>
            <div>
              <Typography className={'card-content-text'}>
                <strong>Clouds:</strong> {state?.current?.clouds}
              </Typography>
            </div>
          </div>
          <div>
            <Typography className={'card-content-text'}>
              <strong>Lat:</strong> 100, <strong>Long:</strong> 90
            </Typography>
            <Typography className={'card-content-text'}>
              <strong>Timezone:</strong> India/Kolkata
            </Typography>
          </div>
        </>
      ) : (
        <Typography>No data here</Typography>
      )}
    </Card>
  );
};

export default CityCard;
