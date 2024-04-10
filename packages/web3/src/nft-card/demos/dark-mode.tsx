import { NFTCard } from '@ant-design/web3';
import { ConfigProvider, Space, theme } from 'antd';

const { darkAlgorithm } = theme;

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Space size={16}>
        <NFTCard
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
        <NFTCard
          type="pithy"
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
      </Space>
    </ConfigProvider>
  );
};

export default App;
