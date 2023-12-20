import React from 'react';
// @ts-ignore
import { useIntl, Link } from 'dumi';
import styles from './index.module.less';

const Banner: React.FC = () => {
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
            src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*zaaqSqbOOrkAAAAAAAAAAAAADlrGAQ/original"
            alt="title"
          />
          <div className={styles.btn}>
            <Link to={`${intl.locale === 'zh-CN' ? '/zh-CN' : ''}/guide`}>
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
