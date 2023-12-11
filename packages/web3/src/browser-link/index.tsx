import type { ReactNode } from 'react';
import React, { useEffect, useMemo } from 'react';
import { Space, Tooltip } from 'antd';
import { ChainIds, fillAddressWith0x } from '@ant-design/web3-common';
import { Address } from '../address';
import useProvider from '../hooks/useProvider';

export type BrowserLinkType = 'address' | 'transaction';

export interface BrowserLinkProps {
  icon?: boolean | React.ReactNode;
  iconStyle?: React.CSSProperties;
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
  const { chain: contextChain, availableChains } = useProvider();
  const mergedChainId = chain ?? contextChain?.id;

  const currentChain = useMemo(
    () => availableChains?.find((c) => c.id === mergedChainId),
    [availableChains, mergedChainId],
  );

  const mergedIcon = icon ?? currentChain?.icon;
  const displayIcon = React.isValidElement(mergedIcon)
    ? React.cloneElement<any>(mergedIcon, {
        style: {
          fontSize: iconOnly ? 24 : 16,
          ...props.iconStyle,
          ...(React.isValidElement(mergedIcon) ? mergedIcon.props.style : {}),
        },
      })
    : mergedIcon;

  const filledAddress = fillAddressWith0x(address);
  const browserLink = href ?? getBrowserLink(filledAddress, type, mergedChainId);

  const renderContent = (content: React.ReactNode) => (
    <Tooltip title={filledAddress}>
      <a href={browserLink} style={{ display: 'inline-block' }}>
        <Space size="small">
          {displayIcon}
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
