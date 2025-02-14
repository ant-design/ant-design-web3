// 获取 dumi-theme-antd 额外的配置
import { useSiteData } from 'dumi';

import type { IAllThemeConfig } from '../types';

interface IuseAdditionalThemeConfig {
  (): IAllThemeConfig;
}

const useAdditionalThemeConfig: IuseAdditionalThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig = themeConfig;

  return additionalThemeConfig;
};

export default useAdditionalThemeConfig;
