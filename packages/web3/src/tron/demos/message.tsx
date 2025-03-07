import { ConnectButton, Connector } from '@ant-design/web3';
import { TronlinkWallet, TronWeb3ConfigProvider } from '@ant-design/web3-tron';
import { Flex } from 'antd';

import { SignMessage } from './components/SignMessage';

const Message = () => {
  return (
    <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
      <Flex justify="space-between" style={{ width: 386 }}>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignMessage
          signMessageCallback={(signMessageResult, address) => {
            console.log('signMessageResult', signMessageResult);
            console.log('useAddress', address);
          }}
        />
      </Flex>
    </TronWeb3ConfigProvider>
  );
};

export default Message;
