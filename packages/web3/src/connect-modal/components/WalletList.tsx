import {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useImperativeHandle,
  useMemo,
} from 'react';
import { Empty, List } from 'antd';
import mobile from 'is-mobile';

import { connectModalContext } from '../context';
import type { ConnectModalActionType, ConnectModalProps, Wallet } from '../interface';
import { defaultGroupOrder } from '../utils';
import WalletItem from './WalletItem';

export type WalletListProps = Pick<
  ConnectModalProps,
  'walletList' | 'group' | 'groupOrder' | 'emptyProps' | 'disabled'
>;

const WalletList: ForwardRefRenderFunction<ConnectModalActionType, WalletListProps> = (
  props,
  ref,
) => {
  const { walletList = [], group: internalGroup, groupOrder, emptyProps, disabled = false } = props;
  const { prefixCls, updateSelectedWallet, selectedWallet, localeMessage, updatePanelRoute } =
    useContext(connectModalContext);
  const dataSource: Record<string, Wallet[]> = useMemo(() => {
    const result: Record<string, Wallet[]> = {};
    walletList.forEach((wallet) => {
      const { group = 'More' } = wallet;
      if (!result[group]) {
        result[group] = [];
      }
      result[group].push(wallet);
    });
    return result;
  }, [walletList]);

  const groupKeys = useMemo(() => {
    let orderFn = defaultGroupOrder;
    // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
    if (typeof internalGroup === 'object' && internalGroup.hasOwnProperty('groupOrder')) {
      orderFn = internalGroup.groupOrder!;
    } else if (groupOrder) {
      orderFn = groupOrder;
    }
    return Object.keys(dataSource).sort(orderFn);
  }, [dataSource, internalGroup, groupOrder]);

  const needGrouping =
    internalGroup !== false && (internalGroup !== undefined || groupKeys.length > 1);

  const openInUniversalLink = (wallet: Wallet) => {
    const url = wallet.deeplink?.urlTemplate
      .replace('${url}', encodeURIComponent(window.location.href))
      .replace('${ref}', encodeURIComponent(window.location.href));
    if (url) {
      window.location.href = url;
    }
  };

  const selectWallet = async (wallet: Wallet) => {
    const hasWalletReady = await wallet.hasWalletReady?.();
    if (hasWalletReady) {
      // wallet is ready, call ConnectModal's onWalletSelected
      const hasExtensionInstalled = await wallet?.hasExtensionInstalled?.();

      // pop up the mobile wallet
      if (wallet._isMobileWallet) {
        updateSelectedWallet(wallet, {
          connectType: 'openMobile',
        });
        return;
      }

      // use extension to connect
      if (hasExtensionInstalled) {
        updateSelectedWallet(wallet, {
          connectType: 'extension',
        });
      }

      // open in universal link
      else if (mobile()) {
        openInUniversalLink(wallet);
      }

      // Extension not installed and can use qr code to connect
      else if (wallet.getQrCode) {
        updateSelectedWallet(wallet, {
          connectType: 'qrCode',
        });
      }

      // use the default connect
      else {
        updateSelectedWallet(wallet, {});
      }
      return;
    }
    if (mobile() && wallet.deeplink) {
      // open in universal link
      openInUniversalLink(wallet);
    } else {
      // wallet not ready
      // go to wallet page
      updateSelectedWallet(wallet);
      updatePanelRoute('wallet', true);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      selectWallet,
    };
  });
  const renderContent = (params?: { group?: string }) => {
    const { group } = params || {};
    return (
      <List<Wallet>
        itemLayout="horizontal"
        dataSource={group ? dataSource[group] : walletList}
        rowKey="key"
        renderItem={(item) => (
          <WalletItem
            wallet={item}
            prefixCls={prefixCls}
            selectedWallet={selectedWallet}
            onSelect={selectWallet}
            onQrCodeSelect={(wallet) => {
              updateSelectedWallet(wallet, {
                connectType: 'qrCode',
              });
            }}
            showQrPlaceholder={walletList.some((w) => w.getQrCode && w.hasExtensionInstalled)}
            disabled={disabled}
          />
        )}
      />
    );
  };

  if (walletList.length === 0) {
    return (
      <div className={`${prefixCls}-wallets-empty`}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={localeMessage.walletListEmpty}
          {...emptyProps}
        />
      </div>
    );
  }

  return (
    <div className={`${prefixCls}-wallet-list`}>
      {needGrouping ? (
        groupKeys.map((group) => (
          <div className={`${prefixCls}-group`} key={group}>
            <div className={`${prefixCls}-group-title`}>{group}</div>
            <div className={`${prefixCls}-group-content`}>
              {renderContent({
                group,
              })}
            </div>
          </div>
        ))
      ) : (
        <div className={`${prefixCls}-group`}>
          <div className={`${prefixCls}-group-content`}>{renderContent()}</div>
        </div>
      )}
    </div>
  );
};

type WalletListComponent = {
  (props: WalletListProps & { ref?: React.Ref<ConnectModalActionType> }): React.ReactNode;
  displayName?: string;
};

const ForwardRefWalletList: WalletListComponent = forwardRef(WalletList);
ForwardRefWalletList.displayName = 'WalletList';

export default ForwardRefWalletList;
