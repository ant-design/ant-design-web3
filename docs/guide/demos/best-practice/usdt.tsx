// /usdt.tsx
import React, { useState } from 'react';
import { Card, message, Space, Typography } from 'antd';

import { EvmPayButton } from './components/pay-button';
import ChainSelect from './components/select';
import { TOKEN_PAY_ADDRESS } from './constants/tokenPayAddress';

const { Title } = Typography;

const PaymentInUSDT: React.FC = () => {
  // token ecosystem
  const [tokenEcosystem, setTokenEcosystem] = useState<string>('');

  const onSubmitCashier = async (sign: (toAddress: string, amount: number) => void) => {
    // The address and amount are obtained from the backend service
    sign('0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76', 10);
  };

  const runPay = async (sign: string, address: string) => {
    message.success('Pay success');
  };

  return (
    <Card title="Payment in USDT">
      <Space direction="vertical" size="middle">
        <Title level={3}>Select Chain</Title>
        <ChainSelect ecosystem={tokenEcosystem} onChange={setTokenEcosystem} />
        <EvmPayButton
          setTokenEcosystem={setTokenEcosystem}
          tokenEcosystem={tokenEcosystem}
          signCallback={onSubmitCashier}
          payCallback={runPay}
          onRejectSwitchChain={(id) => {
            const oldTokenEcosystem = TOKEN_PAY_ADDRESS.chains.find(
              (item) => item.id === id,
            )?.ecosystem;
            setTokenEcosystem(oldTokenEcosystem || '');
          }}
        />
      </Space>
    </Card>
  );
};

export default PaymentInUSDT;
