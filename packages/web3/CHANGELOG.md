# @ant-design/web3

## 1.11.2

### Patch Changes

- 5b576a3: fix: chain select style bug when ConnectButton set type or size

## 1.11.1

### Patch Changes

- 8c59ee1: refactor(address): copyable prop default is false
- 17c450f: chore(web3js): add doc and demo for web3js
- 1270c95: chore(ethers): adjusted the compatibility form of the old version of etherjs
- 02e74aa: fix: set sideEffects false for enable treeshaking
- Updated dependencies [02e74aa]
  - @ant-design/web3-assets@1.7.1
  - @ant-design/web3-common@1.9.1

## 1.11.0

### Minor Changes

- 5f9b8fb: feat: NFTCard add new prop errorRender
- f91e2c4: feat: Connector support onConnectError

### Patch Changes

- 1716c5f: fix: use copy-to-clipboard and antd Typography.text for fix Address copy bug
- da09f06: fix: ConnectModal PluginTag hover error
- 6f90f69: fix: ConnectModal animation warning
- 8249d98: chore: upgrade antd to 5.17.0 & cssinjs to 1.20.0
- a90c674: refactor: remove unused code
- 45fd7de: refactor: remove unused code
- e72ea2b: fix: ConnectModal QRCode overflow
- Updated dependencies [fc31d17]
- Updated dependencies [a90c674]
- Updated dependencies [4a9f3e2]
- Updated dependencies [5736ad9]
- Updated dependencies [994ead5]
  - @ant-design/web3-icons@1.6.0
  - @ant-design/web3-assets@1.7.0
  - @ant-design/web3-common@1.9.0

## 1.10.0

### Minor Changes

- b1d8b37: feat: crypto-price support custom format
- 7fb2d02: feat: update ConnectModal connecting status and remove wallet button
- b7668e3: feat: optimize connect modal ui

### Patch Changes

- 62f1def: refactor: optimize connect-modal's token
- b2599aa: refactor: optimize nft-card conditinal render
- 00b54cc: feat: optimize plugin tag token in ConnectModal
- be48645: chore(card): use `styles.body` instead of `bodyStyle`
- 8ced644: fix: optimize import type
- 7be0842: chore: upgrade @ant-design/icons to 5.3.6
- 7ac35e6: - fix: fix lint error
  - feat: BrowerLink props extend anchor element
- bb5ca37: fix: add default alt attribute to img
- 96e17e0: fix: fix ConnectModal style issue in dark mode
- e209199: fix: optimize connect-button's avatar size
- b1b8a46: feat: supoort ethers adapter
- 967859d: fix: add default alt attribute to img
- df17585: chore: optimize code
- ab3eac4: feat: support for bitcoin
- 6ac3c69: fix: Correct typos for connect
- f4f80a7: chore: Optimize if-else statements
- 1c05b0c: style(connect-button): quick connect button icon vertical align
- Updated dependencies [ac9240c]
- Updated dependencies [7fb2d02]
- Updated dependencies [dfef374]
- Updated dependencies [7be0842]
- Updated dependencies [ce5ad76]
- Updated dependencies [71d281a]
- Updated dependencies [b1b8a46]
- Updated dependencies [ab3eac4]
- Updated dependencies [b950d50]
- Updated dependencies [c4c52a6]
- Updated dependencies [7fbf83a]
  - @ant-design/web3-icons@1.5.0
  - @ant-design/web3-common@1.8.0
  - @ant-design/web3-assets@1.6.0

## 1.9.0

### Minor Changes

- b5eccf9: feat: Support quick connect

### Patch Changes

- 813ec32: chore: modify NFTCard className prefix
- cb0a288: feat: Support skip to guide in simple mode
- 6f4c55f: fix: qr code scan tip text for universal protocol
- Updated dependencies [b5eccf9]
- Updated dependencies [ec92a76]
- Updated dependencies [cb0a288]
- Updated dependencies [6f4c55f]
  - @ant-design/web3-assets@1.5.0
  - @ant-design/web3-common@1.7.0
  - @ant-design/web3-icons@1.4.2

## 1.8.0

### Minor Changes

- 52d58e5: feat: Add ConnectType for wallet connect
- 201c2ec: feat: optimize connect-modal component

### Patch Changes

- f2a8e32: patch: remove connect-modal overflow hide
- 8c5c3ba: fix: connect modal radius
- 52d58e5: fix: bind wallet qr code click event on the button and fix qrcode display bug
- 6eaee12: chore: adjust the display dom structure of wallet icon in eip6963 mode
- 0958090: fix: use react-inline-svg-unique-id plugin for fix svg id issue in runtime
- Updated dependencies [52d58e5]
- Updated dependencies [201c2ec]
- Updated dependencies [0958090]
- Updated dependencies [d273651]
  - @ant-design/web3-common@1.6.0
  - @ant-design/web3-icons@1.4.1
  - @ant-design/web3-assets@1.4.1

