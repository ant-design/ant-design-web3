import React from 'react';
import classNames from 'classnames';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
  customTheme: css`
    //
  `,
}));

const CustomTheme: React.FC = () => {
  const { styles } = useStyle();
  const mergedCls = classNames(styles.customTheme);
  return <div className={mergedCls}>custom-theme</div>;
};

export default CustomTheme;
