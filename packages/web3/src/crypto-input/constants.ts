import { type CryptoInputProps } from '.';

export type Size = Exclude<CryptoInputProps['size'], undefined>;

/**
 * CryptoInput overwrite InputFontSizeSM token
 */
export const INPUT_FONT_SIZE_SM = 16;

/**
 * CryptoInput overwrite InputFontSize token
 */
export const INPUT_FONT_SIZE = 18;

/**
 * CryptoInput overwrite InputFontSizeLG token
 */
export const INPUT_FONT_SIZE_LG = 20;

/**
 * CryptoInput overwrite PaddingInline token
 */
export const PADDING_INLINE = 0;

/**
 * CryptoInput overwrite PaddingBlock token
 */
export const PADDING_BLOCK = 0;