## 1.7.2

### Patch Changes

- ae85fa9: fix: NFTCard Displayed images that should not be displayed after switch chain
- Updated dependencies [081398d]
- Updated dependencies [e5b4fe9]
  - @ant-design/web3-icons@1.4.0
  - @ant-design/web3-assets@1.4.0

## 1.7.1

### Patch Changes

- Updated dependencies [21a3e3b]
  - @ant-design/web3-common@1.5.0
  - @ant-design/web3-assets@1.3.1

## 1.7.0

### Minor Changes

- d601345: Add support for Solana
- d601345: Address-like components support addressPrefix prop, add solana chain configs

### Patch Changes

- Updated dependencies [d601345]
  - @ant-design/web3-assets@1.3.0

## 1.6.0

### Minor Changes

- dc8f442: fix: devUseWarning reference path

## 1.5.1

### Patch Changes

- b379585: fix: connect-button cannot find warning utils
- Updated dependencies [dead69b]
  - @ant-design/web3-common@1.4.0
  - @ant-design/web3-assets@1.2.3

## 1.5.0

### Minor Changes

- 90db5e8: feat: ConnectModal support group configuration

### Patch Changes

- 6e7c44b: refactor: modify connector code
- d91ec4a: refactor: displayIcon of the BrowserLink
- c5e640a: refactor: return null when connector children is null

## 1.4.3

### Patch Changes

- 6cbe8b8: fix: Use useToken from antd

## 1.4.2

### Patch Changes

- 3317f1d: fix: Profile Modal lack space
- 6f3e811: fix: Remove antd/lib import from @ant-design/web3 for better esm support

## 1.4.1

### Patch Changes

- f1b0b17: fix: use esm import as the default import way for fix use in Remix and NextJS
- eca5578: feat: upgrade antd to 5.13.2 & @ant-design/cssinjs to 1.18.2
- Updated dependencies [f1b0b17]
  - @ant-design/web3-assets@1.2.2
  - @ant-design/web3-common@1.3.3
  - @ant-design/web3-icons@1.3.2

## 1.4.0

### Minor Changes

- fe1ec95: feat: support EIP6963 wallet

### Patch Changes

- 1e663c3: chore: Optimize import type
- 5e5303a: refactor: optimization crypto-price code && add APIS from docs
- b233b31: refactor: modify browser-link code & docs
- 75a85d6: refactor: modify address code & add APIS from docs & add test

## 1.3.2

### Patch Changes

- cf6c520: fix: Add exports field for fix require bug in nextjs
- 0eadb8b: docs：Add connectModal API `title` and `onCancel` explain
- Updated dependencies [cf6c520]
  - @ant-design/web3-assets@1.2.1
  - @ant-design/web3-common@1.3.2
  - @ant-design/web3-icons@1.3.1

## 1.3.1

### Patch Changes

- f135178: fix: Modify the content of ConnectButton message
- 79a91ff: refactor: Optimization ConnectButton code
- Updated dependencies [f135178]
- Updated dependencies [77615f9]
  - @ant-design/web3-common@1.3.1
  - @ant-design/web3-assets@1.2.0
  - @ant-design/web3-icons@1.3.0

## 1.3.0

### Minor Changes

- 879548d: feat: Add extendsContextFromParent props for web3-config-provider

### Patch Changes

- 0d69a01: test:ConnectModal components test coverage
- e6368f1: fix: unexpected QRCode after disconnect #457
- f93aedf: test:Increase ConnectButton test coverage
- 880d915: type: use ?: instead of undefined
- 9f62728: fix: fix intl for connect-button
- aa67d6e: fix: remove unused message
- 10d5962: test:Increase connector test coverage
- Updated dependencies [879548d]
  - @ant-design/web3-common@1.3.0
  - @ant-design/web3-assets@1.1.4

## 1.2.0

### Minor Changes

- e5db9b7: feat: Add UniversalWallet for support TokenPocket and more wallets
- 18def13: intl: Address support intl
- 7778597: feat: Copy address to try a more internationalized interaction.

### Patch Changes

- 2e3af3f: perf: Remove redundant code
- 2e3af3f: perf: Delete variables that are not used in the array structure
- b575468: fix: remove no-unused-vars
- 17ca201: perf: Modify import type
- Updated dependencies [e5db9b7]
- Updated dependencies [8bba386]
- Updated dependencies [18def13]
- Updated dependencies [dc083a3]
- Updated dependencies [64a2de3]
- Updated dependencies [c549a09]
- Updated dependencies [17ca201]
  - @ant-design/web3-common@1.2.0
  - @ant-design/web3-icons@1.2.0
  - @ant-design/web3-assets@1.1.3

## 1.1.2

### Patch Changes

