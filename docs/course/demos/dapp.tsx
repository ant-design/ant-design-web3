import { Address, ConnectButton, Connector, NFTCard, useAccount } from '@ant-design/web3';
import { Goerli, MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { createConfig, http, useReadContract, useWriteContract } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet, goerli],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

const CallTest = () => {
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
    // Goerli test contract 0x418325c3979b7f8a17678ec2463a74355bdbe72c
    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
    functionName: 'balanceOf',
    args: [account?.address as `0x${string}`],
  });
  const { writeContract } = useWriteContract();

  return (
    <div>
      {result.data?.toString()}
      <Button
        onClick={() => {
          writeContract(
            {
              abi: [
                {
                  type: 'function',
                  name: 'mint',
                  stateMutability: 'payable',
                  inputs: [
                    {
                      internalType: 'uint256',
                      name: 'quantity',
                      type: 'uint256',
                    },
                  ],
                  outputs: [],
                },
              ],
              address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
              functionName: 'mint',
              args: [1],
              value: parseEther('0.01'),
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
        mint
      </Button>
    </div>
  );
};

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider config={config} chains={[Goerli]} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
}
