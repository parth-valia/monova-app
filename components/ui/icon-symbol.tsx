import { Platform } from 'react-native';

// Import the appropriate component based on the platform
const IconSymbol = Platform.select({
  web: () => require('./icon-symbol.web').default,
  default: () => require('./icon-symbol.ios').IconSymbol,
})();

export { IconSymbol };
export default IconSymbol;
