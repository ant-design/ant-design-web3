import React from 'react';
import classNames from 'classnames';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
  header: css`
    width: 100%;
    height: 68px;
    position: fixed;
    top: 0;
  `,
}));

const Header: React.FC = () => {
  const { styles } = useStyle();
  const mergedCls = classNames(styles.header);
  return <header className={mergedCls}>header</header>;
};

export default Header;
