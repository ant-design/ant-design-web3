import { useCallback, useState } from 'react';
import { Account, ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-wagmi';
import { Button, message, Space } from 'antd';
import { createSiweMessage } from 'viem/siwe';
import { useSignMessage } from 'wagmi';

import { getNonce, verifyMessage } from './mock-api';

export default function App() {
  const { account } = useAccount();

  const [signed, setSigned] = useState<boolean>(false);
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { signMessageAsync } = useSignMessage();

  const signIn = useCallback(async (account?: Account) => {
    const address = account?.address as `0x${string}`;

    if (!address) {
      message.error('Please connect wallet first.');
      return;
    }

    // get nonce
    const nonce = await getNonce(address);
    if (!nonce) {
      message.error('Failed to get nonce.');
      return;
    }

    let msg: string;
    let signature: `0x${string}`;

    try {
      msg = createSiweMessage({
        domain: window.location.hostname,
        address,
        statement: 'Sign in with Ethereum',
        uri: window.location.origin,
        version: '1',
        chainId: Mainnet.id,
        nonce,
      });
      setSignLoading(true);
      console.log('signing message');
      signature = await signMessageAsync({ message: msg });
      console.log('get signature', signature);
      await verifyMessage(msg!, signature!);
      message.success('Sign in successfully.');
      setSigned(true);
      setSignLoading(false);
    } catch (error: any) {
      message.error(error.message);
      setSignLoading(false);
    }
  }, []);

  return (
    <Space>
      <Connector
        modalProps={{
          mode: 'simple',
        }}
        onDisconnected={() => {
          setSigned(false);
        }}
        onConnected={(account) => signIn(account)}
      >
        <ConnectButton />
      </Connector>
      {!signed && account ? (
        <Button
          type="primary"
          loading={signLoading}
          onClick={() => {
            signIn(account);
          }}
        >
          Sign
        </Button>
      ) : undefined}
    </Space>
  );
}
