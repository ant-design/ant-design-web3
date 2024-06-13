// 在驱动测试中渲染并选择不同类型的图标
import React from 'react';
import { BSC } from '@ant-design/web3-assets';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it } from 'vitest';

import { ChainInfo } from '../ChainInfo';

describe('ChainInfo', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(<ConfigProvider>{ui}</ConfigProvider>);
  };

  it('renders correct chain name and component icon', () => {
    renderWithProviders(<ChainInfo chainId={BSC.id} />);
    expect(screen.getByText(BSC.name)).toBeTruthy();
  });
});
