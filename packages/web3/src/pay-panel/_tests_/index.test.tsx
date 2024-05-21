// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, expect, it, vi } from 'vitest';
// import { ConfigProvider } from 'antd';
// import { PayPanel } from '../index';

// describe('PayPanel', () => {
//   const defaultProps = {
//     amount: 1000,
//     target: {
//       '1': {
//         address: '0x123',
//         chain: { id: 1, name: 'Ethereum', type: 'ethereum' },
//       },
//     },
//     token: {
//       name: 'Mock Token',
//       symbol: 'MTK',
//       icon: '',
//       decimal: 18,
//       channels: [
//         {
//           chain: { id: 1, name: 'Ethereum', type: 'ethereum'},
//           contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
//         },
//         {
//           chain: { id: 56, name: 'BSC', type: 'bsc'},
//           contract: '0x55d398326f99059ff775485246999027b3197955',
//         },
//       ],
//     },
//     wallets: [
//       {
//         icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
//         name: 'Test Wallet',
//         remark: '备注',
//         app: {
//           link: 'https://test.com/xxx',
//         },
//         extensions: [
//           {
//             key: 'Chrome',
//             link: 'https://test.com/xxx',
//             browserIcon:
//               'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
//             browserName: 'Chrome',
//             description: 'Access your wallet right from your favorite web browser.',
//           },
//           {
//             key: 'Firefox',
//             link: 'https://test.com/xxx',
//             browserIcon:
//               'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
//             browserName: 'Firefox',
//             description: 'Access your wallet right from your favorite web browser.',
//           },
//         ],
//         group: 'Popular',
//       },
//     ],
//     onFinish: vi.fn(),
//   };
//   const ConfigProviderWrapper = ({ children }) => (
//     <ConfigProvider>{children}</ConfigProvider>
//   );

//   it('calls onFinish correctly when finished', async () => {
//     render(
//       <PayPanel {...defaultProps} />,
//       { wrapper: ConfigProviderWrapper }
//     );

//     // 模拟完成支付，需要根据 ShowCode 组件的实际UI来模拟用户行为，以下仅为示例
//     const finishButton = screen.getByText('Already paid');
//     fireEvent.click(finishButton);

//     expect(defaultProps.onFinish).toHaveBeenCalled();
//   });
// });
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { PayPanel } from '../index';
import type { PayPanelProps } from '../PayPanelContext';

describe('PayPanel', () => {
  const defaultProps: PayPanelProps = {
    amount: 1000,
    target: {
      '1': {
        address: '0x123',
        chain: { id: 1, name: 'Ethereum', type: 'ethereum' },
      },
    },
    token: {
      name: 'Mock Token',
      symbol: 'MTK',
      icon: '',
      decimal: 18,
      channels: [],
    },
    wallets: [
      { name: 'Mock Wallet', icon: '', supportChainTypes: ['ethereum'] },
    ],
    onFinish: vi.fn(),
  };

  const getComponent = (props: PayPanelProps = defaultProps) => {
    return render(
      <ConfigProvider>
        <PayPanel {...props} />
      </ConfigProvider>
    );
  };

  beforeEach(() => {
    defaultProps.onFinish.mockReset();
  });

  it('renders ChainList when no chain is selected', () => {
    getComponent();
    // 验证 ChainList 是否正确渲染
    expect(screen.getByTestId('chain-list')).toBeTruthy();
  });

  it('renders ShowCode when a chain is selected', () => {
    getComponent();
    // 模拟选择链
    fireEvent.click(screen.getByText(/Ethereum/)); // 假设ChainList里有"Ethereum"可以点击
    expect(screen.getByTestId('show-code')).toBeTruthy();
  });

  it('calls onReturn when clicking on the return button', () => {
    getComponent();
    // 模拟选择链，然后触发返回
    fireEvent.click(screen.getByText(/Ethereum/));
    fireEvent.click(screen.getByText(/Return/)); // 假设ShowCode里有"Return"可以点击
    expect(screen.getByTestId('chain-list')).toBeTruthy();
  });

  it('calls onFinish when clicking on the finish button', () => {
    getComponent();
    // 模拟选择链
    fireEvent.click(screen.getByText(/Ethereum/));
    // 模拟点击已经支付按钮
    fireEvent.click(screen.getByText(/Already paid/));
    expect(defaultProps.onFinish).toHaveBeenCalled();
  });

});
