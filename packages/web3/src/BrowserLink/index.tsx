import React, { useEffect } from 'react';
import { ButtonProps, Tooltip } from 'antd';
import useProvider from '../hooks/useProvider';
import useCurrentAccount from '../hooks/useCurrentAccount';
import { Address } from '../Address';


export interface BrowserLinkProps extends ButtonProps {
  icon?: boolean | React.ReactNode;
  ellipsis?: boolean;
}

export const BrowserLink: React.FC<BrowserLinkProps> = (props) => {
  const { icon, ellipsis } = props;
  const { provider } = useProvider();

  const { account, refresh } = useCurrentAccount();
  console.log(account)


  useEffect(() => {
    const getAccount = async () => {
      await provider?.requestAccounts();
      await refresh();
    };
    getAccount();
  }, [])

  const mergedAddress = account?.address ?? ''

  return (

    <Tooltip title={mergedAddress}>
      <a href={`/address/${mergedAddress}`}>
        {icon || <Address ellipsis={ellipsis} address={mergedAddress} />}
      </a>
    </Tooltip>
  );
};
