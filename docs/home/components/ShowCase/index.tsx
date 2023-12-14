import styles from './index.module.less';
import Buttons from './Buttons';
import Dropdown from './Dropdown';
import Tooltip from './Tooltip';

export default () => {
  return (
    <div className={styles.container}>
      <Buttons />
      <Dropdown />
      <Tooltip />
    </div>
  );
};
