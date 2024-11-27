import { describe, expect, it } from 'vitest';

import { Solana, SolanaDevnet, SolanaTestnet } from '../chains';

describe('Solana browser link', () => {
  it('url is correct', () => {
    const pk = '4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t';
    const tx =
      '48yFNeh7dfX2rVb3KzYWgNR8r9RKttAGbwpw4ZLypHnQ3qaT8dGDA8KvTEorYx6GBBiCGsVYkhyECiyn7XqYwQyu';

    // devnet
    let getLink = SolanaDevnet.browser!.getBrowserLink!;

    expect(getLink(pk, 'address')).toBe(`https://explorer.solana.com/address/${pk}?cluster=devnet`);
    expect(getLink(tx, 'transaction')).toBe(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);

    // testnet
    getLink = SolanaTestnet.browser!.getBrowserLink!;

    expect(getLink(pk, 'address')).toBe(
      `https://explorer.solana.com/address/${pk}?cluster=testnet`,
    );
    expect(getLink(tx, 'transaction')).toBe(`https://explorer.solana.com/tx/${tx}?cluster=testnet`);

    // mainnet
    getLink = Solana.browser!.getBrowserLink!;

    expect(getLink(pk, 'address')).toBe(`https://explorer.solana.com/address/${pk}`);
    expect(getLink(tx, 'transaction')).toBe(`https://explorer.solana.com/tx/${tx}`);
  });
});
