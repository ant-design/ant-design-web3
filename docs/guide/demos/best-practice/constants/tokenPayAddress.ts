// /constants/tokenPayAddress.ts
interface TokenInfo {
  name: string;
  icon: string;
  symbol: string;
  chains: {
    name: string;
    id?: number;
    decimals: number;
    ecosystem: string;
    address: string;
    txScan?: string;
    network?: string;
  }[];
}
export const TOKEN_PAY_ADDRESS: TokenInfo = {
  name: 'USDT',
  icon: 'https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*HkpaQoYlReEAAAAAAAAAAAAADiOMAQ/original',
  symbol: 'usdt',
  chains: [
    {
      name: 'Ethereum',
      id: 1,
      decimals: 6,
      ecosystem: 'ethereum',
      network: 'mainnet',
      txScan: 'https://etherscan.io/tx/',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
      name: 'Polygon',
      id: 137,
      decimals: 6,
      ecosystem: 'polygon',
      network: 'polygon',
      txScan: 'https://polygonscan.com/tx/',
      address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    },
    {
      name: 'Arbitrum',
      id: 42161,
      decimals: 6,
      ecosystem: 'arbitrum',
      network: 'arbitrum',
      txScan: 'https://arbiscan.io/tx/',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    },
    {
      name: 'Optimism',
      id: 10,
      decimals: 6,
      ecosystem: 'optimism',
      network: 'optimism',
      txScan: 'https://optimistic.etherscan.io/tx/',
      address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    },
  ],
};
