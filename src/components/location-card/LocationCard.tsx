import { Flex, Typography } from 'antd';
import styles from './LocationCardStyles.module.scss';

type SelfProps = {
  country: string;
  name: string;
  state: string;
  lat: number;
  lon: number;
  handleClick: (lat: number, lon: number, name: string) => void;
};

const LocationCard = ({
  country,
  lat,
  lon,
  name,
  state,
  handleClick,
}: SelfProps) => {
  const onClick = () => {
    handleClick(lat, lon, `${name}, ${state}, ${country}`);
  };
  return (
    <Flex className={styles['location-card']} onClick={onClick}>
      <Typography className={styles['location-card_text']}>
        {name}, {state}, {country}
      </Typography>
    </Flex>
  );
};

export default LocationCard;
