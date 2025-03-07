import { ConnectButton, Connector } from '@ant-design/web3';
import { TronlinkWallet, TronWeb3ConfigProvider } from '@ant-design/web3-tron';
import { Flex } from 'antd';

import { SignTransaction } from './components/SignTransaction';

const Transaction = () => {
  return (
    <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
      <Flex justify="space-between" style={{ width: 386 }}>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignTransaction
          contractAddress="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
          toAddress="TUguNkmfvjeHanGyQZLGJfj28w1tMtvNDT"
          amount={1}
          signTransactionCallback={(signTransferResult, address) => {
            console.log('signTransferResult', signTransferResult);
            console.log('useAddress', address);
          }}
        />
      </Flex>
    </TronWeb3ConfigProvider>
  );
};

export default Transaction;
