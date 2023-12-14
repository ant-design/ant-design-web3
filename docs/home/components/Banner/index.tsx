import React from 'react';
import { useLocation } from 'dumi';
import styles from './index.module.less';

const Banner: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <img
        draggable={false}
        className={styles.bgImg}
        src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*x9HgRpaXSmsAAAAAAAAAAAAADlrGAQ/original"
        alt="banner"
      />
      <div className={styles.wrap}>
        <img
          draggable={false}
          className={styles.title}
          src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*zaaqSqbOOrkAAAAAAAAAAAAADlrGAQ/original"
          alt="title"
        />
        <div className={styles.btn}>
          <a href="/zh-CN/guide">{pathname.includes('zh-CN') ? '开始使用' : 'Start'}</a>
          <a href="https://github.com/ant-design/ant-design-web3" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
