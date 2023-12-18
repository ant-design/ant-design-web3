import styles from './index.module.less';
import classNames from 'classnames';
import { Profile } from '@ant-design/web3';
import { ReactComponent as AvatarSvg } from './avatar.svg';
import { Button } from 'antd';

export default () => {
  return (
    <div className={classNames(styles.cardBg)}>
      <span className={styles.title}>Profile</span>
      <div className={classNames(styles.profileContainer)}>
        <Profile
          avatar={{
            src: <AvatarSvg />,
          }}
          address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
          name="Nick.etc"
        />
        <div className={styles.footer}>
          <Button>Disconnect</Button>
        </div>
      </div>
    </div>
  );
};
