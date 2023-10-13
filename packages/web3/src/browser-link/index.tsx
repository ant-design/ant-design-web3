import React from 'react';
import { Tooltip } from 'antd';
import { ChainIds } from '@ant-design/web3-common';
import { Address } from '../address';

export type BrowserLinkType = 'address' | 'transaction';

export interface BrowserLinkProps {
  icon?: boolean | React.ReactNode;
  ellipsis?: boolean;
  address: string;
  href?: string;
  chain?: ChainIds;
  type?: BrowserLinkType;
}

export const getBrowserLink = (
  address: string,
  type: BrowserLinkType = 'address',
  chain: ChainIds = ChainIds.Mainnet,
) => {
  if (chain === ChainIds.Mainnet) {
    if (type === 'address') {
      return `https://etherscan.io/address/${address}`;
    } else if (type === 'transaction') {
      return `https://etherscan.io/tx/${address}`;
    }
  }
  throw new Error(`Unsupported chain ${chain}`);
};

export const BrowserLink: React.FC<BrowserLinkProps> = (props) => {
  const { icon, ellipsis, address, href, type, chain } = props;
  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  const browserLink = href || getBrowserLink(filledAddress, type, chain);

  return (
    <Tooltip title={filledAddress}>
      <a href={browserLink}>{icon || <Address ellipsis={ellipsis} address={filledAddress} />}</a>
    </Tooltip>
  );
};
