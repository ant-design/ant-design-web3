---
nav: 组件
group: 适配器
order: 10
---

# Ledger

Ledger 硬件钱包适配器，用于 Ant Design Web3。

Ledger 是一款硬件钱包，为加密货币私钥提供安全存储。该适配器使用官方 Ledger SDK 将 Ledger 设备集成到 Ant Design Web3 中。

## 何时使用

- 需要硬件钱包支持以增强安全性时
- 需要物理签名确认的应用场景
- 构建优先考虑安全性的 DApp 时
- 具有合规要求的企业应用

## 安装

```bash
npm install @ant-design/web3 @ant-design/web3-ledger
```

## 代码演示

### 基本使用

连接到 Ledger 硬件钱包。

<code src="./basic.tsx"></code>

## 前置条件

### 浏览器要求

Ledger 集成需要支持 WebHID API 的浏览器：

- ✅ Chrome/Edge 89+
- ✅ Opera 76+
- ❌ Firefox（不支持）
- ❌ Safari（不支持）

### 设备设置

1. **连接设备**：通过 USB 将 Ledger 插入电脑
2. **解锁设备**：在设备上输入 PIN 码
3. **打开应用**：在设备上导航并打开 Ethereum 应用
4. **授予权限**：在浏览器提示时允许访问设备

## API

### LedgerWeb3ConfigProvider

| 属性        | 描述                       | 类型              | 默认值  | 版本 |
| ----------- | -------------------------- | ----------------- | ------- | ---- |
| wallets     | 支持的钱包列表             | `WalletFactory[]` | `[]`    | -    |
| locale      | 国际化设置                 | `Locale`          | -       | -    |
| balance     | 是否显示余额               | `boolean`         | `false` | -    |
| autoConnect | 是否自动连接上次使用的钱包 | `boolean`         | `false` | -    |

### Ledger 钱包

```tsx
import { Ledger } from '@ant-design/web3-ledger';

const wallet = Ledger();
```

Ledger 硬件钱包工厂函数。

### Hooks

#### useAvailableDevices

监控和发现 Ledger 设备。

```tsx
import { useAvailableDevices } from '@ant-design/web3-ledger';

const { devices, discover, isDiscovering } = useAvailableDevices();
```

**返回值：**

- `devices`：已发现的设备数组
- `discover`：手动触发设备发现的函数
- `isDiscovering`：表示是否正在发现设备的布尔值

#### useConnect

管理设备连接。

```tsx
import { useConnect } from '@ant-design/web3-ledger';

const { sessionId, connect, disconnect, isConnecting, isDisconnecting } = useConnect();
```

**返回值：**

- `sessionId`：连接时的当前会话 ID
- `connect`：连接设备的函数
- `disconnect`：断开连接的函数
- `isConnecting`：连接状态的布尔值
- `isDisconnecting`：断开连接状态的布尔值

#### useDeviceStatus

监控设备状态和当前应用。

```tsx
import { useDeviceStatus } from '@ant-design/web3-ledger';

const { deviceStatus, currentApp } = useDeviceStatus({ sessionId });
```

**返回值：**

- `deviceStatus`：当前设备状态（CONNECTED、LOCKED、BUSY 等）
- `currentApp`：设备上当前打开的应用名称

#### useEthereumSigner

与 Ledger 上的以太坊交互。

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

**返回值：**

- `address`：当前以太坊地址
- `isLoadingAddress`：地址加载状态
- `signMessage`：签名普通消息的函数
- `signTypedData`：签名 EIP-712 类型化数据的函数
- `isSigningMessage`：消息签名状态
- `isSigningTypedData`：类型化数据签名状态

## 故障排除

### 常见问题

**设备未检测到**

1. 验证浏览器中已启用 WebHID
2. 检查 USB 连接
3. 更新 Ledger 固件
4. 确保没有其他应用在使用设备

**连接超时**

1. 解锁设备
2. 打开 Ethereum 应用
3. 检查 USB 线缆质量
4. 尝试不同的 USB 端口

**签名被拒绝**

1. 在设备屏幕上验证消息内容
2. 确保您正在确认正确的交易
3. 检查设备电量
4. 如果设备冻结，请重启设备

## 常见问题

### 为什么不支持 Firefox？

Firefox 尚未实现与 Ledger 设备通信所需的 WebHID API。

### 可以在移动浏览器中使用 Ledger 吗？

不可以，WebHID 目前仅在桌面浏览器中可用。

### 如何更改派生路径？

您可以在使用以太坊签名器 hook 时自定义派生路径：

```tsx
const { address } = useEthereumSigner({
  sessionId,
  derivationPath: "44'/60'/1'/0/0", // 自定义路径
});
```

### 在 Web 应用中使用 Ledger 安全吗？

是的，Ledger 提供硬件级别的安全性。私钥永远不会离开设备，所有交易都必须在设备屏幕上进行物理确认。

## 相关资源

- [Ledger 开发者文档](https://developers.ledger.com/)
- [WebHID API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebHID_API)
- [以太坊 BIP44 路径](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
