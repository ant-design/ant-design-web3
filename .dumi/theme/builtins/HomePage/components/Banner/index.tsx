import React from 'react';
// @ts-ignore
import { Link, useIntl } from 'dumi';

import styles from './index.module.less';

export const Banner: React.FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.bannerContainer}>
      <img
        draggable={false}
        className={styles.bgImg}
        src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*x9HgRpaXSmsAAAAAAAAAAAAADlrGAQ/original"
        alt="banner"
      />
      <div className={styles.wrap}>
        <div>
          <img
            draggable={false}
            className={styles.titleImg}
            src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*8Aj9RZXO3d0AAAAAAAAAAAAADlrGAQ/original"
            alt="title"
          />
          <div className={styles.btn}>
            <Link to={`/guide/ant-design-web3${intl.locale === 'zh-CN' ? '-cn' : ''}`}>
              {intl.formatMessage({ id: 'app.docs.site.index.banner.button-text' })}
            </Link>
            <a
              href="https://github.com/ant-design/ant-design-web3"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
