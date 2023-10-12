import { useNFT } from '@ant-design/web3';

export default () => {
  const { metadata } = useNFT('0x79fcdef22feed20eddacbb2587640e45491b757f', 42);
  return <div>{metadata.name}</div>;
};
