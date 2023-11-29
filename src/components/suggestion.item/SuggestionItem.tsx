import { Typography } from 'antd';
import styles from './SuggestionItemStyles.module.scss';
type SelfProps = {
  handleClick: (value: string) => void;
  value: string;
};

const SuggestionItem = ({ handleClick, value }: SelfProps) => {
  const onClick = () => handleClick(value);
  return (
    <div className={styles['search-suggestions_card']} onClick={onClick}>
      <Typography className={styles['search-suggestions_card-text']}>
        {value}
      </Typography>
    </div>
  );
};

export default SuggestionItem;
