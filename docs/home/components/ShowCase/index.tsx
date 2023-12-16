import styles from './index.module.less';

const imgConfig = [
  {
    src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*VTYWRbrrhkUAAAAAAAAAAAAADlrGAQ/original',
    className: styles.buttons,
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*NcnYRIaOk1UAAAAAAAAAAAAADlrGAQ/original',
    className: styles.dropdown,
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*mfEkTb6kbdkAAAAAAAAAAAAADlrGAQ/original',
    className: styles.tooltip,
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*5wVDTbE3GaUAAAAAAAAAAAAADlrGAQ/original',
    className: styles.profile,
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*rvzARY77xtwAAAAAAAAAAAAADlrGAQ/original',
    className: styles.connect,
  },
];

export default () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rich components, easy to choose</h3>
      <div className={styles.desc}>
        A large number of practical components to meet your needs, flexible customization and
        expansion
      </div>
      <div className={styles.imgList}>
        {imgConfig.map((cfg, index) => {
          return <img src={cfg.src} key={index} className={cfg.className} />;
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>ANT DIGITAL TECHNOLOGY</div>
      </div>
    </div>
  );
};
