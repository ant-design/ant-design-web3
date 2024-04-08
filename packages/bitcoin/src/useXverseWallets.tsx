import { useEffect, useState } from 'react';
import { metadata_Xverse } from '@ant-design/web3-assets';
import type { Wallet, WalletExtensionItem } from '@ant-design/web3-common';
import { getProviders } from 'sats-connect';

/**
 * TODO: from 'useXverseWallets' to 'useWallets' to support other wallets
 */
export default () => {
  const [wallets, setWallets] = useState<Wallet[]>();

  useEffect(() => {
    const providers = getProviders();

    // 之前方案，钱包信息是定义好的，未安装有特定的提示
    if (providers.length === 0) {
      setWallets([
        {
          ...metadata_Xverse,
          hasExtensionInstalled: () => Promise.resolve(false),
        },
      ]);
      return;
    }

    // 未来，如果比特币钱包统一使用 WBIP004 协议，类型需要定制，且信息动态获取
    const chromeInfo = (metadata_Xverse.extensions as WalletExtensionItem[]).find(
      ({ key }) => key === 'Chrome',
    )!;
    const wallets = providers.map(({ name, icon, chromeWebStoreUrl }) => ({
      name,
      icon,
      // TODO: support more wallets
      remark: 'Xverse Wallet',
      extensions: [
        {
          ...chromeInfo,
          link: chromeWebStoreUrl || chromeInfo.link,
        },
      ],
      hasExtensionInstalled: () => Promise.resolve(true),
      hasWalletReady: () => Promise.resolve(true),
    }));

    setWallets(wallets);
  }, []);

  return {
    wallets,
  };
};
