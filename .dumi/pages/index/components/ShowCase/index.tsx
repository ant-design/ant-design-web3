import { useContext } from 'react';
import { Carousel } from 'antd';
import { useTheme } from 'antd-style';
import classNames from 'classnames';
import { useIntl } from 'dumi';

import { ThemeContext } from '../ThemeContext';
import Connect from './Connect';
import CryptoInput from './CryptoInput';
import styles from './index.module.less';
import NFTCard from './NFTCard';
import PayPanel from './PayPanel';

export const ShowCase: React.FC = () => {
  const intl = useIntl();

  const token = useTheme();
  const { curTheme } = useContext(ThemeContext);
  const themeStyle: React.CSSProperties = {
    '--theme-item-bg': curTheme.showCaseItemBg,
    '--theme-text-color': curTheme.name === 'Dark' ? token.colorWhite : token.colorTextBase,
  } as React.CSSProperties;

  const caseList = [
    <Connect key="Connect" />,
    <NFTCard key="NFTCard" />,
    <PayPanel key="PayPanel" />,
    <CryptoInput key="CryptoInput" />,
  ];

  return (
    <div className={styles.container} style={themeStyle}>
      <h2 className={styles.headTitle}>{intl.formatMessage({ id: 'app.docs.site.case.title' })}</h2>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.case.description' })}
      </div>
      <div className={classNames(styles.componentList, styles.pc)}>{caseList}</div>
      <div className={classNames(styles.componentList, styles.mobile)}>
        <Carousel dots={{ className: styles.carouselDot }} dotPosition="top" adaptiveHeight>
          {caseList}
        </Carousel>
      </div>
    </div>
  );
};

export default ShowCase;
