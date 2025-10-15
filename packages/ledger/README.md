# @ant-design/web3-ledger

This package provides a Ledger hardware wallet adapter for [@ant-design/web3](https://www.npmjs.com/package/@ant-design/web3).

Ledger is a hardware wallet that provides secure storage for cryptocurrency private keys. This adapter integrates Ledger devices with Ant Design Web3 components using the official Ledger SDK.

## Features

- 🔐 **Secure Hardware Wallet**: Connect to Ledger hardware devices via WebHID
- 📱 **Device Management**: Auto-discover and manage Ledger devices
- ✍️ **Message Signing**: Sign messages and typed data with Ledger
- 🔄 **Session Management**: Maintain persistent sessions with connected devices
- 📊 **Device Status**: Monitor device lock status and current app

## Installation

```bash
npm install @ant-design/web3 @ant-design/web3-ledger
```

or

```bash
pnpm add @ant-design/web3 @ant-design/web3-ledger
```

## Basic Usage

```tsx
import { ConnectButton, Connector } from '@ant-design/web3';
import { Ledger, LedgerWeb3ConfigProvider } from '@ant-design/web3-ledger';

const App: React.FC = () => {
  return (
    <LedgerWeb3ConfigProvider wallets={[Ledger()]} autoConnect>
      <Connector>
        <ConnectButton />
      </Connector>
    </LedgerWeb3ConfigProvider>
  );
};

export default App;
```

## Prerequisites

### Browser Requirements

Ledger integration requires a browser that supports WebHID API:

- Chrome/Edge 89+
- Opera 76+
- Not supported: Firefox, Safari

### Device Setup

1. Connect your Ledger device via USB
2. Unlock the device with your PIN
3. Open the Ethereum app on your Ledger
4. Ensure browser permissions for WebHID are granted

## Advanced Usage

### Custom Derivation Path

```tsx
import { Ledger } from '@ant-design/web3-ledger';

const wallet = Ledger({
  derivationPath: "44'/60'/1'/0/0", // Custom path
});
```

### Monitoring Device Status

```tsx
import { useDeviceStatus } from '@ant-design/web3-ledger';

function DeviceMonitor() {
  const { deviceStatus, currentApp } = useDeviceStatus({ sessionId });

  return (
    <div>
      <p>Status: {deviceStatus}</p>
      <p>Current App: {currentApp}</p>
    </div>
  );
}
```

## API Reference

For detailed API documentation, visit [Ledger - Ant Design Web3](https://web3.ant.design/components/ledger).

## Troubleshooting

### Device Not Detected

1. Ensure WebHID is enabled in your browser
2. Check USB connection and try a different port
3. Update Ledger firmware to the latest version
4. Grant browser permissions when prompted

### Connection Fails

1. Unlock your Ledger device
2. Open the Ethereum app on the device
3. Check that no other application is using the device
4. Try disconnecting and reconnecting

## Related Links

- [Ant Design Web3 Documentation](https://web3.ant.design)
- [Ledger Official Website](https://www.ledger.com)
- [Ledger Developer Portal](https://developers.ledger.com)

## License

MIT
