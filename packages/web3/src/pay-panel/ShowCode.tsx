import React, { useContext, useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { WalletColorful } from '@ant-design/web3-icons';
import { Button, ConfigProvider, Flex, QRCode, Statistic, Tabs, Typography } from 'antd';

import useIntl from '../hooks/useIntl';
import { PayPanelContext } from './PayPanelContext';

const { Paragraph } = Typography;
interface ShowCodeProps {
  selectedChainId: number | string;
  onReturn: () => void;
}
export const ShowCode: React.FC<ShowCodeProps> = ({ selectedChainId, onReturn }) => {
  const { messages } = useIntl('PayPanel');
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-pay-panel');
  const { token, amount, target, supportedChains, wallets, onFinish } = useContext(PayPanelContext);
  const [toAddress, setToAddress] = useState<string>('');
  const [paymentLink, setPaymentLink] = useState<string>('');

  useEffect(() => {
    let address = '';
    if (typeof target === 'function') {
      target().then((targetValue) => {
        address = targetValue[selectedChainId];
      });
    } else {
      address = target[selectedChainId];
    }
    setToAddress(address);
    setPaymentLink(address);
  }, [target, selectedChainId]);

  const selectedChain = supportedChains.find(
    (chain) => chain.chain.id === Number(selectedChainId),
  )?.chain;
  const availableWallets = wallets.filter((wallet) =>
    wallet.supportChainTypes?.some((chainType) => chainType === selectedChain!.type),
  );
  const tokenChannel = token.availableChains.find(
    (channel) => channel.chain.id === Number(selectedChainId),
  );

  const returnLinks = (transferQRCodeFormatter: (params: Record<string, any>) => string) => {
    const formattedLink = transferQRCodeFormatter({
      toAddress,
      amount,
      chainId: selectedChainId,
      tokenAddress: tokenChannel?.contract,
      decimal: token.decimal,
    });
    return formattedLink;
  };
  const normalAddress = [
    {
      label: 'Address',
      key: 'general',
      icon: (<WalletColorful />) as React.ReactNode,
    },
  ];
  const availableWalletsList = availableWallets.map((wallet) => {
    return {
      label: wallet.name,
      key: wallet.name,
      icon: wallet.icon,
    };
  });
  const walletItems = normalAddress.concat(availableWalletsList);
  const onWalletSelect = (activeKey: string) => {
    const selectWalletInfo = availableWallets.find((wallet) => wallet.name === activeKey);
    let links = toAddress;
    if (selectWalletInfo?.transferQRCodeFormatter) {
      links = returnLinks(selectWalletInfo.transferQRCodeFormatter);
    }
    setPaymentLink(links);
  };

  return (
    <>
      <div className={`${prefixCls}-code-title`}>
        Send {token.symbol} on {selectedChain?.name} network
      </div>

      <Statistic
        className={`${prefixCls}-amount`}
        value={Number(amount) / 10 ** token.decimal}
        precision={4}
        valueStyle={{ fontSize: 38 }}
      />
      <Tabs items={walletItems} onChange={onWalletSelect} />
      <div className={`${prefixCls}-code-content`}>
        <div className={`${prefixCls}-code-tips`}>
          <InfoCircleOutlined />
          <span>{messages.tips}</span>
        </div>

        {paymentLink && <QRCode value={paymentLink} />}
        <div className={`${prefixCls}-code-desc`}>
          <span>USDT Address</span>
          <Paragraph copyable>{toAddress}</Paragraph>
        </div>
        <Flex gap={20}>
          <Button onClick={onReturn}>Return</Button>
          <Button onClick={onFinish} type="primary">
            Already paid
          </Button>
        </Flex>
      </div>
    </>
  );
};
