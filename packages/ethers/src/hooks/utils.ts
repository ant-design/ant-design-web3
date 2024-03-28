import * as ethers from 'ethers';
import * as ethers5 from 'ethers5';

export const isEthersV5 = () => ethers.version && ethers.version.startsWith('5.');

export const FallbackProvider = isEthersV5()
  ? ethers5.providers.FallbackProvider
  : ethers.FallbackProvider;

export const JsonRpcProvider = isEthersV5()
  ? ethers5.providers.JsonRpcProvider
  : ethers.JsonRpcProvider;

export const BrowserProvider = isEthersV5()
  ? ethers5.providers.Web3Provider
  : ethers.BrowserProvider;
