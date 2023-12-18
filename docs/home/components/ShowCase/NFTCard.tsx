import styles from './index.module.less';
import { NFTCard } from '@ant-design/web3';
import './connect.less';

export default () => {
  return (
    <div className={styles.cardBg}>
      <span className={styles.title}>NFT Card</span>
      <div className={styles.NTFCard}>
        <NFTCard
          name="My NFT"
          tokenId={16}
          description="This is description"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
      </div>
    </div>
  );
};
