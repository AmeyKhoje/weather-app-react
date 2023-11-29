import { Checkbox, Flex, Typography } from 'antd';
import styles from './LocationCardStyles.module.scss';

type SelfProps = {
  country: string;
  name: string;
  state: string;
  lat: number;
  lon: number;
};

const LocationCard = ({ country, lat, lon, name, state }: SelfProps) => {
  return (
    <Flex>
      <Typography>
        {name}, {state}, {country}
      </Typography>
    </Flex>
  );
};

export default LocationCard;
