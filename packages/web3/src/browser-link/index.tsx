import React from 'react';
import { Mainnet } from '@ant-design/web3-assets';
import { type BrowserLinkType, type Chain } from '@ant-design/web3-common';
import { Space, Tooltip } from 'antd';

import { Address } from '../address';
import useProvider from '../hooks/useProvider';
import { fillWithPrefix } from '../utils';

export interface BrowserLinkProps extends React.ComponentProps<'a'> {
  icon?: boolean | React.ReactNode;
  iconStyle?: React.CSSProperties;
  iconOnly?: boolean;
  ellipsis?: boolean;
  address: string;
  addressPrefix?: string | false;
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
    throw new Error(`getBrowserLink unsupported chain ${chain?.id}`);
  }
  return chain.browser.getBrowserLink(address, type);
};

export const BrowserLink: React.FC<BrowserLinkProps> = (props) => {
  const {
    icon,
    iconStyle,
    ellipsis,
    address,
    addressPrefix: addressPrefixProp,
    href,
    type,
    chain,
    name,
    iconOnly = false,
    ...rest
  } = props;
  const { chain: currentChain = Mainnet, addressPrefix: addressPrefixContext } = useProvider({
    chain,
  });

  const mergedIcon = icon || currentChain?.browser?.icon || currentChain?.icon;
  const displayIcon = React.isValidElement(mergedIcon)
    ? React.cloneElement<any>(mergedIcon, {
        style: {
          ...iconStyle,
          ...mergedIcon.props.style,
        },
      })
    : mergedIcon;

  if (!address) {
    console.error('"address" property of the "BrowserLink" is required');
    return null;
  }

  const filledAddress = fillWithPrefix(address, addressPrefixProp, addressPrefixContext);
  const browserLink = href ?? getBrowserLink(filledAddress, type, currentChain);

  const renderContent = (content: React.ReactNode) => (
    <Tooltip title={filledAddress}>
      <a href={browserLink} style={{ display: 'inline-block' }} {...rest}>
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
