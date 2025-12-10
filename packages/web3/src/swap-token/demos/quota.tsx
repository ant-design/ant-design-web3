import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { FundFlowDirection, SwapToken } from '@ant-design/web3';
import { Typography } from 'antd';

import { mockTokenPairs } from './mockData';

const quotaToken = mockTokenPairs[0];

const App: React.FC = () => {
  const [direction, setDirection] = React.useState(FundFlowDirection.IN);
  const [loadingFee, setLoadingFee] = React.useState(false);

  const handleCalculateFee = async (valueIn?: string) => {
    if (!valueIn) return;
    setLoadingFee(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoadingFee(false);
  };

  return (
    <SwapToken
      swapIcon={<SwapOutlined style={{ fontSize: 18 }} />}
      tokens={[quotaToken]}
      token={quotaToken}
      switchToken={() => {}}
      fundFlowDirection={direction}
      switchFundFlowDirection={setDirection}
      showConnectButton={false}
      onCalculateFee={handleCalculateFee}
      loading={loadingFee}
      maxInputAmount={{
        symbol: quotaToken.symbol,
        amount: 800000000n,
      }}
      quota={{
        show: true,
        maxLimit: 50000000n,
        remainQuota: 32000000n,
      }}
      extraDesc={
        <Typography.Text type="secondary" style={{ paddingInline: 16 }}>
          Fees already include liquidity premium and network cost.
        </Typography.Text>
      }
      extraRenders={{
        upper: (balance) => (
          <Typography.Text type="secondary">Balance: {balance?.balance ?? '--'}</Typography.Text>
        ),
        under: (balance) => (
          <Typography.Text type="secondary">
            Arrival Est.: {balance?.balance ?? '--'}
          </Typography.Text>
        ),
      }}
      underButtonRender={() => (
        <Typography.Text type="secondary">Daily quota resets at 00:00 UTC.</Typography.Text>
      )}
    />
  );
};

export default App;
