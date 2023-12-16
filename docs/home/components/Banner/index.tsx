import React from 'react';
import styles from './index.module.less';

const Banner: React.FC = () => {
  const isZh = location.pathname?.includes('zh-CN');
  return (
    <div className={styles.bannerContainer}>
      <img
        draggable={false}
        className={styles.bgImg}
        src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*x9HgRpaXSmsAAAAAAAAAAAAADlrGAQ/original"
        alt="banner"
      />
      <div className={styles.wrap}>
        <img
          draggable={false}
          className={styles.titleImg}
          src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*zaaqSqbOOrkAAAAAAAAAAAAADlrGAQ/original"
          alt="title"
        />
        <div className={styles.btn}>
          <a href="/zh-CN/guide">{isZh ? '开始使用' : 'Start'}</a>
          <a href="https://github.com/ant-design/ant-design-web3" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
