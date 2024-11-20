import React, { useContext } from 'react';
import classNames from 'classnames';
// @ts-ignore
import { Link, useIntl } from 'dumi';

import { ThemeContext } from '../ThemeContext';
import styles from './index.module.less';

export const Banner: React.FC = () => {
  const intl = useIntl();
  const {
    curTheme: { bannerBg, color, darkLogo, darkSloganColor, name },
  } = useContext(ThemeContext);

  const themeStyle: React.CSSProperties = {
    '--theme-primary-color': color,
    '--theme-slogan-color': darkSloganColor || 'rgba(0, 0, 0, 0.85)',
  } as React.CSSProperties;

  return (
    <div
      className={classNames(styles.bannerContainer, {
        [styles.darkTheme]: name === 'Dark',
      })}
      style={themeStyle}
    >
      <img draggable={false} className={styles.bgImg} src={bannerBg} alt="banner" />
      <div className={styles.wrap}>
        <img
          draggable={false}
          className={styles.titleImg}
          src={
            darkLogo ||
            'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*5kc-Ro7c1H8AAAAAAAAAAAAADlrGAQ/original'
          }
          alt="Ant Design Web3"
        />
        <h2 className={styles.slogan}>
          {intl.formatMessage({ id: 'app.docs.site.index.banner.slogan' })}
        </h2>
        <div className={styles.btn}>
          <Link to={`/guide/ant-design-web3${intl.locale === 'zh-CN' ? '-cn' : ''}`}>
            {intl.formatMessage({ id: 'app.docs.site.index.banner.button-text' })}
          </Link>
          <a
            href="https://github.com/ant-design/ant-design-web3"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
