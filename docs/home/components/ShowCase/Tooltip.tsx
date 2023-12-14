import styles from './index.module.less';
import classNames from 'classnames';
import { ConnectButton } from '@ant-design/web3';
import avatarSvg from './avatar.svg';

export default () => {
  return (
    <div className={classNames(styles.cardBg)}>
      <span className={styles.title}>Tooltip</span>
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        avatar={{ src: avatarSvg }}
        tooltip={{
          format: true,
          placement: 'bottom',
          defaultOpen: true,
        }}
      />
    </div>
  );
};
