import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import EasyIcon from 'react-native-easy-icon';

type IconType = 
  | 'antdesign'
  | 'entypo'
  | 'evilicon'
  | 'feather'
  | 'font-awesome'
  | 'font-awesome5'
  | 'fontisto'
  | 'foundation'
  | 'ionicon'
  | 'material-community'
  | 'material'
  | 'octicon'
  | 'simple-line-icon'
  | 'zocial';

interface IconProps {
  /**
   * Name of the icon
   */
  name: string;
  /**
   * Size of the icon (default: 24)
   */
  size?: number;
  /**
   * Color of the icon (default: 'black')
   */
  color?: string;
  /**
   * Additional styles
   */
  style?: StyleProp<TextStyle>;
  /**
   * Icon set to use (default: 'material')
   */
  type?: IconType;
  /**
   * Test ID for testing purposes
   */
  testID?: string;
}

/**
 * A flexible icon component that supports multiple icon sets using react-native-easy-icon.
 * Defaults to MaterialIcons if no type is specified.
 * 
 * @example
 * // Material Icons (default)
 * <Icon name="home" />
 * 
 * // FontAwesome
 * <Icon name="star" type="FontAwesome" />
 * 
 * // With custom color and size
 * <Icon name="heart" color="red" size={32} />
 */
export function Icon({
  name,
  size = 24,
  color = 'black',
  style,
  type = 'material',
  testID,
  ...rest
}: IconProps) {
  return (
    <EasyIcon
      type={type}
      name={name}
      color={color}
      size={size}
      style={style}
      testID={testID}
      {...rest}
    />
  );
}

// Export common icon names for better autocomplete
export const Icons = {
  // Material Icons (https://material.io/resources/icons/)
  material: {
    home: 'home',
    search: 'search',
    settings: 'settings',
    add: 'add',
    close: 'close',
    menu: 'menu',
    arrowBack: 'arrow-back',
    arrowForward: 'arrow-forward',
    check: 'check',
    delete: 'delete',
    edit: 'edit',
    favorite: 'favorite',
    favoriteBorder: 'favorite-border',
    share: 'share',
    bookmark: 'bookmark',
    bookmarkBorder: 'bookmark-border',
  } as const,

  // FontAwesome (https://fontawesome.com/v4/icons/)
  fontawesome: {
    star: 'star',
    heart: 'heart',
    user: 'user',
    bell: 'bell',
    camera: 'camera',
    cog: 'cog',
    envelope: 'envelope',
  } as const,

  // Ionicons (https://ionic.io/ionicons)
  ionicons: {
    home: 'home',
    heart: 'heart',
    person: 'person',
    settings: 'settings',
    search: 'search',
    add: 'add',
    close: 'close',
    menu: 'menu',
  } as const,

  // Feather (https://feathericons.com/)
  feather: {
    home: 'home',
    user: 'user',
    settings: 'settings',
    search: 'search',
    plus: 'plus',
    x: 'x',
    menu: 'menu',
    heart: 'heart',
    star: 'star',
  } as const,
} as const;
