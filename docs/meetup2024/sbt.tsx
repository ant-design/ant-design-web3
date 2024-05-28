import { ConnectButton, Connector } from '@ant-design/web3';
import { Typography } from 'antd';
import { useAccount } from 'wagmi';

import MintBtn from './mint';

const { Title, Paragraph, Text, Link } = Typography;

const SBT: React.FC = () => {
  const { address } = useAccount();
  return (
    <div>
      <Title
        style={{
          textAlign: 'center',
          marginTop: 48,
        }}
      >
        Welcome to Ant Design Meetup 2024
      </Title>
      <Paragraph
        style={{
          textAlign: 'center',
          marginTop: 48,
        }}
      >
        🔥Immediately claim an SBT NFT🔥
      </Paragraph>
      <img
        style={{
          maxWidth: '80%',
          maxHeight: '360px',
          display: 'block',
          margin: '24px auto',
          // @ts-ignore
          '-webkit-box-reflect': 'below 2px linear-gradient(transparent, rgba(0, 0, 0, 15%))',
        }}
        src="https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*brRjT72GJPIAAAAAAAAAAAAADlrGAQ/original"
      />
      <div
        style={{
          textAlign: 'center',
          marginTop: 80,
        }}
      >
        <Connector
          modalProps={{
            mode: 'simple',
          }}
        >
          <ConnectButton type={address ? 'default' : 'primary'} size="large" />
        </Connector>
      </div>
      {address ? <MintBtn /> : null}
    </div>
  );
};

export default SBT;
