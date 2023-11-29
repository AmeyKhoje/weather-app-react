import { Card, Typography } from 'antd';
import styles from './CityCardStyles.module.scss';

const CityCard = () => {
  return (
    <Card title={'Thane'} rootClassName={styles['card']}>
      <div>
        <div>
          <Typography>Temperature: 30</Typography>
        </div>
        <div>
          <Typography>Sunrise: 30</Typography>
        </div>
        <div>
          <Typography>Sunset: 30</Typography>
        </div>
        <div>
          <Typography>Wind Speed: 30</Typography>
        </div>
        <div>
          <Typography>Humidity: 30</Typography>
        </div>
        <div>
          <Typography>Clouds: 30</Typography>
        </div>
      </div>
      <div>
        <Typography>Lat: 100, Long: 90</Typography>
        <Typography>Timezone: India/Kolkata</Typography>
      </div>
    </Card>
  );
};

export default CityCard;
