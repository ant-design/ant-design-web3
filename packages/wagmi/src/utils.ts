import debug from 'debug';
import type { Connector as WagmiConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

const createDebug = (namespace: string) => {
  return debug(`antd-web3:wagmi:${namespace}`);
};

const isEIP6963Connector = (connector: WagmiConnector) => {
  if (connector.type === injected.type && connector.icon && connector.id && connector.name) {
    return true;
  }
  return false;
};

export { createDebug, isEIP6963Connector };
