import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { FundFlowDirection, SwapToken } from '@ant-design/web3';
import { Descriptions, message, Typography } from 'antd';
import Decimal from 'decimal.js';

import { mockTokenPairs } from './mockData';

const quotaDetails = [
  { label: 'Estimated Time', value: '15 ~ 25 mins' },
  { label: 'Network Fees (estimated)', value: '0 ETH' },
  { label: 'Security Proof', value: 'TEE Hardware Verification' },
  { label: 'Cross-chain Bridge Fees', value: '0.0000003 ETH' },
  { label: 'L2 Receiving Address', value: '0x178D09FFa89a4E27B74e4947AF445eF34B098773' },
] as const;
const App: React.FC = () => {
  const [selectedToken, setSelectedToken] = React.useState(mockTokenPairs[0]);
  const [direction, setDirection] = React.useState(FundFlowDirection.IN);
  const [summary, setSummary] = React.useState({
    valueIn: '0.00',
    valueOut: '0.00',
  });

  return (
    <SwapToken
      swapIcon={<SwapOutlined style={{ fontSize: 18 }} />}
      tokens={mockTokenPairs}
      token={selectedToken}
      switchToken={(token) => setSelectedToken(token ?? mockTokenPairs[0])}
      fundFlowDirection={direction}
      switchFundFlowDirection={setDirection}
      showConnectButton={false}
      estFeeRate="0.0035"
      estFee={new Decimal(250000)}
      extraDesc={
        <Descriptions
          column={1}
          size="small"
          colon={false}
          style={{ width: '100%', paddingInline: 16 }}
          contentStyle={{ textAlign: 'right' }}
        >
          {quotaDetails.map((item) => (
            <Descriptions.Item
              key={item.label}
              label={<Typography.Text type="secondary">{item.label}</Typography.Text>}
            >
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      }
      onValueOutChange={(valueIn, valueOut) =>
        setSummary({
          valueIn: valueIn ?? '0.00',
          valueOut: valueOut ?? '0.00',
        })
      }
      underButtonRender={() => (
        <>
          <div>Output already deducts bridge and liquidity fees.</div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              color: '#666',
            }}
          >
            <span>Input: {summary.valueIn}</span>
            <span>Output: {summary.valueOut}</span>
          </div>
        </>
      )}
      onButtonClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        message.success('Request sent');
      }}
    />
  );
};

export default App;
