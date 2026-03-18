---
nav: Components
order: 6
group:
  title: Hardware Wallets
  order: 2
tag:
  title: New
  color: success
---

# Ledger

Ledger hardware wallet adapter for Ant Design Web3.

Ant Design Web3 officially provides `@ant-design/web3-ledger` to support Ledger hardware wallets. It is an Ant Design Web3 Ledger adapter based on [Ledger Device Management Kit](https://github.com/LedgerHQ/device-sdk-ts). Ledger is a hardware wallet that provides secure storage for cryptocurrency private keys. This adapter integrates Ledger devices with Ant Design Web3 using the official Ledger SDK.

> Note: Currently, this adapter only supports the Ethereum app on Ledger devices.

## When to Use

- When you need to support hardware wallet for enhanced security
- For applications requiring physical signature confirmation
- When building DApps that prioritize security
- For enterprise applications with compliance requirements

## Installation

```bash
npm install @ant-design/web3 @ant-design/web3-ledger
```

## Code Demo

### Basic Usage

Connect to Ledger hardware wallet.

<code src="./demos/basic.tsx"></code>

## Prerequisites

### Browser Requirements

Ledger integration requires browsers supporting WebHID API:

- ✅ Chrome/Edge 89+
- ✅ Opera 76+
- ❌ Firefox (not supported)
- ❌ Safari (not supported)

### Device Setup

1. **Connect Device**: Plug Ledger into your computer via USB
2. **Unlock Device**: Enter PIN on the device
3. **Open App**: Navigate to and open the Ethereum app
4. **Grant Permissions**: Allow browser to access the device when prompted

## API

### LedgerWeb3ConfigProvider

| Property    | Description                 | Type      | Default        | Required |
| ----------- | --------------------------- | --------- | -------------- | -------- |
| ledger      | Ledger instance             | `Ledger`  | `new Ledger()` | No       |
| locale      | Internationalization        | `Locale`  | -              | No       |
| autoConnect | Auto-connect to last wallet | `boolean` | `false`        | No       |

### Ledger Class

The core class for interacting with Ledger hardware wallets.

```ts
import { Ledger } from '@ant-design/web3-ledger';

const ledger = new Ledger(name?, derivationPath?);
```

#### Constructor Parameters

| Parameter | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| name | Custom wallet name | `string` | `'Ledger'` | No |
| derivationPath | BIP44 derivation path for generating addresses | `string` | `"44'/60'/0'/0/0"` | No |

The default derivation path is `"44'/60'/0'/0/0"`. You can customize it to generate different addresses:

- `"44'/60'/0'/0/0"` - First Ethereum address (default)
- `"44'/60'/0'/0/1"` - Second Ethereum address
- `"44'/60'/1'/0/0"` - First address of second account

For more information about BIP44 derivation paths, please refer to [BIP44 Specification](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

#### Properties

| Property         | Description                 | Type                      |
| ---------------- | --------------------------- | ------------------------- |
| wallet           | Wallet configuration object | `Wallet`                  |
| sessionId        | Current device session ID   | `DeviceSessionId \| null` |
| accounts         | Connected accounts          | `LedgerAccount[]`         |
| derivationPath   | Current derivation path     | `string`                  |
| availableDevices | Device discovery manager    | `AvailableDevices`        |
| connectInstance  | Connection manager          | `Connect`                 |
| deviceStatus     | Device status monitor       | `DeviceStatus`            |
| appCommand       | App command manager         | `AppCommand`              |
| ethereumSigner   | Ethereum signing manager    | `EthereumSigner`          |

#### Methods

**connect(returnWhenNoDevice?: boolean): Promise\<void\>**

Connect to Ledger device and get the first account.

- `returnWhenNoDevice`: If `true`, throws error immediately when no device is available without triggering discovery

**disconnect(): Promise\<void\>**

Disconnect from Ledger device and clear all state.

**signMessage(message: string): Promise\<Signature\>**

Sign a plain text message.

**signTypedData(typedData: any): Promise\<Signature\>**

Sign EIP-712 typed data.

#### Types

**LedgerAccount**

```ts
interface LedgerAccount extends Account {
  address: string;
  path?: string; // Derivation path used for this account
}
```

**LedgerError**

```ts
class LedgerError extends Error {
  code: LedgerErrorCode;
  details?: string;
}

type LedgerErrorCode =
  | 'NO_DEVICE'
  | 'CONNECTION_FAILED'
  | 'ETHEREUM_APP_NOT_OPEN'
  | 'CANNOT_GET_ADDRESS'
  | 'NO_SESSION'
  | 'SIGN_MESSAGE_FAILED'
  | 'SIGN_TYPED_DATA_FAILED';
```

## Troubleshooting

### Common Issues

**Device Not Detected**

1. Verify WebHID is enabled in browser
2. Check USB connection
3. Update Ledger firmware
4. Ensure no other apps are using the device

**Connection Timeout**

1. Unlock the device
2. Open the Ethereum app
3. Check USB cable quality
4. Try a different USB port

**Signature Rejected**

1. Verify the message content on device screen
2. Ensure you're confirming the correct transaction
3. Check device battery level
4. Restart the device if frozen

## FAQ

### Which blockchain apps are supported?

Currently, only the **Ethereum app** on Ledger devices is supported. You must have the Ethereum app installed and opened on your Ledger device to use this adapter. Support for other blockchain apps (Bitcoin, Solana, etc.) may be added in future versions.

### Why isn't Firefox supported?

Firefox has not yet implemented the WebHID API which is required for communication with Ledger devices.

### Can I use Ledger with mobile browsers?

No, WebHID is currently only available in desktop browsers.

### How do I change the derivation path?

You can customize the derivation path when creating the Ledger instance:

```ts
import { Ledger } from '@ant-design/web3-ledger';

// Create Ledger instance with custom derivation path
const ledger = new Ledger('Ledger', "44'/60'/1'/0/0");
```

### Is it safe to use Ledger with web applications?

Yes, Ledger provides hardware-level security. Private keys never leave the device, and all transactions must be physically confirmed on the device screen.

## Related Resources

- [Ledger Developer Documentation](https://developers.ledger.com/)
- [WebHID API](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API)
- [Ethereum BIP44 Paths](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
