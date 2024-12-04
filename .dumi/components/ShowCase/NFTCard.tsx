import { NFTCard } from '@ant-design/web3';

import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.cardBg}>
      <h3 className={styles.title}>NFT Card</h3>
      <div className={styles.NTFCard}>
        <NFTCard
          name="My NFT"
          tokenId={16}
          description="This is description"
          image="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*jlrDRrBXZiEAAAAAAAAAAAAADlrGAQ/original"
        />
      </div>
    </div>
  );
};
