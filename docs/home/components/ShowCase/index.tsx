import styles from './index.module.less';
import ConnectButton from './ConnectButton';
import Address from './Address';
import Connect from './Connect';
import NFTCard from './NFTCard';

export default () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rich components, easy to choose</h3>
      <div className={styles.desc}>
        A large number of practical components to meet your needs, flexible customization and
        expansion
      </div>
      <div className={styles.componentList}>
        <ConnectButton />
        <Address />
        <NFTCard />
        <Connect />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerText}>Made with ❤ by</div>
        <div className={styles.footerDesc}>ANT DESIGN</div>
      </div>
    </div>
  );
};
