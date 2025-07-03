import { isAddress, keccak256, toUtf8Bytes } from 'ethers';

import { ChainType } from '../types';

/**
 * @param address - An address string
 * @desc 将以太坊地址转换为经过校验和处理后的以太坊地址。
 * @returns	The checksum address
 * @example
 * ```ts
 * toChecksumAddressWithEVM('0x237dfeca906991dc570595a8176bfe65be3e8a7e');
 * > "0x237DFECA906991dc570595A8176bfE65Be3E8A7E"
 * ```
 */
export function toChecksumAddressWithEVM(address: string) {
  if (!isAddress(address)) {
    console.error('address is not a valid address', address);
    return address;
  }

  const lowerCaseAddress = address.toLowerCase().replace(/^0x/i, '');
  // 经过 isAddress 校验后 keccak256 不需要判断 EIP-1052
  const hash = keccak256(toUtf8Bytes(lowerCaseAddress));
  let ret = '';

  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase();
    } else {
      ret += address[i];
    }
  }
  return ret;
}

/**
 * @param address - 需要校验和的地址字符串
 * @param chain - 区块链类型
 * @desc 根据不同的区块链类型对地址进行校验和处理。目前支持 EVM 链的校验和地址生成。
 * @returns 经过校验和处理的地址，对于不支持的链类型返回原地址
 * @example
 * ```ts
 * checksumAddress('0x237dfeca906991dc570595a8176bfe65be3e8a7e', ChainType.EVM);
 * > "0x237DFECA906991dc570595A8176bfE65Be3E8A7E"
 *
 * checksumAddress('0x1234567890abcdef', ChainType.SOLANA);
 * > "0x1234567890abcdef" // 返回原地址，因为 Solana 不支持校验和
 * ```
 */
export const checksumAddress = (address: string, chain: ChainType) => {
  switch (chain) {
    case ChainType.EVM: {
      return toChecksumAddressWithEVM(address);
    }
    default:
      console.warn(`checksumAddress: unsupported chain type ${chain}`);
      return address;
  }
};
