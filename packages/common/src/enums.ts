export enum ChainIds {
  Mainnet = 1,
  Polygon = 137,
  BSC = 56,
  Arbitrum = 42_161,
  Optimism = 10,
  Goerli = 5,
  Avalanche = 43_114,
  X1Testnet = 195,
  Sepolia = 11_155_111,
  Holesky = 17_000,
  Scroll = 534_352,
  ScrollSepolia = 534_351,
  Hardhat = 31_337,
  Localhost = 1_337,
}

export enum SolanaChainIds {
  MainnetBeta = 2,
  Devnet = 3,
  Testnet = 4,
}

export enum SuiChainIds {
  Mainnet = 1,
  Testnet = 2,
  Devnet = 3,
  Localnet = 4,
}

export enum ChainType {
  /**
   * Ethereum virtual machine and EVM compatible chains
   */
  EVM = 'EVM',

  /**
   * Solana virtual machine
   */
  SVM = 'SVM',

  /**
   * Bitcoin chain
   */
  Bitcoin = 'Bitcoin',

  /**
   * Sui chain
   */
  Sui = 'Sui',
}
