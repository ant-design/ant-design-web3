import { NFTCard } from '@ant-design/web3';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <NFTCard
        name="My NFT"
        serialNumber={16}
        price={1.6}
        likes={300}
        showAction
        footer="This is footer"
        image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
      />
    </Space>
  );
};
