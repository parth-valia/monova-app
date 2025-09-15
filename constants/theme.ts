/**
 * Theme constants for the Wardrobe App
 * Colors, typography, and spacing based on the reference design
 */

import { Platform } from "react-native";

export const Colors = {
  text: "#1A1A1A",
  textSecondary: "#5D5D5D",
  textTertiary: "#7A7A7A",
  background: "#FAFAFA",
  backgroundSecondary: "#FFFFFF",
  tint: "#000000",
  icon: "#444444",
  tabIconDefault: "#888888",
  tabIconSelected: "#000000",
  border: "#F1DBD2",
  borderLight: "#EEEEEE",
  chipBackground: "#F7E5DE",
  chipActive: "#2C2C2C",
  chipText: "#444444",
  chipTextActive: "#FFFFFF",
  shadow: "rgba(0, 0, 0, 0.1)",
  overlay: "rgba(0, 0, 0, 0.6)",
  // Specific chip colors with better contrast
  chipWork: "#FFE8D6",
  chipLeisure: "#E0F2FE",
  chipDate: "#FCE7F3",
  chipParty: "#F3E8FF",
  chipWorkText: "#9A3412",
  chipLeisureText: "#0E7490",
  chipDateText: "#BE185D",
  chipPartyText: "#7E22CE",
  orange: "#D46A3C",
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
    light: "300" as const,
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
