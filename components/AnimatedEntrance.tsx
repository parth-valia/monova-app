import React, { useEffect } from 'react';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withDelay,
  runOnJS
} from 'react-native-reanimated';

interface AnimatedEntranceProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: 'bottom' | 'top' | 'left' | 'right' | 'scale';
  onAnimationComplete?: () => void;
}

export function AnimatedEntrance({ 
  children, 
  delay = 0, 
  duration = 800,
  from = 'bottom',
  onAnimationComplete 
}: AnimatedEntranceProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(from === 'bottom' ? 50 : from === 'top' ? -50 : 0);
  const translateX = useSharedValue(from === 'left' ? -50 : from === 'right' ? 50 : 0);
  const scale = useSharedValue(from === 'scale' ? 0.8 : 1);

  useEffect(() => {
    const springConfig = {
      damping: 15,
      stiffness: 150,
      mass: 1,
    };

    opacity.value = withDelay(
      delay,
      withSpring(1, springConfig, (finished) => {
        if (finished && onAnimationComplete) {
          runOnJS(onAnimationComplete)();
        }
      })
    );

    if (from === 'bottom' || from === 'top') {
      translateY.value = withDelay(delay, withSpring(0, springConfig));
    }

    if (from === 'left' || from === 'right') {
      translateX.value = withDelay(delay, withSpring(0, springConfig));
    }

    if (from === 'scale') {
      scale.value = withDelay(delay, withSpring(1, springConfig));
    }
  }, [delay, from, onAnimationComplete]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
      { scale: scale.value },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
}
