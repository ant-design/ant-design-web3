import React from 'react';
import { Mainnet } from '@ant-design/web3-assets';
import { fillAddressWith0x, type BrowserLinkType, type Chain } from '@ant-design/web3-common';
import { Space, Tooltip } from 'antd';

import { Address } from '../address';
import useProvider from '../hooks/useProvider';

export interface BrowserLinkProps {
  icon?: boolean | React.ReactNode;
  iconStyle?: React.CSSProperties;
  iconOnly?: boolean;
  ellipsis?: boolean;
  address: string;
  href?: string;
  chain?: Chain;
  type?: BrowserLinkType;
  name?: string;
}

export const getBrowserLink = (
  address: string,
  type: BrowserLinkType = 'address',
  chain?: Chain,
) => {
  if (!chain || !chain.browser?.getBrowserLink) {
    throw new Error(`getBrowserLink unsupported chain ${chain?.id.value}`);
  }
  return chain.browser.getBrowserLink(address, type);
};

export const BrowserLink: React.FC<BrowserLinkProps> = (props) => {
  const { icon, ellipsis, address, href, type, chain, name, iconOnly = false } = props;
  const { chain: currentChain = Mainnet } = useProvider({
    chain,
  });

  const mergedIcon = icon || currentChain?.browser?.icon || currentChain?.icon;
  const displayIcon = React.isValidElement(mergedIcon)
    ? React.cloneElement<any>(mergedIcon, {
        style: {
          ...props.iconStyle,
          ...mergedIcon.props.style,
        },
      })
    : mergedIcon;

  if (!address) {
    console.error('"address" property of the "BrowserLink" is required');
    return null;
  }

  const filledAddress = fillAddressWith0x(address);
  const browserLink = href ?? getBrowserLink(filledAddress, type, currentChain);

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
