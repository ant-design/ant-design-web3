import React from 'react';
import classNames from 'classnames';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
  features: css`
    //
  `,
}));

const Features: React.FC = () => {
  const { styles } = useStyle();
  const mergedCls = classNames(styles.features);
  return <div className={mergedCls}>features</div>;
};

export default Features;
