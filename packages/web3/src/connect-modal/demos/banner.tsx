import React from 'react';
import { ConnectModal, Web3ConfigProvider } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { Alert, Button, Checkbox, Space, theme, Typography } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
  metadata_WalletConnect,
  metadata_TokenPocket,
  metadata_Trust,
];

// Define banner height (in pixels)
const BANNER_HEIGHT = 48;

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [termsAgreed, setTermsAgreed] = React.useState(false);
  const { token } = theme.useToken();

  return (
    <Web3ConfigProvider
      theme={{
        web3Components: {
          ConnectModal: {
            walletListHeight: 436 - BANNER_HEIGHT,
          },
        },
      }}
    >
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with terms agreement banner
      </Button>
      <ConnectModal
        open={open}
        walletList={walletList}
        onCancel={() => {
          setOpen(false);
          setTermsAgreed(false);
        }}
        disabled={!termsAgreed}
        banner={
          <div
            style={{
              height: BANNER_HEIGHT - 16,
              backgroundColor: token.colorPrimaryBg,
              margin: '8px 20px',
              paddingInline: 8,
              display: 'flex',
              alignItems: 'center',
              borderRadius: token.borderRadius,
              borderLeft: `4px solid ${token.colorPrimary}`,
              boxShadow: token.boxShadowTertiary,
            }}
          >
            <Checkbox checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)}>
              <Typography.Text
                strong
                style={{
                  fontSize: token.fontSizeSM,
                  color: token.colorTextSecondary,
                }}
              >
                I have read and agree to the{' '}
                <Typography.Link href="https://zan.top/" target="_blank" rel="noopener noreferrer">
                  terms
                </Typography.Link>
                .
              </Typography.Text>
            </Checkbox>
          </div>
        }
      />
    </Web3ConfigProvider>
  );
};

export default App;
