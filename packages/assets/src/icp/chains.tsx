import { createGetBrowserLink, IcpChainIds, type Chain } from '@ant-design/web3-common';
import { IcpColorful } from '@ant-design/web3-icons';

export interface IcpChain extends Chain {
  id: IcpChainIds;
}

export const Icp: IcpChain = {
  id: IcpChainIds.Mainnet,
  name: 'Internet Computer',
  icon: <IcpColorful />,
  browser: {
    icon: <IcpColorful />,
    getBrowserLink: createGetBrowserLink('https://dashboard.internetcomputer.org'),
  },
  nativeCurrency: { name: 'ICP', symbol: 'ICP', decimals: 8 },
};
