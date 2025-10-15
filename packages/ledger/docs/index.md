---
nav: Components
group: Adapter
order: 10
---

# Ledger

Ledger hardware wallet adapter for Ant Design Web3.

Ledger is a hardware wallet that provides secure storage for cryptocurrency private keys. This adapter integrates Ledger devices with Ant Design Web3 using the official Ledger SDK.

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

<code src="./basic.tsx"></code>

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

| Property    | Description                 | Type              | Default | Version |
| ----------- | --------------------------- | ----------------- | ------- | ------- |
| wallets     | Supported wallet list       | `WalletFactory[]` | `[]`    | -       |
| locale      | Internationalization        | `Locale`          | -       | -       |
| balance     | Display balance             | `boolean`         | `false` | -       |
| autoConnect | Auto-connect to last wallet | `boolean`         | `false` | -       |

### Ledger Wallet

```tsx
import { Ledger } from '@ant-design/web3-ledger';

const wallet = Ledger();
```

Ledger hardware wallet factory function.

### Hooks

#### useAvailableDevices

Monitor and discover Ledger devices.

```tsx
import { useAvailableDevices } from '@ant-design/web3-ledger';

const { devices, discover, isDiscovering } = useAvailableDevices();
```

**Returns:**

- `devices`: Array of discovered devices
- `discover`: Function to manually trigger device discovery
- `isDiscovering`: Boolean indicating if discovery is in progress

#### useConnect

Manage device connection.

```tsx
import { useConnect } from '@ant-design/web3-ledger';

const { sessionId, connect, disconnect, isConnecting, isDisconnecting } = useConnect();
```

**Returns:**

- `sessionId`: Current session ID if connected
- `connect`: Function to connect to a device
- `disconnect`: Function to disconnect
- `isConnecting`: Boolean for connection status
- `isDisconnecting`: Boolean for disconnection status

#### useDeviceStatus

Monitor device status and current app.

```tsx
import { useDeviceStatus } from '@ant-design/web3-ledger';

const { deviceStatus, currentApp } = useDeviceStatus({ sessionId });
```

**Returns:**

- `deviceStatus`: Current device status (CONNECTED, LOCKED, BUSY, etc.)
- `currentApp`: Name of currently open app on device

#### useEthereumSigner

Interact with Ethereum on Ledger.

```tsx
import { useEthereumSigner } from '@ant-design/web3-ledger';

const {
  address,
  isLoadingAddress,
  signMessage,
  signTypedData,
  isSigningMessage,
  isSigningTypedData,
} = useEthereumSigner({ sessionId, derivationPath: "44'/60'/0'/0/0" });
```

**Returns:**

- `address`: Current Ethereum address
- `isLoadingAddress`: Loading state for address
- `signMessage`: Function to sign plain messages
- `signTypedData`: Function to sign EIP-712 typed data
- `isSigningMessage`: Signing state for messages
- `isSigningTypedData`: Signing state for typed data

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

### Why isn't Firefox supported?

Firefox has not yet implemented the WebHID API which is required for communication with Ledger devices.

### Can I use Ledger with mobile browsers?

No, WebHID is currently only available in desktop browsers.

### How do I change the derivation path?

You can customize the derivation path when using the Ethereum signer hook:

```tsx
const { address } = useEthereumSigner({
  sessionId,
  derivationPath: "44'/60'/1'/0/0", // Custom path
});
```

### Is it safe to use Ledger with web applications?

Yes, Ledger provides hardware-level security. Private keys never leave the device, and all transactions must be physically confirmed on the device screen.

## Related Resources

- [Ledger Developer Documentation](https://developers.ledger.com/)
- [WebHID API](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API)
- [Ethereum BIP44 Paths](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
