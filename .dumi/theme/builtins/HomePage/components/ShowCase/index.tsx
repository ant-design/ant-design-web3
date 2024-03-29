import { useIntl } from 'dumi';

import Address from './Address';
import Connect from './Connect';
import ConnectButton from './ConnectButton';
import styles from './index.module.less';
import NFTCard from './NFTCard';

export const ShowCase: React.FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <h3 className={styles.headTitle}>{intl.formatMessage({ id: 'app.docs.site.case.title' })}</h3>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.case.description' })}
      </div>
      <div className={styles.componentList}>
        <ConnectButton />
        <Address />
        <NFTCard />
        <Connect />
      </div>
    </div>
  );
};

export default ShowCase;
