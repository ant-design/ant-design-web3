import { BrowserLink } from '@ant-design/web3';
// TODO use web3 icons
import { LinkOutlined } from '@ant-design/icons';

export default () => {
  return (
    <BrowserLink icon={<LinkOutlined />} address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />
  );
};
