import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { MenuProps } from 'antd';
import { Tag } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { Link, useFullSidebarData, useLocale, useLocation, useSidebarData } from 'dumi';

import pkgJSON from '../../package.json';
import type {
  ISidebarGroupModePathItem,
  SidebarEnhanceGroupType,
  SidebarEnhanceItems,
  SidebarEnhanceItemType,
  SidebarEnhanceSubType,
  SidebarEnhanceType,
} from '../types';
import { handleFullSidebarData, removeTitleCode } from '../utils';
import useAdditionalThemeConfig from './useAdditionalThemeConfig';

export type UseMenuOptions = {
  before?: ReactNode;
  after?: ReactNode;
};

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const { pathname, search } = useLocation();
  const { sidebarGroupModePath, sidebarEnhance = {} } = useAdditionalThemeConfig();
  const { before, after } = options;

  const fullSidebarData = useFullSidebarData();
  const navSecondSidebarData = handleFullSidebarData(fullSidebarData);
  const locale = useLocale();

  // 提取一级导航下侧边栏数据
  const currentNavKey = `/${pathname.split('/')?.[1]}`;
  const sidebarData = navSecondSidebarData[currentNavKey];
  const linkTitleMap = useMemo(() => {
    return Object.values(fullSidebarData).reduce<Record<string, string>>((res, sidebar) => {
      const sidebarItems = sidebar.map((item) => item.children).flat();
      sidebarItems.forEach((item) => {
        res[item.link] = item.title;
      });
      return res;
    }, {});
  }, [fullSidebarData]);

  const currentSidebarEnhanceData = useMemo<SidebarEnhanceItems | undefined>(() => {
    const currentLink = Object.keys(sidebarEnhance).find((link) => pathname.startsWith(link));
    if (!currentLink) return undefined;
    return sidebarEnhance[currentLink];
  }, [pathname, sidebarEnhance]);
  const sidebarEnhanceMenuItems = useMemo<MenuProps['items']>(() => {
    const isItemMenu = (v: any): v is SidebarEnhanceItemType => {
      return v && typeof v === 'object' && 'link' in v && 'title' in v;
    };
    const isGroupMenu = (v: any): v is SidebarEnhanceGroupType => {
      return v && typeof v === 'object' && v.type === 'group';
    };
    const isSubMenu = (v: any): v is SidebarEnhanceSubType => {
      return v && typeof v === 'object' && 'children' in v;
    };
    function processMenu(menu: SidebarEnhanceType): ItemType {
      if (typeof menu === 'string') {
        // menu: '/introduction'
        return {
          key: menu,
          label: (
            <Link to={`${menu}${search}`}>
              {before}
              {linkTitleMap[menu]}
              {after}
            </Link>
          ),
        };
      }
      if (isGroupMenu(menu)) {
        // menu: { type: 'group', title: '组件', children: ['/components/button', { title: 'Installation', children: ['/aaa'] }] }
        return {
          type: 'group',
          label: menu.title,
          key: menu.title,
          children: menu.children.map(processMenu),
        };
      }
      if (isSubMenu(menu)) {
        return {
          key: menu.title,
          label: <span style={{ paddingLeft: 10 }}>{menu.title}</span>,
          children: menu.children.map(processMenu),
        };
      }
      if (isItemMenu(menu)) {
        // { title: 'aaa', link: '/xxx' }
        return {
          label: (
            <Link target={menu.target} to={menu.link}>
              {menu.title}
            </Link>
          ),
          key: menu.link,
        };
      }
      return null;
    }

    if (!currentSidebarEnhanceData) return undefined;
    return currentSidebarEnhanceData.map(processMenu);
  }, [after, before, currentSidebarEnhanceData, linkTitleMap, search]);

  const menuItems = useMemo<MenuProps['items']>(() => {
    const suffixRegExp = new RegExp(`${(locale as any)?.suffix ?? ''}$`, 'g');
    const sidebarItems = [...(sidebarData ?? [])];

    const getItemTag = (tag: string | { color: string; title: string }, show = true) =>
      tag &&
      show && (
        <Tag
          color={typeof tag === 'string' ? 'processing' : tag.color}
          bordered={false}
          style={{ marginInlineStart: 'auto', marginInlineEnd: 0, marginTop: -2 }}
        >
          {(typeof tag === 'string' ? tag : tag.title).replace('VERSION', `v${pkgJSON.version}`)}
        </Tag>
      );

    return (
      sidebarItems?.reduce<Exclude<MenuProps['items'] | { order?: number }[], undefined>>(
        (result, group) => {
          if (group?.title) {
            // sideBar menu group 模式, 默认以非 group 模式渲染
            const isSideBarGroupMode =
              sidebarGroupModePath === true
                ? true
                : (sidebarGroupModePath ?? []).filter((rule: ISidebarGroupModePathItem) => {
                    return pathname.startsWith(rule);
                  }).length > 0;

            if (isSideBarGroupMode) {
              result.push({
                type: 'group',
                label: group?.title,
                order: group?.order,
                key: group?.title,
                children: group.children?.map((item) => ({
                  label: (
                    <Link
                      to={`${item.link}${search}`}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      {before}
                      <span key="english">{removeTitleCode(item?.title)}</span>
                      <span className="chinese" key="chinese">
                        {removeTitleCode(item.frontmatter?.subtitle)}
                      </span>
                      {getItemTag(item.frontmatter?.tag, !before && !after)}
                      {after}
                    </Link>
                  ),
                  key: item.link.replace(suffixRegExp, ''),
                })),
              });
            } else {
              const childrenResultTypeOrder = {};
              const childrenGroup = group.children.reduce<
                Record<string, ReturnType<typeof useSidebarData>[number]['children']>
              >((childrenResult, child) => {
                const nextChildrenResult = childrenResult;
                const childType = child?.frontmatter?.type;
                // 兼容 type 为字符串 && object，object 支持排序
                const type =
                  typeof childType === 'string' ? childType : (childType?.title ?? 'default');

                if (!nextChildrenResult[type]) {
                  nextChildrenResult[type] = [];
                }
                if (!childrenResultTypeOrder[type]) {
                  childrenResultTypeOrder[type] = { title: type, order: childType?.order ?? -1 };
                } else if (childType?.order) {
                  childrenResultTypeOrder[type].order = childType.order;
                }

                nextChildrenResult[type].push(child);
                return nextChildrenResult;
              }, {});

              const childrenGroupOrdered = Object.keys(childrenGroup)
                .sort((a, b) => childrenResultTypeOrder[a].order - childrenResultTypeOrder[b].order)
                .reduce<Record<string, ReturnType<typeof useSidebarData>[number]['children']>>(
                  (obj, key) => {
                    const _obj = obj;
                    _obj[key] = childrenGroup[key];
                    return _obj;
                  },
                  {},
                );

              const childItems: any[] = [];
              childItems.push(
                ...(childrenGroupOrdered.default?.map((item) => ({
                  label: (
                    <Link
                      to={`${item.link}${search}`}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      {before}
                      {removeTitleCode(item?.title)}
                      {getItemTag(item.frontmatter?.tag, !before && !after)}
                      {after}
                    </Link>
                  ),
                  key: item.link.replace(suffixRegExp, ''),
                })) ?? []),
              );
              Object.entries(childrenGroupOrdered).forEach(([type, children]) => {
                if (type !== 'default') {
                  childItems.push({
                    type: 'group',
                    label: type,
                    key: type,
                    children: children?.map((item) => ({
                      label: (
                        <Link
                          to={`${item.link}${search}`}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          {before}
                          {removeTitleCode(item?.title)}
                          {getItemTag(item.frontmatter?.tag, !before && !after)}
                          {after}
                        </Link>
                      ),
                      key: item.link.replace(suffixRegExp, ''),
                    })),
                  });
                }
              });
              result.push({
                label: group?.title,
                key: group?.title,
                order: group?.order,
                children: childItems,
              });
            }
          } else {
            const list = group.children || [];
            // 如果有 date 字段，我们就对其进行排序
            if (list.every((info) => info?.frontmatter?.date)) {
              list.sort((a, b) => (a?.frontmatter?.date > b?.frontmatter?.date ? -1 : 1));
            }

            result.push(
              ...list.map((item) => ({
                order: item?.order,
                label: (
                  <Link
                    to={`${item.link}${search}`}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {before}
                    {removeTitleCode(item?.title)}
                    {getItemTag(item.frontmatter?.tag, !before && !after)}
                    {after}
                  </Link>
                ),
                key: item.link.replace(suffixRegExp, ''),
              })),
            );
          }

          // group 模式与 single 模式混合排序
          result.sort((a, b) => (a?.order < b?.order ? -1 : 1));
          return result;
        },
        [],
      ) ?? []
    );
  }, [sidebarData, sidebarGroupModePath, pathname, search, before, after, locale]);

  const selectedKey = pathname.replace(new RegExp(`${(locale as any)?.suffix ?? ''}$`, 'g'), '');
  return [sidebarEnhanceMenuItems || menuItems, selectedKey];
};

export default useMenu;
