import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography, TouchTargets } from '@/constants/theme';
import { Accessibility } from '@/constants/accessibility';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface FilterChipProps {
  label: string;
  isActive?: boolean;
  onPress: () => void;
  size?: 'small' | 'medium';
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function FilterChip({ label, isActive = false, onPress, size = 'medium' }: FilterChipProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
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
    size === 'small' && styles.chipSmall,
    {
      backgroundColor: isActive ? colors.chipActive : colors.chip,
      borderColor: isActive ? colors.chipActive : colors.border,
    },
    size === 'small' && styles.chipSmall,
    animatedStyle
  ];

  const textStyle = [
    styles.text,
    size === 'small' && styles.textSmall,
    {
      color: isActive ? colors.chipTextActive : colors.chipText,
    }
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
    justifyContent: 'center',
    alignItems: 'center',
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
