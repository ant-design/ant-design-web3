import React from 'react';
import classNames from 'classnames';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
  banner: css`
    margin-top: 68px;
  `,
}));

const Banner: React.FC = () => {
  const { styles } = useStyle();
  const mergedCls = classNames(styles.banner);
  return <div className={mergedCls}>banner</div>;
};

export default Banner;
