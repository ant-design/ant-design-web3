import React from 'react';
import { useProvider } from '@ant-design/web3';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/react';

import { SuiWeb3ConfigProvider } from '../../';
import { wait, xrender } from './utils';

describe('SuiWeb3ConfigProvider balance tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
      // fake address
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
    };
  });

  const mockedQueryFetch = vi.hoisted(() => {
    return {
      getBalance: (params: { owner: string; coinType: string }) => {
        const balanceByOwner = {
          [mockedDatas.address]: '100',
        };

        return {
          totalBalance: balanceByOwner[params.owner],
        };
      },
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');

    return {
      ...originModules,
      useCurrentAccount: () => {
        return {
          address: mockedDatas.address,
        };
      },

      useSuiClientQuery: (method: keyof typeof mockedQueryFetch, params?: any, options?: any) => {
        const [data, setData] = React.useState(null);
        const fetcher = mockedQueryFetch[method];

        const fetchRunner = React.useCallback(async () => {
          // mock network delay
          await wait(30);

          const result = fetcher(params);
          const selectedResult =
            typeof options.select === 'function' ? options.select(result) : result;

          setData(selectedResult);
        }, [fetcher, options, params]);

        React.useEffect(() => {
          fetchRunner();
        }, [method, params, fetchRunner]);

        return {
          data,
        };
      },
    };
  });

  it('available show balance', async () => {
    const Balance: React.FC = () => {
      const { balance } = useProvider();

      return <div className="shown-balance">{balance?.value?.toString()}</div>;
    };

    const App = () => (
      <SuiWeb3ConfigProvider balance>
        <div className="content">test</div>
        <Balance />
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    await vi.waitFor(() => {
      expect(selector('.shown-balance')?.textContent).toBe('100');
    });
  });
});
