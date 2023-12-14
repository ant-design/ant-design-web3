import { EthereumCircleFilled, USDTCircleFilled, WalletColorful } from '@ant-design/web3-icons';
import styles from './index.module.less';
import type { MenuProps, MenuItemType } from 'antd';
import { Button, Dropdown, Divider } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: 'Ethereum',
    icon: <EthereumCircleFilled />,
  },
  {
    key: '2',
    label: 'Tether',
    // TODO: replace with Tether icon
    icon: <USDTCircleFilled />,
  },
];

export default () => {
  const [key, setKey] = React.useState('1');

  const currentItem = items.find((item) => item.key === key)!;

  const currentIcon = React.cloneElement(currentItem.icon, {
    style: {
      color: '#4877ea',
      fontSize: 22,
    },
  });

  const children = (
    <Button icon={currentIcon} type="text" style={{ width: 130 }}>
      {currentItem.label} <CaretDownOutlined style={{ color: '#9b9da2' }} />
    </Button>
  );

  const onClick: MenuProps['onClick'] = ({ key: currentKey }) => {
    setKey(currentKey);
  };

  return (
    <div className={classNames(styles.cardBg)}>
      <span className={styles.title}>Dropdown</span>
      <div className={styles.dropdownContainer}>
        <Dropdown menu={{ items, onClick }}>{children}</Dropdown>
        <Divider type="vertical" className={styles.divider} />
        <Button icon={<WalletColorful />} type="text">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
