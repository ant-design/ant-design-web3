import { Locale, IntlType } from './types';
/**
 * Safe read value from object
 * @param source
 * @param path
 * @param defaultValue
 * @returns
 */
function get(source: Locale, path: string, defaultValue?: string): string | undefined {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = source;
  let message = defaultValue;

  for (const p of paths) {
    message = Object(result)[p];
    result = Object(result)[p];
    if (message === undefined) {
      return defaultValue;
    }
  }
  return message;
}

/**
 * Create an international operation function
 *
 * @param locale
 * @param localeMap
 */
export const createIntl = (localeMap: Locale): IntlType => ({
  getMessage: (id: string, defaultMessage: string) =>
    get(localeMap, id, defaultMessage) || defaultMessage,
});

export * from './types';
