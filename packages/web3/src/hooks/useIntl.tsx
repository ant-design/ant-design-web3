import React from 'react';
import { ConfigContext } from '@ant-design/web3-common';
import type { Locale, IntlType, ConfigConsumerProps } from '@ant-design/web3-common';

type ComponentName = keyof Locale;

export default function useIntl(
  componentName: ComponentName,
  componentLocale?: Locale[ComponentName],
): IntlType {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  let intl: IntlType = context.intl;

  return {
    getMessage: (id, defaultMessage) => {
      if (componentLocale) {
        // TODO use componentLocale
        return intl.getMessage(id, defaultMessage);
      }
      return intl.getMessage(id, defaultMessage);
    },
  };
}
