import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { Button, Space } from 'antd';

import { useSwie } from './useSwie';

export default function App() {
  const { account } = useAccount();
  const { signLoading, signed, signIn, setSigned } = useSwie();

  return (
    <Space>
      <Connector
        modalProps={{
          mode: 'simple',
        }}
        onDisconnected={() => {
          setSigned(false);
        }}
        onConnected={(a) => signIn(a)}
      >
        <ConnectButton />
      </Connector>
      {!signed && account && (
        <Button
          type="primary"
          loading={signLoading}
          onClick={() => {
            signIn(account);
          }}
        >
          Sign
        </Button>
      )}
    </Space>
  );
}