- d6a5339: chore: release 1.1.2 for republish
- Updated dependencies [d6a5339]
  - @ant-design/web3-assets@1.1.2
  - @ant-design/web3-common@1.1.2
  - @ant-design/web3-icons@1.1.2

## 1.1.1

### Patch Changes

- 32f276a: chore: 1.1.1
- Updated dependencies [32f276a]
  - @ant-design/web3-assets@1.1.1
  - @ant-design/web3-common@1.1.1
  - @ant-design/web3-icons@1.1.1

## 1.1.0

### Minor Changes

- b3e95c2: feat: support safeheron browser wallet
- 3547f6b: feat: ConnectButton support internationalization

### Patch Changes

- 73e8e32: feat: ConnectModal support Intl
- 69a3597: fix: Improve the package.json information and add a main field to accommodate more projects.
- f5a1b82: refactor: Update deprecated antd Modal props
- 9de319c: feat: NFTCard support intl
- f8dce24: perf: use `??` Instead of `||`
- 13d0207: fix: debug connect-button ui
- Updated dependencies [73e8e32]
- Updated dependencies [69a3597]
- Updated dependencies [b00a377]
- Updated dependencies [b3e95c2]
- Updated dependencies [3547f6b]
- Updated dependencies [9de319c]
  - @ant-design/web3-common@1.1.0
  - @ant-design/web3-assets@1.1.0
  - @ant-design/web3-icons@1.1.0

## 1.0.1

### Patch Changes

- fd51e5d: chore: release @ant-design/web3 1.0.1

## 1.0.0

### Major Changes

- f330908: docs: Update new logo and prepare release 1.0.0

### Patch Changes

- 5a86696: fix: add @ant-design/web3-assets dep in @ant-design/web3
- Updated dependencies [f330908]
  - @ant-design/web3-assets@1.0.0
  - @ant-design/web3-common@1.0.0
  - @ant-design/web3-icons@1.0.0

## 0.3.0

### Minor Changes

- 80b1957: feat: ConnectModal support mode
- a2119bf: refactor: rename hasBrowserExtensionInstalled to hasWalletReady and rename onSelectWallet to onWalletSelected

### Patch Changes

- a86e7c6: fix: qrcode style bug in simple ConnectModal
- caa86c4: fix: Get wallet dowload bug
- bf23a50: fix: ConnectModal info style bug
- d319842: fix: use antd Modal design token
- 42b7ebe: fix: ConnectModal button height, use antd large button
- e9f8fd4: fix: Get wallet button not work in ConnectModal panel mode
- 7bae140: fix: ConnectButton text color bug
- ab50e5a: fix: ConnectModal QrCode link style
- 5dbecd5: fix: NFTCard action button click not work
- Updated dependencies [a2119bf]
  - @ant-design/web3-common@0.2.0

## 0.2.0

### Minor Changes

- 606136b: Avatar is displayed in connect button component

### Patch Changes

- c57eed3: feat: export ConnectModal.ModalPanel for user custom
- 2d7ae4f: refactor: auto config wagmi provider chains
- 0df085f: feat: Add and update circle icons
- 1639b80: feat: connect modal build-in guide
- cb5d1eb: fix: Should not show Disconnect and Copy Address action in dropdown menu when not connected
- d3e5988: feat: add link for wallet qrcode for support connect in mobile
- 96837b3: fix: NFTCard ETH icon style detail
- a2d17cd: feat: optimize connect-modal close icon style
- c508982: feat: optimize connect modal style
- 3fbd1eb: fix: Connect trigger onDisconnectClick type bug
- e6a30be: feat: browser link support get chain icon from provider
- 1d2bb80: feat: New hook useConnction ⭐
- 39782e4: feat: ethereum adapter support show balance
- 78b9282: feat: New component CryptoPrice 🚀
- fe42780: fix: chain icon size in avatar
- c15bfdf: feat: BrowserLink support get url from chain in @ant-design/web3-assets
- ee9754a: feat: NFTCard show Skeleton when request metadata
- bf5ec8e: feat: ConnectButton support balance
- Updated dependencies [2d7ae4f]
- Updated dependencies [0df085f]
- Updated dependencies [9bac342]
- Updated dependencies [3fbd1eb]
- Updated dependencies [39782e4]
- Updated dependencies [c15bfdf]
  - @ant-design/web3-common@0.1.1
  - @ant-design/web3-icons@0.2.0

## 0.1.0

### Patch Changes

- Release new alpha version
- Updated dependencies
  - @ant-design/web3-common@0.1.0
  - @ant-design/web3-icons@0.1.0

## 0.1.0-alpha.1

### Patch Changes

- First alpha version.
- Updated dependencies
  - @ant-design/web3-common@0.1.0-alpha.1
  - @ant-design/web3-icons@0.1.0-alpha.1
