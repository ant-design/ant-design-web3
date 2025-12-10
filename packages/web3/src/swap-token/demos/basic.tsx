import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { FundFlowDirection, SwapToken } from '@ant-design/web3';
import { message, Typography } from 'antd';

import { mockTokenPairs } from './mockData';

const App: React.FC = () => {
  const [selectedToken, setSelectedToken] = React.useState(mockTokenPairs[0]);
  const [direction, setDirection] = React.useState(FundFlowDirection.IN);

  return (
    <SwapToken
      swapIcon={<SwapOutlined style={{ fontSize: 18, transform: 'rotate(90deg)' }} />}
      tokens={mockTokenPairs}
      token={selectedToken}
      switchToken={(token) => setSelectedToken(token ?? mockTokenPairs[0])}
      fundFlowDirection={direction}
      switchFundFlowDirection={setDirection}
      showConnectButton={false}
      btnText="Swap Now"
      title={{
        in: 'Send',
        out: 'Receive',
      }}
      onButtonClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 600));
        message.success('Swap submitted');
      }}
      extra={(tokenPair, valueIn, valueOut) => (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            color: '#666',
          }}
        >
          <span>
            {tokenPair[0]?.symbol ?? '--'}: {valueIn || '--'}
          </span>
          <span>
            {tokenPair[1]?.symbol ?? '--'}: {valueOut || '--'}
          </span>
        </div>
      )}
      underButtonRender={() => (
        <Typography.Text type="secondary">
          Route: {selectedToken?.fromToken?.name} → {selectedToken?.toToken?.name}
        </Typography.Text>
      )}
    />
  );
};

export default App;
