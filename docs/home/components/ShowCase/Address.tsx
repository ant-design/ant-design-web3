import styles from './index.module.less';
import { Address } from '@ant-design/web3';
import { Space } from 'antd';

export default () => {
  return (
    <div className={styles.cardBg}>
      <span className={styles.title}>Address</span>
      <Space direction="vertical" size={32}>
        <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />
        <Address
          ellipsis={{
            headClip: 4,
            tailClip: 4,
          }}
          copyable
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        />
        <div>
          default format:{' '}
          <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format={true} />
        </div>
      </Space>
    </div>
  );
};
