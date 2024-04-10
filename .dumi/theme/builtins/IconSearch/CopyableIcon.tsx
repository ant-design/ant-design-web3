import * as React from 'react';
import * as AntdWeb3Icons from '@ant-design/web3-icons';
import { Badge, message } from 'antd';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

import type { ThemeType } from './IconSearch';

const allIcons: {
  [key: string]: any;
} = AntdWeb3Icons;

export interface CopyableIconProps {
  name: string;
  isNew: boolean;
  theme: ThemeType;
  justCopied: string | null;
  onCopied: (type: string, text: string) => any;
}

const CopyableIcon: React.FC<CopyableIconProps> = ({
  name,
  isNew,
  justCopied,
  onCopied,
  theme,
}) => {
  const className = classNames({
    copied: justCopied === name,
    [theme]: !!theme,

    // 一些白色图标需要添加背景色
    isWhite: name.includes('White'),
  });

  const onCopy = (text: string, result: boolean) => {
    if (result) {
      onCopied(name, text);
      return;
    }
    message.error('Copy icon name failed, please try again.');
  };

  return (
    <CopyToClipboard text={`<${name} />`} onCopy={onCopy}>
      <li className={className}>
        {React.createElement(allIcons[name])}
        <span className="anticon-class">
          <Badge dot={isNew}>{name}</Badge>
        </span>
      </li>
    </CopyToClipboard>
  );
};

export default CopyableIcon;
