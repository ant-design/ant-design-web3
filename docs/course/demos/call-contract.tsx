import { Address, ConnectButton, Connector, NFTCard } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, message } from 'antd';
import { parseEther } from 'viem';
import { createConfig, http, useReadContract, useWriteContract } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

const CallTest = () => {
  const result = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [{ name: 'supply', type: 'uint256' }],
      },
    ],
    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
    functionName: 'totalSupply',
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

export default () => {
  return (
    <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
      <Connector>
        <ConnectButton />
      </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
};
