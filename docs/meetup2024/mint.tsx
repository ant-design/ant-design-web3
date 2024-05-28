import { useAccount } from '@ant-design/web3';
import { Button, message } from 'antd';
import { useReadContract, useWriteContract } from 'wagmi';

const contractAddress = '0x8fab440bf0279695100c944e498c64fe612b2338';

const Mint = () => {
  const { account } = useAccount();
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
  const hasMinted = result.data !== 0n;

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
              'https://basescan.org/address/0x8fab440bf0279695100c944e498c64fe612b2338',
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
    </div>
  );
};

export default Mint;
