import React from 'react';
import classNames from 'classnames';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
  componentsShow: css`
    //
  `,
}));

const ComponentsShow: React.FC = () => {
  const { styles } = useStyle();
  const mergedCls = classNames(styles.componentsShow);
  return <div className={mergedCls}>components-show</div>;
};

export default ComponentsShow;
