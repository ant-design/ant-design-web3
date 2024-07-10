import type { Connector as WagmiConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

const isEIP6963Connector = (connector: WagmiConnector) => {
  if (connector.type === injected.type && connector.icon && connector.id && connector.name) {
    return true;
  }
  return false;
};

export { isEIP6963Connector };
