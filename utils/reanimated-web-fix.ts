import { Platform } from 'react-native';
import { interpolate, Extrapolate } from 'react-native-reanimated';

// Web polyfill for React Native Reanimated functions that aren't supported on web
export const reanimatedWebFix = () => {
  if (Platform.OS === 'web') {
    // Polyfill for clamp function on web
    const originalClamp = require('react-native-reanimated').clamp;
    if (!originalClamp) {
      // Create a clamp polyfill using interpolate
      const clamp = (value: number, min: number, max: number) => {
        'worklet';
        return interpolate(value, [min, max], [min, max], Extrapolate.CLAMP);
      };
      
      // Attach to global if needed
      if (typeof global !== 'undefined') {
        (global as any).clamp = clamp;
      }
    }

    // Fix for _WORKLET detection on web
    if (typeof window !== 'undefined') {
      (window as any)._WORKLET = false;
    }

    // Suppress reanimated logging on web
    if (typeof global !== 'undefined') {
      (global as any).__reanimatedLogLevel = 'error';
    }
  }
};

// Initialize the fix
reanimatedWebFix();
