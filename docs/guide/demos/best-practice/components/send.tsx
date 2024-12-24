// /components/send.tsx
import React, { useEffect, useState } from 'react';
import { useAccount } from '@ant-design/web3';
import { parseAbi, parseUnits } from 'viem';
import { useChainId, useSwitchChain, useWriteContract } from 'wagmi';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

type SignTransactionProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signTransaction: (signTransfer: string, address: string) => void;
  renderSignButton: (
    signTransfer: (toAddress: string, amount: number) => void,
    disabled: boolean,
    loading: boolean,
  ) => React.ReactNode;
  onRejectSwitchChain?: (id: number) => void;
};

const EvmSignTransaction: React.FC<SignTransactionProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signTransaction,
  renderSignButton,
  onRejectSwitchChain,
}) => {
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { account } = useAccount();

  useEffect(() => {
    if (account?.address) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const changeChainId = chainList.find((item) => item.ecosystem === tokenEcosystem)?.id;
      if (changeChainId && changeChainId !== chainId) {
        switchChain?.(
          { chainId: changeChainId },
          {
            onError: (error) => {
              if (error.message.includes('User rejected')) {
                onRejectSwitchChain?.(chainId);
              }
            },
          },
        );
      }
    }
  }, [tokenEcosystem, account]);

  useEffect(() => {
    if (chainId && !tokenEcosystem) {
      const chainList = TOKEN_PAY_ADDRESS.chains;
      const initTokenEcosystem = chainList.find((item) => item.id === chainId)?.ecosystem;
      if (initTokenEcosystem && account) {
        setTokenEcosystem?.(initTokenEcosystem);
      } else {
        setTokenEcosystem?.(chainList[0].ecosystem);
      }
    }
  }, [account]);

  const signTransfer = async (toAddress: string, amount: number) => {
    try {
      setSignLoading(true);
      // transfer ABI
      // {
      //   "constant": false,
      //   "inputs": [
      //     { "name": "_to", "type": "address" },
      //     { "name": "_value", "type": "uint256" }
      //   ],
      //   "name": "transfer",
      //   "outputs": [],
      //   "payable": false,
      //   "stateMutability": "nonpayable",
      //   "type": "function"
      // },
      const decimals = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.decimals;
      const contractAddress = TOKEN_PAY_ADDRESS.chains.find(
        (item) => item.ecosystem === tokenEcosystem,
      )?.address;
      const signTransferHash = await writeContractAsync({
        abi: parseAbi(['function transfer(address _to, uint256 _value)']),
        address: contractAddress as `0x${string}`,
        functionName: 'transfer',
        args: [
          toAddress.toLocaleLowerCase() as `0x${string}`,
          parseUnits(amount.toString(), decimals!),
        ],
      });
      setSignLoading(false);
      signTransaction?.(signTransferHash, account?.address || '');
    } catch (error) {
      console.log('error', (error as any).message);
      setSignLoading(false);
    }
  };

  return <div>{renderSignButton(signTransfer, !account, signLoading)}</div>;
};
export default EvmSignTransaction;
