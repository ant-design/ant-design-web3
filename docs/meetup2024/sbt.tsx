import { ConnectButton, Connector } from '@ant-design/web3';
import { Divider, Typography } from 'antd';
import { useAccount } from 'wagmi';

import MintBtn from './mint';

const { Title, Paragraph } = Typography;

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
        aria-label="Ant Design Meetup 2024"
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

      <div
        style={{
          textAlign: 'center',
          margin: 24,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://basescan.org/address/0x8fab440bf0279695100c944e498c64fe612b2338"
        >
          Contract
        </a>
        <Divider type="vertical" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opensea.io/collection/antdesignmeetup2024"
        >
          View SBT
        </a>
        <Divider type="vertical" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ant-design/ant-design-web3/tree/main/docs/meetup2024"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default SBT;
