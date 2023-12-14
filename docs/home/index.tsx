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
        <img
          className={styles.rightTopImage}
          src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*a8GvQ50c-SUAAAAAAAAAAAAADlrGAQ/original"
          alt=""
        />
        <img
          className={styles.leftBottomImage}
          src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*IfSxQK7EuKYAAAAAAAAAAAAADlrGAQ/original"
          alt=""
        />
      </div>
      <ShowCase />
    </div>
  );
};
