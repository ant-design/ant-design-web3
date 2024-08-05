import { useMemo } from 'react';
import { Affix, Card, Col, Divider, Flex, Input, Row, Tag, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { Link, usePrefersColor, useSidebarData } from 'dumi';

const useStyle = createStyles(({ token, css }) => ({
  componentsOverviewGroupTitle: css`
    margin-bottom: ${token.marginLG}px !important;
  `,
  componentsOverviewTitle: css`
    overflow: hidden;
    color: ${token.colorTextHeading};
    text-overflow: ellipsis;
  `,
  componentsOverviewImg: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 152px;
  `,
  componentsOverviewCard: css`
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      box-shadow:
        0 6px 16px -8px #00000014,
        0 9px 28px #0000000d,
        0 12px 48px 16px #00000008;
    }
  `,
  componentsOverviewAffix: css`
    display: flex;
    transition: all ${token.motionDurationSlow};
    justify-content: space-between;
  `,
  componentsOverviewSearch: css`
    padding: 0;
    box-shadow: none !important;
    .anticon-search {
      color: ${token.colorTextDisabled};
    }
  `,
  componentsOverviewContent: css`
    &:empty:after {
      display: block;
      padding: ${token.padding}px 0 ${token.paddingMD * 2}px;
      color: ${token.colorTextDisabled};
      text-align: center;
      border-bottom: 1px solid ${token.colorSplit};
      content: 'Not Found';
    }
  `,
}));

export default () => {
  const data = useSidebarData();
  const { styles } = useStyle();
  const { Title } = Typography;
  const [color = 'light'] = usePrefersColor();

  const groups = useMemo(
    () =>
      data
        .filter((item) => item.title)
        .map((item) => ({
          title: item.title || '',
          children: item.children.map((child) => ({
            title: child.frontmatter?.title || '',
            subtitle: child.frontmatter?.subtitle,
            cover: child.frontmatter?.cover,
            coverDark: child.frontmatter?.coverDark,
            link: child.link,
          })),
        })),
    [data],
  );

  return (
    <section className="markdown">
      <div className={styles.componentsOverviewContent}>
        {groups
          .filter((i) => i?.title)
          .map((group) => {
            const components = group.children;
            return components.length ? (
              <div key={group?.title}>
                <Title level={2} className={styles.componentsOverviewGroupTitle}>
                  <Flex gap="small" align="center">
                    <span style={{ fontSize: 24 }}>{group?.title}</span>
                    <Tag style={{ display: 'block' }}>{components.length}</Tag>
                  </Flex>
                </Title>
                <Row gutter={[24, 24]}>
                  {components.map((component) => {
                    let url = `${component.link}`;

                    return (
                      <Col xs={24} sm={12} lg={8} xl={6} key={component?.title}>
                        <Link to={url} prefetch>
                          <Card
                            size="small"
                            className={styles.componentsOverviewCard}
                            title={
                              <div className={styles.componentsOverviewTitle}>
                                {component?.title} {component.subtitle}
                              </div>
                            }
                          >
                            <div className={styles.componentsOverviewImg}>
                              <img
                                src={
                                  color.includes('dark') && component.coverDark
                                    ? component.coverDark
                                    : component.cover
                                }
                                alt={component?.title}
                              />
                            </div>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            ) : null;
          })}
      </div>
    </section>
  );
};
