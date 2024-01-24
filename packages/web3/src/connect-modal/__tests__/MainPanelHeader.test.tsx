import { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Grid } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import MainPanelHeader from '../components/MainPanelHeader';
import { connectModalContext, ConnectModalContextProvider } from '../context';

describe('MainPanelHeader test', async () => {
  const onPanelRouteBackCallTest = vi.fn();
  it('When canBack is true, the panelRouteBack function is triggered.', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });

    const App = () => {
      const {
        prefixCls,
        localeMessage,
        getMessage,
        updateSelectedWallet,
        updatePanelRoute,
        panelRoute,
      } = useContext(connectModalContext);
      return (
        <div>
          <ConnectModalContextProvider
            value={{
              panelRouteBack: onPanelRouteBackCallTest,
              prefixCls,
              canBack: true,
              localeMessage,
              getMessage,
              updateSelectedWallet,
              panelRoute,
              updatePanelRoute,
            }}
          >
            <MainPanelHeader title="title" onBack={() => Promise.resolve(true)} />
          </ConnectModalContextProvider>
        </div>
      );
    };
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back');
    fireEvent.click(btn!);
    await vi.waitFor(() => {
      expect(onPanelRouteBackCallTest).toBeCalled();
    });
  });
});
