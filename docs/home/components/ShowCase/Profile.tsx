import styles from './index.module.less';
import classNames from 'classnames';
import { ConnectButton, Profile } from '@ant-design/web3';
import { ReactComponent as AvatarSvg } from './avatar.svg';
import { ProfileModal } from 'packages/web3/src/connect-button/profile-modal';
// import { Profile} from 'packages/web3/src/connect-button/profile';
export default () => {
  return (
    <div className={classNames(styles.cardBg)}>
      <div className={classNames(styles.profileContainer)}>
        <Profile
          avatar={{
            src: <AvatarSvg />,
          }}
          address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
          name="Nick.etc"
        />
      </div>
    </div>
  );
};
