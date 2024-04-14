import React from 'react';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import ContributorsList from 'github-contributors-lists';

import ContributorAvatar from './ContributorAvatar';

const useStyle = createStyles(({ token, css }) => ({
  contributorsList: css`
    margin-block-start: 120px !important;
    margin-block-end: 10px !important;
    padding-inline: 40px;
  `,
  listMobile: css`
    margin: 1em 0 !important;
  `,
  title: css`
    font-size: ${token.fontSizeSM}px;
    opacity: 0.5;
    margin-block-end: ${token.marginXS}px;
  `,
  list: css`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${token.motionDurationSlow};
      margin-inline-end: -${token.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `,
}));

interface ContributorsProps {
  filename?: string;
}

const Contributors: React.FC<ContributorsProps> = ({ filename }) => {
  const { styles } = useStyle();

  if (!filename) {
    return null;
  }

  return (
    <div className={classNames(styles.contributorsList)}>
      <ContributorsList
        style={{ paddingLeft: 24 }}
        cache
        repo="ant-design-web3"
        owner="ant-design"
        fileName={filename}
        className={styles.list}
        renderItem={(item, loading) => (
          <ContributorAvatar item={item} loading={loading} key={item?.url} />
        )}
      />
    </div>
  );
};

export default Contributors;
