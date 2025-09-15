import { BorderRadius, Colors, Spacing, Typography } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import React from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export function TabButton({ title, isActive, onPress }: TabButtonProps) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 100 });
    translateY.value = withSpring(2, { damping: 15, stiffness: 100 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 100 });
    translateY.value = withSpring(0, { damping: 15, stiffness: 100 });
  };

  const handlePress = () => {
    // Add a subtle flash animation when pressed
    opacity.value = withSequence(
      withTiming(0.7, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
    onPress();
  };

  return (
    <AnimatedPressable
      style={[styles.tabButton, animatedStyle]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`${title} tab`}
      accessibilityState={{ selected: isActive }}
    >
      <Text
        style={[
          styles.tabButtonText,
          {
            color: Colors.text,
          },
        ]}
      >
        {title}
      </Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.xl,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  tabButtonText: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.semibold,
  },
});
