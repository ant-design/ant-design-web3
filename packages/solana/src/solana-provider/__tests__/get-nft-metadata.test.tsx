/* eslint-disable @typescript-eslint/consistent-type-imports */

import React from 'react';
import { useProvider } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { SolanaWeb3ConfigProvider } from '..';
import { WalletFactory } from '../../wallets/factory';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

const mockedData = vi.hoisted(() => {
  const mockAddress = '8dQE449ozUAS2XPyvao6hEpkAtGALo1A1q4TApayFfCo';
  const mockAddressShort = '8dQE44...FfCo';
  const mockTokenId = 1234n;

  return {
    address: {
      value: mockAddress,
      short: mockAddressShort,
    },
    tokenId: mockTokenId,
  };
});

vi.mock('@metaplex-foundation/js', async () => {
  const mfjs =
    await vi.importActual<typeof import('@metaplex-foundation/js')>('@metaplex-foundation/js');

  class NFTClient {
    findByMint(_input: { mintAddresss: any }) {
      return new Promise((resolve) => {
        return resolve({
          json: {
            name: 'test test',
            image: 'test image',
            description: 'test description',
            attributes: [{ trait_type: 'test trait_type', value: 'test value' }],
          },
        });
      });
    }
  }

  class Metaplex {
    constructor(public readonly connection: TestConnection) {}

    nfts() {
      return new NFTClient();
    }
  }

  return {
    ...mfjs,
    Metaplex,
  };
});

describe('GetNFTMetadata', () => {
  afterEach(() => {
    vi.resetModules();
  });

  it('could get nft metadata', async () => {
    let nftMetadata: any;
    const mockfn = vi.fn();

    const NFTMetadata: React.FC = () => {
      const { getNFTMetadata } = useProvider();
      return (
        <button
          className="btn"
          onClick={async () => {
            nftMetadata = await getNFTMetadata?.({
              address: mockedData.address.value,
              tokenId: mockedData.tokenId,
            });
            mockfn();
          }}
        >
          Get NFT Metadata
        </button>
      );
    };

    const App: React.FC = () => {
      return (
        <SolanaWeb3ConfigProvider
          wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
        >
          <NFTMetadata />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const btn = selector('.btn')!;
    fireEvent.click(btn);

    await vi.waitFor(() => {
      expect(mockfn).toBeCalled();
      expect(nftMetadata).toEqual({
        name: 'test test',
        image: 'test image',
        description: 'test description',
        attributes: [{ trait_type: 'test trait_type', value: 'test value' }],
      });
    });
  });
});
