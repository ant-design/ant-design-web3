---
nav: Components
order: 6
group:
  title: Connect Blockchains
  order: 2
---

# Sui

## Recommended configuration

For most Sui DApps, we recommend the following configuration:

<code src="./demos/recommend.tsx"></code>

The recommended configuration mainly includes:

- Automatically add detected plugin wallets.
- Display balance.
- Display SNS.
- Configure `quickConnect` to provide a quick connection entry to simplify user operations.
- Use the `simple` mode to remove wallet grouping and simplify the interface.

## Custom QueryClientProvider

You can also use `PersistQueryClientProvider` to override the default `QueryClientProvider`.

```bash
pnpm i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

<code src="./demos/query-client.tsx"></code>

## Networks

We have built-in the Sui mainnet `mainnet`. If you want to use other networks, you can configure `networkConfig`.

<code src="./demos/networks.tsx"></code>

## Unofficial networks

<code src="./demos/networks-unofficial.tsx"></code>

## More Components

<code src="./demos/more-components.tsx"></code>
