import { NFTImage } from '@ant-design/web3';

const App: React.FC = () => {
  return (
    <NFTImage
      address="0x79fcdef22feed20eddacbb2587640e45491b757f"
      tokenId={42n}
      width={200}
      getNFTMetadata={({ address: _address, tokenId: _tokenId }) => {
        return Promise.resolve({
          name: `Test_${_address}_${_tokenId}`,
          image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        });
      }}
    />
  );
};

export default App;
