import React, { Suspense } from 'react';
import { Skeleton } from 'antd';
import { createStyles } from 'antd-style';

import { Icon } from '../../common/styles';

const IconSearch = React.lazy(() => import('./IconSearch'));

const useStyle = createStyles(({ css }) => ({
  searchWrapper: css`
    display: flex;
    gap: 16px;
  `,
  fallbackWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `,
  skeletonWrapper: css`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `,
}));

const IconSearchFallback = () => {
  const { styles } = useStyle();

  return (
    <>
      <div className={styles.searchWrapper}>
        <Skeleton.Button active style={{ width: '100%', height: 40 }} />
        <Skeleton.Input active style={{ width: '100%', height: 40 }} />
      </div>
      <Skeleton.Button active style={{ margin: '28px 0 10px', width: 100 }} />
      <div className={styles.fallbackWrapper}>
        {Array(24)
          .fill(1)
          .map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey:
            <div key={index} className={styles.skeletonWrapper}>
              <Skeleton.Node active style={{ height: 110, width: '100%' }}>
                {' '}
              </Skeleton.Node>
            </div>
          ))}
      </div>
    </>
  );
};

const IconSearchWrapper: React.FC = () => (
  <Suspense fallback={<IconSearchFallback />}>
    <Icon />
    <IconSearch />
  </Suspense>
);

export default IconSearchWrapper;
