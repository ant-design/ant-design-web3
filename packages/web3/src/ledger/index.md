---
nav: Components
order: 9
group:
  title: Connect Blockchains
  order: 2
---

# Ledger

Ant Design Web3 provides `@ant-design/web3-ledger` for Ethereum and `@ant-design/web3-tron` Ledger support to integrate Ledger hardware wallets. Ledger provides hardware-level security where private keys never leave the device, and all transactions require physical confirmation on the device.

## Installation

For TRON with Ledger:

```bash
npm install @ant-design/web3 @ant-design/web3-tron --save
```

For Ethereum with Ledger, refer to the [@ant-design/web3-ledger documentation](https://web3.ant.design/components/ledger).

## Connect to TRON with Ledger

<code src='./demos/tron.tsx'></code>

## Prerequisites

- Chrome/Edge browser (WebHID support required)
- Ledger device connected via USB
- Device unlocked with TRON app open

## Features

- 🔐 **Hardware-level security**: Private keys never leave the Ledger device
- ✅ **Physical confirmation**: All transactions require device confirmation
- 📱 **Multi-chain support**: Works with TRON and Ethereum
- 🔒 **Secure signing**: Messages and transactions are signed on the device

## API

For detailed API documentation, please refer to:

- TRON: See [TronWeb3ConfigProvider](../tron/index.md#api)
- Ethereum: See [@ant-design/web3-ledger documentation](https://web3.ant.design/components/ledger)
