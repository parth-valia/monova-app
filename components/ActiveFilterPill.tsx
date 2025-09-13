import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface ActiveFilterPillProps {
  label: string;
  onRemove: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function ActiveFilterPill({ label, onRemove }: ActiveFilterPillProps) {
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

  return (
    <AnimatedPressable
      style={[
        styles.pill,
        {
          backgroundColor: colors.chipActive,
          borderColor: colors.chipActive,
        },
        animatedStyle
      ]}
      onPress={onRemove}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={`Remove ${label} filter`}
    >
      <Text style={[styles.text, { color: colors.chipTextActive }]}>
        {label}
      </Text>
      <View style={styles.closeIcon}>
        <IconSymbol
          name="xmark"
          size={12}
          color={colors.chipTextActive}
        />
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Spacing.md,
    paddingRight: Spacing.sm,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    marginRight: Spacing.sm,
    marginBottom: Spacing.sm,
    minHeight: 36,
  },
  text: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
    marginRight: Spacing.xs,
  },
  closeIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
