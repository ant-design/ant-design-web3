import styles from './index.module.less';
import Buttons from './Buttons';
import Dropdown from './Dropdown';
import Tooltip from './Tooltip';
import Profile from './Profile';
import Connect from './Connect';

export default () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rich components, easy to choose</h3>
      <div className={styles.desc}>
        A large number of practical components to meet your needs, flexible customization and
        expansion
      </div>
      <div className={styles.componentList}>
        <Buttons />
        <Dropdown />
        <Tooltip />
        <Profile />
        <Connect />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>ANT DESIGN</div>
      </div>
    </div>
  );
};
