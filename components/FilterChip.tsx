import {
  BorderRadius,
  Colors,
  Spacing,
  TouchTargets,
  Typography,
} from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Accessibility } from "@/constants/accessibility";
import React from "react";

interface FilterChipProps {
  label: string;
  isActive?: boolean;
  onPress: () => void;
  size?: "small" | "medium";
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FilterChip({
  label,
  isActive = false,
  onPress,
  size = "medium",
}: FilterChipProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  const chipStyle = [
    styles.chip,
    size === "small" && styles.chipSmall,
    {
      backgroundColor: isActive ? Colors.chipActive : Colors.chip,
      borderColor: isActive ? Colors.chipActive : Colors.border,
    },
    size === "small" && styles.chipSmall,
    animatedStyle,
  ];

  const textStyle = [
    styles.text,
    size === "small" && styles.textSmall,
    {
      color: isActive ? Colors.chipTextActive : Colors.chipText,
    },
  ];

  return (
    <AnimatedPressable
      style={chipStyle}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      accessibilityLabel={`${Accessibility.labels.filterChip}: ${label}`}
      accessibilityHint={Accessibility.hints.filterChip}
    >
      <Text style={textStyle}>{label}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    marginRight: Spacing.sm,
    marginBottom: Spacing.sm,
    minHeight: TouchTargets.small, // Ensure 44px minimum touch target
    minWidth: TouchTargets.small,
    justifyContent: "center",
    alignItems: "center",
  },
  chipSmall: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    minHeight: TouchTargets.small, // Maintain accessibility even for small chips
  },
  text: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
  },
  textSmall: {
    fontSize: Typography.sizes.sm,
  },
});
