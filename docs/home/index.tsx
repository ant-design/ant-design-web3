import HomeBanner from './components/Banner';
import Features from './components/Features';
import Theme from './components/Theme';
import ShowCase from './components/ShowCase';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.container}>
      <HomeBanner />
      <Features />
      <Theme />
      <ShowCase />
    </div>
  );
};
