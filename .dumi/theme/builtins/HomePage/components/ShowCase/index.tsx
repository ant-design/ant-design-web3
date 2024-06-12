import { Carousel } from 'antd';
import classNames from 'classnames';
import { useIntl } from 'dumi';

import Address from './Address';
import Connect from './Connect';
import ConnectButton from './ConnectButton';
import styles from './index.module.less';
import NFTCard from './NFTCard';

export const ShowCase: React.FC = () => {
  const intl = useIntl();

  const caseList = (
    <>
      <ConnectButton />
      <Address />
      <NFTCard />
      <Connect />
    </>
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.headTitle}>{intl.formatMessage({ id: 'app.docs.site.case.title' })}</h3>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.case.description' })}
      </div>
      <div className={classNames(styles.componentList, styles.pc)}>{caseList}</div>
      <div className={classNames(styles.componentList, styles.mobile)}>
        <Carousel dots={{ className: styles.carouselDot }} dotPosition="top" adaptiveHeight>
          <ConnectButton />
          <Address />
          <NFTCard />
          <Connect />
        </Carousel>
      </div>
    </div>
  );
};

export default ShowCase;
