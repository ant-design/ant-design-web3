import React, { useContext, useMemo, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, QRCode, Statistic, Tabs, Typography } from 'antd';

import { PayPanelContext } from './PayPanelContext';

const { Paragraph } = Typography;
interface ShowCodeProps {
  selectedChainId: number | string;
  onReturn: () => void;
}
export const ShowCode: React.FC<ShowCodeProps> = ({ selectedChainId, onReturn }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-pay-panel');
  const { token, amount, target, wallets, onFinish } = useContext(PayPanelContext);
  const toAddress = target[selectedChainId].address;

  const [paymentLink, setPaymentLink] = useState<string>(toAddress);

  const availableWallets = useMemo(() => {
    const selectedChain = target[selectedChainId].chain;
    return wallets.filter((wallet) =>
      wallet.supportChainTypes?.some((chainType) => chainType === selectedChain.type),
    );
  }, [selectedChainId]);

  const tokenChannel = useMemo(() => {
    const tokenChannelInfo = token.availableChains.find(
      (channel) => channel.chain.id === Number(selectedChainId),
    );
    return tokenChannelInfo;
  }, [selectedChainId]);

  const returnLinks = (payQRCodeFormatterFunc: (params: Record<string, any>) => string) => {
    const formattedLink = payQRCodeFormatterFunc({
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
    },
  ];
  const walletItems = normalAddress.concat(
    availableWallets.map((wallet) => {
      return {
        label: wallet.name,
        key: wallet.name,
        icon: wallet.icon,
      };
    }),
  );
  const onWalletSelect = (activeKey: string) => {
    const selectWalletInfo = availableWallets.find((wallet) => wallet.name === activeKey);
    let links = toAddress;
    if (selectWalletInfo && selectWalletInfo.payQRCodeFormatterFunc) {
      links = returnLinks(selectWalletInfo.payQRCodeFormatterFunc);
    }
    setPaymentLink(links);
  };

  return (
    <>
      <div className={`${prefixCls}-code-title`}>
        Send {token.symbol} on {target[selectedChainId].chain.name} network
      </div>

      <Statistic
        className={`${prefixCls}-amount`}
        value={Number(amount) / Math.pow(10, token.decimal)}
        precision={4}
      />
      <Tabs items={walletItems} onChange={onWalletSelect} />
      <div className={`${prefixCls}-code-content`}>
        <div className={`${prefixCls}-code-tips`}>
          <InfoCircleOutlined />
          <span>Please scan the QR code or copy the address</span>
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
