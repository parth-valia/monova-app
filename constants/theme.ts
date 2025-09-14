/**
 * Theme constants for the Wardrobe App
 * Colors, typography, and spacing based on the reference design
 */

import { Platform } from 'react-native';

const tintColorLight = '#000000';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',
    background: '#F5F3F0', // Light beige background like in reference
    backgroundSecondary: '#FFFFFF', // White for cards
    tint: tintColorLight,
    icon: '#666666',
    tabIconDefault: '#999999',
    tabIconSelected: tintColorLight,
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    chip: '#F5F5F5',
    chipActive: '#000000',
    chipText: '#666666',
    chipTextActive: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.08)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    // Specific chip colors from reference
    chipWork: '#F4E6D7', // Peach for Work
    chipLeisure: '#E8F4F8', // Light blue for Leisure  
    chipDate: '#F8E8F4', // Light pink for Date
    chipParty: '#F0E8F8', // Light purple for Party
    chipWorkText: '#8B4513',
    chipLeisureText: '#2E8B57',
    chipDateText: '#D2691E',
    chipPartyText: '#8A2BE2',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    textTertiary: '#808080',
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    tint: tintColorDark,
    icon: '#B0B0B0',
    tabIconDefault: '#666666',
    tabIconSelected: tintColorDark,
    border: '#2A2A2A',
    borderLight: '#333333',
    chip: '#2A2A2A',
    chipActive: '#FFFFFF',
    chipText: '#B0B0B0',
    chipTextActive: '#121212',
    shadow: 'rgba(0, 0, 0, 0.3)',
    overlay: 'rgba(0, 0, 0, 0.6)',
    // Dark mode chip colors
    chipWork: '#3A2A1A',
    chipLeisure: '#1A2A2A', 
    chipDate: '#2A1A2A',
    chipParty: '#251A2A',
    chipWorkText: '#D2B48C',
    chipLeisureText: '#87CEEB',
    chipDateText: '#DDA0DD',
    chipPartyText: '#DA70D6',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  xxxxl: 64,
  xxxxxl: 80,
} as const;

// Touch target sizes for accessibility
export const TouchTargets = {
  small: 44,
  medium: 48,
  large: 56,
} as const;

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  full: 9999,
};

export const Typography = {
  sizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    xxxxl: 28,
    xxxxxl: 32,
  },
  weights: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
