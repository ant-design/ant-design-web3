export function fillAddressWith0x(address: string): `0x${string}` {
  return (address.startsWith('0x') ? address : `0x${address}`) as `0x${string}`;
}
