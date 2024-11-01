---
nav: Guide
---

# Ant Design Web3

Ant Design Web3 is a Web3 React component library based on [Ant Design](https://ant.design/), it provides a series of components that can help you quickly build decentralized applications (DApp).

You can use Ant Design Web3 in any of the following ways:

- Use UI components directly through `@ant-design/web3`, such as `ConnectButton`, `Address`, etc. You can choose any way you like to connect to the blockchain, such as [ether](https://docs.ethers.org/v6/), [viem](https://viem.sh/) and [web3.js](https://web3js.org/). And any other chain's SDK, including non-EVM compatible blockchains, can also use Ant Design Web3 in this way.
- Use the adapter provided by us with `@ant-design/web3` to quickly connect to various blockchains without having to handle the related logic of connecting to the blockchain yourself.
  - Connect to EVM-compatible chains based on `@ant-design/web3-wagmi` or `@ant-design/web3-ethers` and `@ant-design/web3-eth-web3js`.
  - Connect to Solana based on `@ant-design/web3-solana`.
  - Connect to Bitcoin based on `@ant-design/web3-bitcoin`.
  - Connect to Sui based on `@ant-design/web3-sui`.
- Implement an adapter yourself to support connecting to more different blockchains, the specific implementation method can refer to [Developing Adapters](adapter.md).
- Use only the official adapter, such as `@ant-design/web3-solana`, and then completely customize the UI components, consume the capabilities provided by the adapter through [Web3ConfigProvider](http://localhost:8000/components/web3-config-provider).

## Try it out

Here are examples of using Ant Design Web3 through `@ant-design/web3-wagmi`:

<code compact src="./demos/try-it-out/index.tsx"></code>

If you want to try more refined theme control, you can try our [Theme Editor](/theme-editor), or check out the [Theme](theme.md) documentation.

If you want to further try how to use Ant Design Web3 in your own project, or want to create a project based on Ant Design Web3 from 0, you can continue reading [Quick Start](quick-start.md), wish you a pleasant surfing in Web3! 🌊🌊🌊

## Why use it?

Why use Ant Design Web3?

- 🎨 Provides high-quality UI components based on Ant Design. [Ant Design](https://github.com/ant-design/ant-design) is a high-quality UI basic component set that supports flexible theme customization and has nearly 100,000 GitHub stars and many users, which gives Ant Design Web3 a basic quality guarantee.
- 📦 Out-of-the-box experience, not only provides `ConnectModal` for connecting wallets, but also `Address`, `NFTCard` and other components, continuously iterates to cover the needs you may encounter in DApp development, bringing the R&D experience of Web2 to Web3. We also pay attention to user experience and bring the user experience of Web2 to Web3.
- 🔌 Flexible and reliable architecture design, UI layer and adapter layer are separated, which makes it possible to support different blockchains and different chain SDKs, and also allows components to be continuously and stably iterated and upgraded.

There are more features:

| Feature                                                                 | Supported |
| ----------------------------------------------------------------------- | --------- |
| [Theme customization](https://web3.ant.design/guide/theme)              | ✅        |
| [Internationalization](https://web3.ant.design/guide/intl)              | ✅        |
| 100% test coverage                                                      | ✅        |
| TypeScript support                                                      | ✅        |
| Responsive design                                                       | ✅        |
| Quick and easy wallet connection component                              | ✅        |
| [NFT component](https://web3.ant.design/components/nft-card)            | ✅        |
| More practical components such as Address                               | ✅        |
| [Rich icon library](https://web3.ant.design/components/icons)           | ✅        |
| Support EIP6963                                                         | ✅        |
| Support WalletConnect                                                   | ✅        |
| [Support Ethereum and its L2](https://web3.ant.design/components/wagmi) | ✅        |
| [Support Bitcoin](https://web3.ant.design/components/bitcoin)           | ✅        |
| [Support Solana](https://web3.ant.design/components/solana)             | ✅        |
| [Support TON](https://web3.ant.design/components/ton)                   | ✅        |
| [Adapt to more non-EVM chains](https://web3.ant.design/guide/adapter)   | ✅        |
| [Course](https://web3.ant.design/course/introduction)                   | ✅        |
| Use with wagmi                                                          | ✅        |
| Use with ethers                                                         | ✅        |
| Use with web3.js                                                        | ✅        |
| Use with umi                                                            | ✅        |
| Use with Next.js                                                        | ✅        |
| Use with Remix                                                          | ✅        |
| Use with Tailwind CSS                                                   | ✅        |
