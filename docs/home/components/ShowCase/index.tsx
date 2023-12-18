import styles from './index.module.less';
import Buttons from './Buttons';
import Dropdown from './Dropdown';
import Tooltip from './Tooltip';
import Profile from './Profile';
import Connect from './Connect';

export default () => {
  return (
    <div className={styles.container}>
      <Buttons />
      <Dropdown />
      <Tooltip />
      <Profile />
      <Connect />
    </div>
  );
};
