import { useState } from 'react';
import { useAccount } from '@ant-design/web3';
import { Button, Divider, message } from 'antd';
import { useReadContract, useWriteContract } from 'wagmi';

const contractAddress = '0x8fab440bf0279695100c944e498c64fe612b2338';

const Mint = () => {
  const { account } = useAccount();
  const [mintSuccess, setMintSuccess] = useState(false);
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ type: 'uint256' }],
      },
    ],
    address: contractAddress,
    functionName: 'balanceOf',
    args: [account?.address as `0x${string}`],
  });
  const { writeContract } = useWriteContract();
  const hasMinted = result.data !== 0n || mintSuccess;

  return (
    <div>
      <Button
        style={{
          display: 'block',
          margin: '24px auto',
        }}
        type="primary"
        size="large"
        onClick={() => {
          if (hasMinted) {
            window.open(
              'https://magiceden.io/collections/base/0x8fab440bf0279695100c944e498c64fe612b2338',
              '_blank',
            );
            return;
          }
          writeContract(
            {
              abi: [
                {
                  type: 'function',
                  name: 'mint',
                  inputs: [],
                  outputs: [],
                },
              ],
              address: contractAddress,
              functionName: 'mint',
            },
            {
              onSuccess: () => {
                message.success('Mint Success');
                setMintSuccess(true);
              },
              onError: (err) => {
                message.error(err.message);
              },
            },
          );
        }}
      >
        {hasMinted ? 'View My SBT' : 'Mint Now!'}
      </Button>
      <Divider />
      <div
        style={{
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        <a href="https://basescan.org/address/0x8fab440bf0279695100c944e498c64fe612b2338">
          Contract
        </a>
        <Divider type="vertical" />
        <a href="https://magiceden.io/collections/base/0x8fab440bf0279695100c944e498c64fe612b2338">
          View SBT
        </a>
      </div>
    </div>
  );
};

export default Mint;
