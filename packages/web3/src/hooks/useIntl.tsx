import React from 'react';
import { ConfigContext } from '@ant-design/web3-common';
import type { Locale, ConfigConsumerProps, RequiredLocale } from '@ant-design/web3-common';

type ComponentName = keyof Locale;

interface IntlType<T extends ComponentName> {
  messages: RequiredLocale[T];
  getMessage: (message: string, values?: Record<string, string>) => string;
}

export default function useIntl<T extends ComponentName>(
  componentName: T,
  componentLocale?: Locale[T],
): IntlType<T> {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  const locale: RequiredLocale[T] = {
    ...context.defaultLocale[componentName],
    ...context?.locale?.[componentName],
    ...componentLocale,
  };

  return {
    messages: locale,
    getMessage: (message, values) => {
      if (values) {
        return message.replace(/\{([\w\.]+)\}/g, (_, key) => values[key]);
      }
      return message;
    },
  };
}

export { IntlType };
