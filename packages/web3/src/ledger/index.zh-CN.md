---
nav: 组件
order: 6
group:
  title: 硬件钱包
  order: 2
tag:
  title: 新增
  color: success
---

# Ledger

Ledger 硬件钱包适配器，用于 Ant Design Web3。

Ant Design Web3 官方提供了 `@ant-design/web3-ledger` 来支持 Ledger 硬件钱包，它是基于 [Ledger Device Management Kit](https://github.com/LedgerHQ/device-sdk-ts) 的 Ant Design Web3 Ledger 适配器。Ledger 是一款硬件钱包，为加密货币私钥提供安全存储。该适配器使用官方 Ledger SDK 将 Ledger 设备集成到 Ant Design Web3 中。

> 注意：目前该适配器仅支持 Ledger 设备上的 Ethereum 应用。

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

<code src="./demos/basic.tsx"></code>

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

| 属性        | 描述                       | 类型      | 默认值         | 是否必需 |
| ----------- | -------------------------- | --------- | -------------- | -------- |
| ledger      | Ledger 实例                | `Ledger`  | `new Ledger()` | 否       |
| locale      | 国际化设置                 | `Locale`  | -              | 否       |
| autoConnect | 是否自动连接上次使用的钱包 | `boolean` | `false`        | 否       |

### Ledger 类

与 Ledger 硬件钱包交互的核心类。

```ts
import { Ledger } from '@ant-design/web3-ledger';

const ledger = new Ledger(name?, derivationPath?);
```

#### 构造函数参数

| 参数           | 描述                          | 类型     | 默认值             | 是否必需 |
| -------------- | ----------------------------- | -------- | ------------------ | -------- |
| name           | 自定义钱包名称                | `string` | `'Ledger'`         | 否       |
| derivationPath | 用于生成地址的 BIP44 派生路径 | `string` | `"44'/60'/0'/0/0"` | 否       |

默认的派生路径是 `"44'/60'/0'/0/0"`，你可以自定义它来生成不同的以太坊地址：

- `"44'/60'/0'/0/0"` - 第一个以太坊地址（默认）
- `"44'/60'/0'/0/1"` - 第二个以太坊地址
- `"44'/60'/1'/0/0"` - 第二个账户的第一个地址

关于 BIP44 派生路径的更多信息，请参考 [BIP44 规范](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)。

#### 属性

| 属性             | 描述             | 类型                      |
| ---------------- | ---------------- | ------------------------- |
| wallet           | 钱包配置对象     | `Wallet`                  |
| sessionId        | 当前设备会话 ID  | `DeviceSessionId \| null` |
| accounts         | 已连接的账户     | `LedgerAccount[]`         |
| derivationPath   | 当前派生路径     | `string`                  |
| availableDevices | 设备发现管理器   | `AvailableDevices`        |
| connectInstance  | 连接管理器       | `Connect`                 |
| deviceStatus     | 设备状态监控器   | `DeviceStatus`            |
| appCommand       | 应用命令管理器   | `AppCommand`              |
| ethereumSigner   | 以太坊签名管理器 | `EthereumSigner`          |

#### 方法

**connect(returnWhenNoDevice?: boolean): Promise\<void\>**

连接到 Ledger 设备并获取第一个账户。

- `returnWhenNoDevice`：如果为 `true`，当没有可用设备时立即抛出错误，不触发设备发现

**disconnect(): Promise\<void\>**

断开与 Ledger 设备的连接并清除所有状态。

**signMessage(message: string): Promise\<Signature\>**

签名纯文本消息。

**signTypedData(typedData: any): Promise\<Signature\>**

签名 EIP-712 类型化数据。

#### 类型定义

**LedgerAccount**

```ts
interface LedgerAccount extends Account {
  address: string;
  path?: string; // 用于此账户的派生路径
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

### 支持哪些区块链应用？

目前仅支持 Ledger 设备上的 **Ethereum 应用**。您必须在 Ledger 设备上安装并打开 Ethereum 应用才能使用此适配器。未来版本可能会添加对其他区块链应用（比特币、Solana 等）的支持。

### 为什么不支持 Firefox？

Firefox 尚未实现与 Ledger 设备通信所需的 WebHID API。

### 可以在移动浏览器中使用 Ledger 吗？

不可以，WebHID 目前仅在桌面浏览器中可用。

### 如何更改派生路径？

您可以在创建 Ledger 实例时自定义派生路径：

```ts
import { Ledger } from '@ant-design/web3-ledger';

// 使用自定义派生路径创建 Ledger 实例
const ledger = new Ledger('Ledger', "44'/60'/1'/0/0");
```

### 在 Web 应用中使用 Ledger 安全吗？

是的，Ledger 提供硬件级别的安全性。私钥永远不会离开设备，所有交易都必须在设备屏幕上进行物理确认。

## 相关资源

- [Ledger 开发者文档](https://developers.ledger.com/)
- [WebHID API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebHID_API)
- [以太坊 BIP44 路径](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
