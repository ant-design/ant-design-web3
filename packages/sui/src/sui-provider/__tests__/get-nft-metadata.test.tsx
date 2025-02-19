import React from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SuiWeb3ConfigProvider } from '../../';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider get-nft-metadata tests', () => {
  const mockedDatas = vi.hoisted(() => {
    const nftObjectId = '0x1111111111111111111111111111111111111111111111111111111111111111';
    const otherObjectId = '0x2222222222222222222222222222222222222222222222222222222222222222';

    return {
      // fake address
      shortAddress: '0xa123...y123',
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
      nftObjectId,
      otherObjectId,

      fakeNFTMetadata: {
        [nftObjectId as string]: {
          objectId: nftObjectId,
          version: '301811406',
          digest: 'NUmE9PUso9gmXDA2SDy4t3AHaW1CtczYkLybG9yoFwy',
          display: {
            data: {
              description: 'My SuiFren!',
              image_url: `https://api-mainnet.suifrens.sui.io/suifrens/${nftObjectId}/svg`,
              link: `https://explorer.sui.io/object/${nftObjectId}/?network=mainnet`,
              project_url: 'https://suifrens.com',
            },
            error: null,
          },
          content: {
            dataType: 'moveObject',
            type: '0xee496a0cc04d06a345982ba6697c90c619020de9e274408c7819f787ff66e1a1::suifrens::SuiFren<0xee496a0cc04d06a345982ba6697c90c619020de9e274408c7819f787ff66e1a1::capy::Capy>',
            hasPublicTransfer: true,
            fields: {
              attributes: ['basic', '6FBBEE', '8CB7E3', 'happy', 'ear2'],
              birth_location: 'QA',
              birthdate: '1693830054320',
              cohort: 1,
              generation: '1',
              genes: [
                8, 191, 135, 56, 217, 153, 103, 80, 227, 7, 236, 133, 205, 176, 44, 177, 173, 90,
                140, 144, 81, 193, 171, 208, 7, 23, 128, 40, 167, 239, 47, 248,
              ],
              id: {
                id: nftObjectId,
              },
            },
          },
        },

        [otherObjectId as string]: {
          objectId: otherObjectId,
          version: '301811406',
          digest: 'NUmE9PUso9gmXDA2SDy4t3AHaW1CtczYkLybG9yoFwy',
          display: {
            data: {
              description: 'My SuiFren!',
              image_url: `https://api-mainnet.suifrens.sui.io/suifrens/${otherObjectId}/svg`,
              link: `https://explorer.sui.io/object/${otherObjectId}/?network=mainnet`,
              project_url: 'https://suifrens.com',
            },
            error: null,
          },
          content: {
            dataType: 'package',
            type: '0xee496a0cc04d06a345982ba6697c90c619020de9e274408c7819f787ff66e1a1::suifrens::SuiFren<0xee496a0cc04d06a345982ba6697c90c619020de9e274408c7819f787ff66e1a1::capy::Capy>',
            hasPublicTransfer: true,
            fields: {
              attributes: ['basic', '6FBBEE', '8CB7E3', 'happy', 'ear2'],
              birth_location: 'QA',
              birthdate: '1693830054320',
              cohort: 1,
              generation: '1',
              genes: [
                8, 191, 135, 56, 217, 153, 103, 80, 227, 7, 236, 133, 205, 176, 44, 177, 173, 90,
                140, 144, 81, 193, 171, 208, 7, 23, 128, 40, 167, 239, 47, 248,
              ],
              id: {
                id: otherObjectId,
              },
            },
          },
        },
      },
    };
  });

  const mockedQueryFetch = vi.hoisted(() => {
    return {
      getObject: (params: { id: string; options: any }) => {
        return {
          data: mockedDatas.fakeNFTMetadata[params.id],
        };
      },
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');
    const { remember } = await import('./utils');

    const accountRef = remember<string | undefined>(mockedDatas.address);

    return {
      ...originModules,
      useCurrentAccount: () => {
        return accountRef.value
          ? {
              address: accountRef.value,
            }
          : undefined;
      },
      useSuiClient: () => {
        return mockedQueryFetch;
      },
    };
  });

  it('available get nft metadata', async () => {
    const mockNFTCallback = vi.fn();
    const mockOtherCallback = vi.fn();

    const CheckNFTMetadata = () => {
      const { getNFTMetadata } = useProvider();

      return (
        <button
          type="button"
          className="get-nft-metadata"
          onClick={async () => {
            const nftMetadata = await getNFTMetadata?.({
              address: mockedDatas.nftObjectId,
            });

            const otherMetadata = await getNFTMetadata?.({
              address: mockedDatas.otherObjectId,
            });

            mockNFTCallback(JSON.stringify(nftMetadata));
            mockOtherCallback(JSON.stringify(otherMetadata));
          }}
        >
          Get NFT Metadata
        </button>
      );
    };
    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <CheckNFTMetadata />
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const btn = selector('.get-nft-metadata')!;
    fireEvent.click(btn);

    const mapTo = (objectData: any) => {
      const displayData = objectData?.display?.data;
      const objectFields: Record<string, any> | undefined =
        objectData?.content?.dataType === 'moveObject' ? objectData.content.fields : undefined;

      const expectData = {
        image: displayData?.image_url,
        date: objectFields?.birthdate,
        attributes: objectFields?.attributes,
        description: displayData?.description,
        edition: objectData?.version,
      };

      return expectData;
    };

    await vi.waitFor(() => {
      // if moveObject
      const nftData = mockedDatas.fakeNFTMetadata[mockedDatas.nftObjectId];
      const expectNFTData = mapTo(nftData);
      expect(mockNFTCallback).toBeCalledWith(JSON.stringify(expectNFTData));

      // else
      const otherData = mockedDatas.fakeNFTMetadata[mockedDatas.otherObjectId];
      const expectOtherData = mapTo(otherData);
      expect(mockOtherCallback).toBeCalledWith(JSON.stringify(expectOtherData));
    });
  });
});
