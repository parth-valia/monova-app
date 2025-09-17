/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/theme";

type ThemeColor = keyof typeof Colors;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: ThemeColor
) {
  // Since we're not using dark mode, we can directly use the color from Colors
  if (props.light) {
    return props.light;
  }
  
  return Colors[colorName];
}
