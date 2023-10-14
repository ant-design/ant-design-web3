import { Address } from '@ant-design/web3';

export default () => {
  return (
    <Address
      ellipsis={{
        showHead: 8,
        showTail: 6,
      }}
      copyable
      address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
    />
  );
};
