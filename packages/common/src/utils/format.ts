export function fillAddressWith0x(address: string): `0x${string}` {
  return (address.startsWith('0x') ? address : `0x${address}`) as `0x${string}`;
}

export function parseNumberToBigint(num?: number | bigint) {
  if (num === undefined) return undefined;
  return typeof num !== 'bigint' ? BigInt(num) : num;
}
