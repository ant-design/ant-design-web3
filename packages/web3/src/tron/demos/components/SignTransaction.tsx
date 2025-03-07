import React, { useState } from 'react';
import { useWallet } from '@ant-design/web3-tron';
import { Button } from 'antd';
import { parseUnits } from 'viem';

type SignTransactionProps = {
  toAddress: string;
  contractAddress: string;
  amount: number;
  signTransactionCallback?: (signTransferResult: string, address: string) => void;
};

export const SignTransaction: React.FC<SignTransactionProps> = ({
  toAddress,
  contractAddress,
  amount,
  signTransactionCallback,
}) => {
  const { connected, signTransaction, address } = useWallet();

  const [signLoading, setSignLoading] = useState<boolean>(false);

  const signTransfer = async () => {
    try {
      setSignLoading(true);
      // 构建交易体
      const functionSelector = 'transfer(address,uint256)';
      const parameter = [
        { type: 'address', value: toAddress },
        { type: 'uint256', value: parseUnits(amount.toString(), 6) },
      ];
      const tron = (window as any).tron;
      const tronWeb = tron.tronWeb;
      const tx = await tronWeb.transactionBuilder.triggerSmartContract(
        contractAddress,
        functionSelector,
        {},
        parameter,
      );
      // 为打包好的交易签名
      const transfer = await signTransaction(tx.transaction);
      // 发送这笔已经签名过的交易
      const result = await tronWeb.trx.sendRawTransaction(transfer);
      setSignLoading(false);
      signTransactionCallback?.(result.txid, address || '');
    } catch (error) {
      setSignLoading(false);
    }
  };
  return (
    <Button
      type="primary"
      style={{ width: 200 }}
      loading={signLoading}
      disabled={!connected}
      onClick={() => {
        signTransfer();
      }}
    >
      Pay
    </Button>
  );
};
