import styles from './index.module.less';
import classNames from 'classnames';

export default () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rich components, easy to choose</h3>
      <div className={styles.desc}>
        A large number of practical components to meet your needs, flexible customization and
        expansion
      </div>
      <div className={styles.imgList}>
        <div className={classNames(styles.img, styles.buttons)} />
        <div className={classNames(styles.img, styles.dropdown)} />
        <div className={classNames(styles.img, styles.tooltip)} />
        <div className={classNames(styles.img, styles.profile)} />
        <div className={classNames(styles.img, styles.connect)} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>ANT DIGITAL TECHNOLOGY</div>
      </div>
    </div>
  );
};
