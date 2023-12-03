import type { ReactNode } from 'react';
import React from 'react';
import { Space, Tooltip } from 'antd';
import { ChainIds, fillAddressWith0x } from '@ant-design/web3-common';
import { Address } from '../address';

export type BrowserLinkType = 'address' | 'transaction';

export interface BrowserLinkProps {
  icon?: boolean | React.ReactNode;
  iconOnly?: boolean;
  ellipsis?: boolean;
  address: string;
  href?: string;
  chain?: ChainIds;
  type?: BrowserLinkType;
  name?: string;
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
  const { icon, ellipsis, address, href, type, chain, name, iconOnly = false } = props;
  const filledAddress = fillAddressWith0x(address);
  const browserLink = href ?? getBrowserLink(filledAddress, type, chain);

  const renderContent = (content: React.ReactNode) => (
    <Tooltip title={filledAddress}>
      <a href={browserLink}>
        <Space size="small">
          {icon}
          {!iconOnly && content}
        </Space>
      </a>
    </Tooltip>
  );

  if (name) {
    return renderContent(name);
  }

  return renderContent(<Address ellipsis={ellipsis} address={filledAddress} tooltip={false} />);
};
