import HomeBanner from './components/Banner';
import Features from './components/Features';
import Theme from './components/Theme';
import ShowCase from './components/ShowCase';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.container}>
      <HomeBanner />
      <div className={styles.centerbg}>
        <Features />
        <Theme />
        <div className={styles.rightTopImage} />
        <div className={styles.leftBottomImage} />
      </div>
      <ShowCase />
    </div>
  );
};
