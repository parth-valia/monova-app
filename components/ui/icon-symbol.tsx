import { Platform } from 'react-native';

let IconSymbol: any;

if (Platform.OS === 'web') {
  // For web, use the web component with Material Icons
  const WebIconSymbol = require('./icon-symbol.web').default;
  IconSymbol = WebIconSymbol;
} else {
  // For native platforms, use the native component
  const { IconSymbol: NativeIconSymbol } = require('./icon-symbol.ios');
  IconSymbol = NativeIconSymbol;
}

export { IconSymbol };
export default IconSymbol;
