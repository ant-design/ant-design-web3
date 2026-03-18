# Ant Design Web3 - AI Coding Agent Instructions

## Project Overview

Ant Design Web3 is a multi-chain Web3 React component library built on Ant Design, providing UI components and blockchain adapters for building DApps. The architecture separates UI (`@ant-design/web3`) from blockchain-specific adapters (wagmi, ethers, solana, bitcoin, sui, ton, tron).

**Key architectural principle**: UI components are pure React components that consume blockchain capabilities through `Web3ConfigProvider` context, while adapter packages bridge UI and chain SDKs.

## Monorepo Structure

This is a pnpm workspace with packages organized by function:

- `packages/web3/` - Core UI components (ConnectButton, Address, NFTCard, etc.)
- `packages/common/` - Shared types, utilities, and base Web3ConfigProvider
- `packages/wagmi/` - Ethereum adapter using wagmi v2
- `packages/ethers/` - Ethereum adapter using ethers v6
- `packages/solana/`, `packages/bitcoin/`, `packages/sui/`, etc. - Chain-specific adapters
- `packages/icons/` - Blockchain and wallet icon components (auto-generated)
- `packages/assets/` - Chain and token metadata

**Docs location**: All component docs live in `packages/web3/*/index.md` and `*.zh-CN.md`, NOT in the package's own directory (except wagmi docs are in `packages/web3/ethereum/`).

## Critical Workflows

### Development

```bash
pnpm start              # Start dumi dev server (docs + demos)
pnpm dev:lib            # Run father dev for all packages in watch mode
pnpm build              # Build all packages (required before testing dist)
```

### Testing

- Framework: Vitest with jsdom
- Tests: Located in `packages/*/src/**/__tests__/*.test.{ts,tsx}`
- Commands:
  ```bash
  pnpm test              # Run tests in watch mode
  pnpm test:ci           # Run tests with coverage (CI mode)
  pnpm test:dist         # Test against built dist files
  ```
- **Coverage requirement**: 100% coverage expected

### Build System

- Uses `father` (not Rollup/Webpack) for package building
- Config: `.fatherrc.base.ts` defines babel transforms with SVG inlining
- Each package has `.fatherrc.ts` extending the base config
- Outputs both ESM (`dist/esm/`) and CJS (`dist/lib/`)

### Version Management

**Always run `pnpm changeset` before submitting PRs that change package code** (docs-only PRs exempt).

- Uses changesets for version management
- Command: `pnpm changeset` to add changelog entry
- Files generated in `.changeset/` directory
- Release process handled by core maintainers via `pnpm run release`

## Code Conventions

### Styling

- CSS-in-JS via `@ant-design/cssinjs` with Ant Design tokens
- Styles in `packages/web3/*/style/index.{ts,tsx}` (not co-located with components)
- Use Design Tokens for themability - never hardcode colors/spacing

### TypeScript Patterns

- Strict mode enabled
- Types exported from `@ant-design/web3-common` for cross-package sharing
- Key interfaces: `UniversalWeb3ProviderInterface`, `Wallet`, `Chain`, `Account`
- Use `React.FC<PropsWithChildren<YourProps>>` for components with children

### Adapter Pattern

Adapters implement blockchain connectivity by:

1. Creating a chain-specific `Web3ConfigProvider` wrapper (e.g., `WagmiWeb3ConfigProvider`)
2. Internally using the chain's SDK (wagmi, @solana/wallet-adapter-react, etc.)
3. Mapping chain SDK state to `UniversalWeb3ProviderInterface` props
4. Passing mapped props to `@ant-design/web3-common`'s base `Web3ConfigProvider`

**Example**: `packages/wagmi/src/wagmi-provider/index.tsx` wraps `WagmiProvider` and `QueryClientProvider`, then maps wagmi hooks to `UniversalWeb3ProviderInterface`.

### Component Patterns

- UI components use `useProvider()` hook to access blockchain context
- Provider props: `account`, `chain`, `balance`, `connect()`, `disconnect()`, `switchChain()`, etc.
- Props can be overridden at component level (merged with context via `useProvider(props)`)
- Components should handle both connected and disconnected states gracefully

## Code Quality

- Linter: Biome (not ESLint for most checks)
- Format: `pnpm biome:format` or `pnpm prettier`
- Run `pnpm lint` before committing
- Pre-commit: Husky + lint-staged auto-formats staged files

## Common Tasks

### Adding a new UI component

1. Create in `packages/web3/src/your-component/`
2. Add styles in `packages/web3/src/your-component/style/index.tsx`
3. Add demos in `packages/web3/src/your-component/demos/*.tsx`
4. Create docs: `packages/web3/src/your-component/index.md` and `index.zh-CN.md`
5. Export from `packages/web3/src/index.ts`
6. Add tests in `__tests__/` directory

### Adding wallet/chain metadata

- Wallets: `packages/assets/src/wallets/` - Follow existing pattern
- Chains: `packages/assets/src/chains/` - Export from appropriate file
- Tokens: `packages/assets/src/tokens/` - Use `Token` type from common

### Generating icons

Icons are auto-generated. Don't manually edit files in `packages/icons/src/components/`:

```bash
pnpm icons:generate
```

## Testing Patterns

- Mock blockchain providers in tests - see `packages/solana/src/solana-provider/__tests__/` for examples
- Use `vi.mock()` to mock SDK modules like `@solana/wallet-adapter-react`
- Test both component rendering and blockchain interaction logic
- Snapshot tests for UI components are acceptable but prefer behavioral tests

## Path Aliases

When importing cross-package code, use aliases defined in `tsconfig.base.json`:

```typescript
import { Address } from '@ant-design/web3';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
```

These resolve to `src/` in dev and `dist/esm/` in builds.

## Documentation

- Framework: Dumi v2 with custom theme (`dumi-theme-antd-web3`)
- Demos are live code - use `<code src="./demos/example.tsx"></code>` in markdown
- Both English and Chinese docs required for new features
- Course content in `docs/course/` for educational materials

## Common Pitfalls

- Don't put component docs in package root - they belong in `packages/web3/`
- Don't skip changesets for code changes
- Don't hardcode chain IDs - use enums from `@ant-design/web3-common`
- Don't test against source when `LIB_DIR=dist` - vitest config handles aliasing
- Remember wagmi docs live under `packages/web3/ethereum/` not `packages/wagmi/`
