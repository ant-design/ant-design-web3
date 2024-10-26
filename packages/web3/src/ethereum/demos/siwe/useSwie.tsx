import { useCallback, useState } from 'react';
import { Account, useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-wagmi';
import { message } from 'antd';
import { useSignMessage } from 'wagmi';

const DefaultSignInfo = {};

export const useSwie = () => {
  const { swie } = useProvider();
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { signMessageAsync } = useSignMessage();
  const [signed, setSigned] = useState<boolean>(false);

  const signIn = useCallback(async (a?: Account) => {
    if (!swie) return;

    const { getNonce, createMessage, verifyMessage } = swie;

    const address = a?.address as `0x${string}`;

    if (!address) {
      message.error('Please connect wallet first.');
      return;
    }

    // get nonce
    const nonce = await getNonce?.(address);
    if (!nonce) {
      message.error('Failed to get nonce.');
      return;
    }

    let msg: string;
    let signature: `0x${string}`;

    try {
      msg = createMessage({
        domain: window.location.hostname,
        address,
        uri: window.location.origin,
        nonce,
        // Default config
        version: '1',
        chainId: Mainnet.id,
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

  return {
    signLoading,
    signed,
    signIn,
    setSigned,
  };
};
