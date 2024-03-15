import React from 'react';
import { ConfigProvider, message, Typography } from 'antd';
import type { Theme } from 'antd-token-previewer';
import { enUS, PreviewDemo, Previewer, ThemeEditor, zhCN } from 'antd-token-previewer';
import { useIntl, useLocale } from 'dumi';

import 'antd/es/style/reset.css';

import antdEnUS from 'antd/locale/en_US';
import antdZhCN from 'antd/locale/zh_CN';

const ThemeEditorPage: React.FC = () => {
  const [, contextHolder] = message.useMessage();
  const locale = useLocale();
  const intl = useIntl();

  const [advanced, setAdvanced] = React.useState(true);
  const [mode, setMode] = React.useState<string>('global');
  // const [isDark, setIsDark] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>({
    name: '自定义主题',
    key: 'secret theme',
    config: {},
  });

  const handleThemeChange = (newTheme: Theme) => {
    console.log(newTheme);
    setTheme(newTheme);
  };

  // useEffect(() => {
  //   const storedConfig = localStorage.getItem(ANT_DESIGN_V5_CUSTOM_THEME_PRO);
  //   if (storedConfig) {
  //     setTheme((prev) => ({
  //       ...prev,
  //       config: parseThemeConfig(JSON.parse(storedConfig)),
  //     }));
  //   }
  // }, []);

  return (
    <React.StrictMode>
      {contextHolder}
      <ConfigProvider
        locale={locale.id === 'zh-CN' ? antdZhCN : antdEnUS}
        // 目前文档还不支持切换暗色模式，所以这里暂时不处理
        // theme={{
        //   hashed: true,
        //   algorithm: isDark ? antdTheme.darkAlgorithm : undefined,
        // }}
      >
        {/* <ThemeEditor
          theme={theme}
          onThemeChange={handleThemeChange}
          locale={locale.id === 'zh-CN' ? zhCN : enUS}
          advanced={advanced}
          onAdvancedChange={setAdvanced}
          mode={mode as any}
          onModeChange={setMode}
          actions={
            <Typography.Text>
              {intl.formatMessage({ id: 'app.docs.theme-editor.export-tooltip' })}
            </Typography.Text>
          }
        >
          <PreviewDemo theme={theme} />
        </ThemeEditor> */}
        <Previewer
          theme={theme}
          // showTheme
          onThemeChange={(newConfig) => setTheme((t) => ({ ...t, config: newConfig }))}
        />
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default ThemeEditorPage;
