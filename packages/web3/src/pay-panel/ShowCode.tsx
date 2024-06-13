import React, { useContext, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { WalletColorful } from '@ant-design/web3-icons';
import { Button, ConfigProvider, Flex, QRCode, Statistic, Tabs, Typography } from 'antd';
import { useIntl } from 'dumi';

import { PayPanelContext } from './PayPanelContext';

const { Paragraph } = Typography;
interface ShowCodeProps {
  selectedChainId: number | string;
  onReturn: () => void;
}
export const ShowCode: React.FC<ShowCodeProps> = ({ selectedChainId, onReturn }) => {
  const intl = useIntl();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-pay-panel');
  const { token, amount, target, supportedChains, wallets, onFinish } = useContext(PayPanelContext);
  const toAddress = target[selectedChainId].address;

  const [paymentLink, setPaymentLink] = useState<string>(toAddress);

  const selectedChain = supportedChains.find((chain) => chain.id === Number(selectedChainId));
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
      icon: <WalletColorful />,
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
    if (selectWalletInfo && selectWalletInfo.transferQRCodeFormatter) {
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
        value={Number(amount) / Math.pow(10, token.decimal)}
        precision={4}
        valueStyle={{ fontSize: 38 }}
      />
      <Tabs items={walletItems} onChange={onWalletSelect} />
      <div className={`${prefixCls}-code-content`}>
        <div className={`${prefixCls}-code-tips`}>
          <InfoCircleOutlined />
          <span>{intl.formatMessage({ id: 'app.docs.components.paypanel.tips' })}</span>
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
