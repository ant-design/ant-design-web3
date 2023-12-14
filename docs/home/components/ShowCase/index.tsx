import styles from './index.module.less';
import Buttons from './Buttons';
import Dropdown from './Dropdown';

export default () => {
  return (
    <div className={styles.container}>
      <Buttons />
      <Dropdown />
    </div>
  );
};
