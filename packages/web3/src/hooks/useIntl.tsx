import React from 'react';
import { ConfigContext } from '@ant-design/web3-common';
import type { Locale, ConfigConsumerProps, RequiredLocale } from '@ant-design/web3-common';

type ComponentName = keyof Locale;

interface IntlType {
  messages: RequiredLocale[ComponentName];
  getMessage: (
    message: RequiredLocale[ComponentName][keyof RequiredLocale[ComponentName]],
    values?: {
      [key: string]: string;
    },
  ) => string;
}

export default function useIntl(
  componentName: ComponentName,
  componentLocale?: Locale[ComponentName],
): IntlType {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  const locale: RequiredLocale[ComponentName] = {
    ...context.defaultLocale[componentName],
    ...context?.locale?.[componentName],
    ...componentLocale,
  };

  return {
    messages: locale,
    getMessage: (
      message: (typeof locale)[keyof typeof locale],
      values?: {
        [key: string]: string;
      },
    ) => {
      if (values) {
        return message.replace(/\{(\w+)\}/g, (_, key) => values[key]);
      }
      return message;
    },
  };
}

export { IntlType };
