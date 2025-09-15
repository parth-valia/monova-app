import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
  testID?: string;
  weight?: string;
};

// Map of custom icon names to Material Icons names
const iconMap: Record<string, string> = {
  'chevron.down': 'keyboard-arrow-down',
  'chevron.up': 'keyboard-arrow-up',
  'bookmark': 'bookmark',
  'bookmark.fill': 'bookmark',
  // Add more mappings as needed
};

/**
 * Web-specific implementation of the IconSymbol component.
 * Uses MaterialIcons from @expo/vector-icons for web platform.
 */
const WebIconSymbol: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'black',
  style,
  testID,
  ...rest
}) => {
  // Map custom icon names to Material Icons names
  const iconName = iconMap[name] || name;

  return (
    <MaterialIcons
      name={iconName as any}
      size={size}
      color={color}
      style={style}
      testID={testID}
      {...rest}
    />
  );
};

export default WebIconSymbol;
